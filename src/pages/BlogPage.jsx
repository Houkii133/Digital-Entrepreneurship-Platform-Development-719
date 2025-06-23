import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUser, FiSearch, FiFilter } = FiIcons;

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Starting a Business',
    'Mindset & Mental Toughness',
    'Focus & Time Management',
    'Marketing & Sales',
    'Financial Intelligence',
    'AI & Business Tools',
    'Burnout Prevention',
    'Founder Stories',
    'Personal Growth'
  ];

  const blogPosts = [
    {
      id: 1,
      category: "Mindset & Mental Toughness",
      title: "Why 99% Quit and How to Be the 1%",
      excerpt: "The brutal truth about what separates successful entrepreneurs from those who give up. It's not talent, luck, or connections - it's something much more fundamental.",
      author: "Alex Rivera",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=300&fit=crop",
      slug: "why-99-percent-quit-how-to-be-the-1-percent",
      featured: true
    },
    {
      id: 2,
      category: "Focus & Time Management",
      title: "The 80/20 Rule for Founders",
      excerpt: "How to identify the 20% of activities that drive 80% of your results and scale your business faster than you ever thought possible.",
      author: "Sarah Mitchell",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=300&fit=crop",
      slug: "80-20-rule-for-founders"
    },
    {
      id: 3,
      category: "AI & Business Tools",
      title: "10 AI Tools Every New Founder Needs",
      excerpt: "Cut your workload in half with these AI tools that handle everything from content creation to customer service, giving you more time to focus on growth.",
      author: "Marcus Chen",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=300&fit=crop",
      slug: "10-ai-tools-every-new-founder-needs"
    },
    {
      id: 4,
      category: "Starting a Business",
      title: "Should You Go All In or Side Hustle First?",
      excerpt: "The pros and cons of each approach, plus a framework to help you make the right decision for your specific situation and risk tolerance.",
      author: "Jennifer Walsh",
      readTime: "7 min read",
      date: "Dec 8, 2024",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
      slug: "all-in-vs-side-hustle-first"
    },
    {
      id: 5,
      category: "Personal Growth",
      title: "Self-Discipline as a Superpower",
      excerpt: "Why self-discipline is the ultimate competitive advantage and how to build it systematically, even if you've always struggled with consistency.",
      author: "David Park",
      readTime: "9 min read",
      date: "Dec 5, 2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop",
      slug: "self-discipline-as-superpower"
    },
    {
      id: 6,
      category: "Marketing & Sales",
      title: "Creating a Brand People Remember",
      excerpt: "The psychology behind memorable brands and a step-by-step process to build a brand that sticks in your customers' minds long after they leave.",
      author: "Lisa Thompson",
      readTime: "11 min read",
      date: "Dec 3, 2024",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=300&fit=crop",
      slug: "creating-memorable-brand"
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <>
      <Helmet>
        <title>Blog - Entrepreneurship, Mindset & Business Strategy | DrivenMind.io</title>
        <meta name="description" content="Read actionable insights on entrepreneurship, mindset, business strategy, and startup survival. Proven strategies from successful founders and experts." />
        <meta name="keywords" content="entrepreneur blog, business strategy, startup advice, mindset, business growth, founder stories" />
        <link rel="canonical" href="https://drivenmind.io/blog" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-dark-900 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Insights That Drive Success
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Actionable insights, proven strategies, and real-world case studies 
              from successful entrepreneurs who've survived and thrived.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <SafeIcon icon={FiSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {featuredPost.category}
                  </div>
                  <h2 className="text-3xl font-bold text-dark-900 mb-4">
                    <Link 
                      to={`/blog/${featuredPost.slug}`}
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      {featuredPost.title}
                    </Link>
                  </h2>
                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-dark-500">
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiUser} className="w-4 h-4" />
                        <span>{featuredPost.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiClock} className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                    <span className="text-sm text-dark-500">{featuredPost.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-dark-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-dark-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiUser} className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiClock} className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogPage;