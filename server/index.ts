import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  // 🧠 Setup routes
  await registerRoutes(app);

  // 🛑 Error handler
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // 🧪 Dev or Prod build
  if (app.get("env") === "development") {
    await setupVite(app); // dev mode
  } else {
    serveStatic(app); // prod mode
  }

  // ✅ Render-friendly port + host
  const port = parseInt(process.env.PORT || "10000", 10);

  // 🎯 MAIN FIX: use `app.listen()` not `server.listen()`
  app.listen(port, "0.0.0.0", () => {
    log(`✅ Server listening on http://0.0.0.0:${port} (${app.get("env")} mode)`);
  });
})();
