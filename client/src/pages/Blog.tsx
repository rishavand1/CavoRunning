import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "wouter";

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Enterprise Solutions",
    excerpt: "Explore how artificial intelligence is transforming business operations and decision-making processes in enterprise environments.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Artificial Intelligence",
    date: "March 15, 2024",
    author: "Sarah Chen",
    slug: "future-of-ai-enterprise-solutions"
  },
  {
    id: 2,
    title: "Cybersecurity Best Practices for Remote Work",
    excerpt: "Learn essential cybersecurity measures to protect your business and employees in remote working environments.",
    image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cybersecurity",
    date: "February 28, 2024",
    author: "Rishav Anand",
    slug: "cybersecurity-best-practices-remote-work"
  },
  {
    id: 3,
    title: "Cloud Migration: Strategies for Success",
    excerpt: "Discover effective strategies for migrating your business infrastructure to cloud platforms with minimal disruption.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Cloud Computing",
    date: "January 20, 2024",
    author: "Rishav Anand",
    slug: "cloud-migration-strategies-success"
  },
  {
    id: 4,
    title: "Machine Learning Models for Predictive Analytics",
    excerpt: "An overview of the most effective machine learning models for implementing predictive analytics in your business.",
    image: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Machine Learning",
    date: "January 5, 2024",
    author: "Maya Patel",
    slug: "machine-learning-models-predictive-analytics"
  }
];

// Filter categories from blog posts
const categories = Array.from(new Set(blogPosts.map(post => post.category)));

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <Layout currentTab="blog">
      <div className="pt-28 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4">Our Blog</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Stay updated with the latest trends, insights, and innovations in technology, AI, and cybersecurity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
            {/* Filters and Search */}
            <div className="md:col-span-3 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-[#050507] p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-outfit font-semibold mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 bg-[#2A2A3A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 absolute right-3 top-2.5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-[#050507] p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-outfit font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`text-sm ${
                        selectedCategory === null ? "text-[#4F8FFF] font-medium" : "text-gray-400 hover:text-white"
                      } transition-colors`}
                    >
                      All Categories
                    </button>
                  </li>
                  {categories.map((category, index) => (
                    <li key={index}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className={`text-sm ${
                          selectedCategory === category
                            ? "text-[#4F8FFF] font-medium"
                            : "text-gray-400 hover:text-white"
                        } transition-colors`}
                      >
                        {category}
                      </button>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-[#050507] p-6 rounded-xl border border-gray-800"
              >
                <h3 className="text-xl font-outfit font-semibold mb-4">Subscribe</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Get the latest articles and insights delivered to your inbox.
                </p>
                <form className="space-y-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 bg-[#2A2A3A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4F8FFF] text-white"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-gradient-to-r from-[#4F8FFF] to-[#9D4EDD] rounded-lg font-outfit font-medium text-white"
                  >
                    Subscribe
                  </button>
                </form>
              </motion.div>
            </div>

            {/* Blog Posts */}
            <div className="md:col-span-9">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.length > 0 ? (
                  filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="blog-card bg-[#050507] rounded-xl overflow-hidden border border-gray-800 transition-all duration-300 hover:transform hover:translate-y-[-5px] hover:shadow-lg"
                    >
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-xs font-medium text-[#4F8FFF] bg-[#4F8FFF]/10 py-1 px-2 rounded">
                            {post.category}
                          </span>
                          <span className="text-xs text-gray-400">{post.date}</span>
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <h3 className="text-xl font-outfit font-semibold mb-2 hover:text-[#4F8FFF] transition-colors">
                            {post.title}
                          </h3>
                        </Link>
                        <p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-400">By {post.author}</span>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-[#4F8FFF] font-medium text-sm inline-flex items-center"
                          >
                            Read more
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4 ml-1"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-10">
                    <h3 className="text-lg text-gray-400">No blog posts found matching your criteria.</h3>
                    <button
                      onClick={() => {
                        setSelectedCategory(null);
                        setSearchQuery("");
                      }}
                      className="mt-4 text-[#4F8FFF] font-medium"
                    >
                      Clear filters
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}