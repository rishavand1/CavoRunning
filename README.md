# CAVO - Modern Tech Company Portfolio

A bold, modern React portfolio website for Cavo showcasing AI, cybersecurity, and tech development services. Built with React, Three.js, and Tailwind CSS.

![CAVO Portfolio Website](./generated-icon.png)

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Customization Guide](#customization-guide)
  - [Modifying Content](#modifying-content)
  - [Styling](#styling)
  - [Adding Pages](#adding-pages)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)

## Features

- Modern, responsive design with horizontal navigation
- Interactive 3D elements using Three.js
- Animated UI components with Framer Motion
- Carousel/slider for services and projects display
- Mobile-friendly layout
- Dark theme with gradient accents

## Installation

To get started with this project locally, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone <repository-url>
   cd cavo-portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Running the Project

To run the project locally:

```
npm run dev
```

This will start both the frontend and backend server. The application will be available at [http://localhost:5000](http://localhost:5000).

## Project Structure

The project is organized as follows:

```
/
├── client/            # Frontend code
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── hooks/        # Custom React hooks
│   │   ├── lib/          # Utility functions and constants
│   │   ├── pages/        # Page components
│   │   ├── App.tsx       # Main App component
│   │   └── main.tsx      # Entry point
│   └── index.html        # HTML template
├── server/            # Backend server
│   ├── index.ts       # Server entry point
│   └── routes.ts      # API routes
├── shared/            # Shared code between client and server
│   └── schema.ts      # Database schema
└── package.json       # Project dependencies
```

## Customization Guide

### Modifying Content

#### Service Cards

To modify the services displayed on the website, edit the `serviceData` array in `client/src/lib/constants.ts`:

```typescript
// Services data
export const serviceData = [
  {
    iconName: "code-bracket", // This uses heroicons - see available icons at heroicons.com
    title: "AI Automation",
    description: "Smart automation solutions that streamline workflows..."
  },
  // Add or edit more services here
];
```

#### Service Details (Learn More)

When a user clicks "Learn More" on a service card, they'll see a dialog with detailed information about that service. You can modify these details in the `ServiceDetails.tsx` component:

```typescript
// In client/src/components/ServiceDetails.tsx
const servicesDetails = {
  "AI Automation": {
    title: "🤖 AI-Powered / Machine Learning Services",
    services: [
      {
        name: "Chatbots & Virtual Assistants (LLMs)",
        description: "Smart bots that talk like humans and solve customer queries 24/7."
      },
      // Add or edit more details here
    ]
  },
  // Other services...
};
```

Make sure that the key (e.g., "AI Automation") matches exactly with the `title` field in the corresponding service card from `serviceData`.

#### Project Cards

To modify the projects displayed, edit the `projectData` array in the same file:

```typescript
// Project data
export const projectData = [
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "AI-Powered Analytics Dashboard",
    description: "A comprehensive analytics solution with AI-driven insights...",
    tags: ["AI", "Data Visualization", "React"],
    link: "#"
  },
  // Add or edit more projects here
];
```

#### Team Members

To modify team members information, edit the `teamData` array:

```typescript
// Team data
export const teamData = [
  {
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
    name: "Rishav Anand",
    role: "CEO & Founder"
  },
  // Add or edit more team members here
];
```

### Modifying Pages

#### Home Page

To modify the home page content, edit `client/src/pages/Home.tsx`. 

#### Services Page

To modify the services page, edit `client/src/pages/Services.tsx`. 

#### About Page

To modify the about page, edit `client/src/pages/About.tsx`.

#### Contact Page

To modify the contact page, edit `client/src/pages/Contact.tsx`.

### Styling

#### Theme Colors

To change the theme colors, you can modify the gradient colors and background colors in the components. The main colors used throughout the site are:

- Primary blue: `#4F8FFF`
- Secondary purple: `#9D4EDD`
- Background dark: `#0A0A10`
- Dark sections: `#050507`
- Card backgrounds: `#2A2A3A`

You can change these colors by searching for them in the codebase and replacing them with your preferred colors.

#### Tailwind Configuration

For more extensive styling changes, you can modify the Tailwind configuration in `tailwind.config.ts`.

### Adding Pages

To add a new page to the website:

1. Create a new page component in `client/src/pages/`
2. Add the route in `client/src/App.tsx`:

```typescript
// In App.tsx
<Route path="/your-new-page" component={YourNewPage} />
```

3. Add a link to the page in the navigation by updating the `navItems` array in `client/src/components/Navbar.tsx`:

```typescript
const navItems = [
  // ... existing items
  { id: "your-new-page", label: "Your New Page", path: "/your-new-page" }
];
```

## Deployment

To deploy this project to a production environment:

1. Build the project:
   ```
   npm run build
   ```

2. The build artifacts will be located in the `dist` directory.

3. Deploy these files to your web server or hosting platform of choice.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Three.js
- Framer Motion
- Embla Carousel
- Express (for backend)
- Vite (for build process)

---

© 2023 CAVO Technologies. All rights reserved.