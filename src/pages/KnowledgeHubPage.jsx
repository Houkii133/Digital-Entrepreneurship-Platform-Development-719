import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBookOpen, FiArrowRight, FiClock, FiUsers, FiStar, FiSearch } = FiIcons;

const KnowledgeHubPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    'All',
    'Getting Started',
    'Mindset & Motivation',
    'Marketing & Visibility',
    'Avoiding Burnout',
    'Templates & Tools',
    'Financial Smarts'
  ];

  const knowledgeItems = [
    {
      id: 1,
      category: "Getting Started",
      title: "How to Write a Simple Business Plan",
      description: "A step-by-step guide to creating a business plan that actually works, without the fluff and complexity.",
      readTime: "12 min read",
      difficulty: "Beginner",
      readers: "5,200+",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop",
      slug: "how-to-write-simple-business-plan",
      featured: true
    },
    {
      id: 2,
      category: "Mindset & Motivation",
      title: "Why You Shouldn't Wait for Motivation",
      description: "The psychology behind motivation and how to build systems that work even when you don't feel like it.",
      readTime: "8 min read",
      difficulty: "Intermediate",
      readers: "3,800+",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      slug: "why-you-shouldnt-wait-for-motivation"
    },
    {
      id: 3,
      category: "Getting Started",
      title: "Should You Go All In or Side Hustle First?",
      description: "A framework to help you decide between quitting your job or building your business on the side.",
      readTime: "10 min read",
      difficulty: "Beginner",
      readers: "4,100+",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
      slug: "all-in-vs-side-hustle-first"
    },
    {
      id: 4,
      category: "Marketing & Visibility",
      title: "What is SEO and How to Start",
      description: "A beginner-friendly guide to search engine optimization that actually drives traffic and customers.",
      readTime: "15 min read",
      difficulty: "Beginner",
      readers: "6,500+",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=400&h=250&fit=crop",
      slug: "what-is-seo-how-to-start"
    },
    {
      id: 5,
      category: "Mindset & Motivation",
      title: "Building Confidence When You Have None",
      description: "Practical strategies to build unshakeable confidence, even if you're starting from zero.",
      readTime: "9 min read",
      difficulty: "Intermediate",
      readers: "2,900+",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop",
      slug: "building-confidence-when-you-have-none"
    },
    {
      id: 6,
      category: "Templates & Tools",
      title: "Free 30-Day Productivity Challenge",
      description: "A complete system with templates and daily actions to transform your productivity in 30 days.",
      readTime: "20 min read",
      difficulty: "Beginner",
      readers: "8,200+",
      rating: 5.0,
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&h=250&fit=crop",
      slug: "free-30-day-productivity-challenge"
    },
    {
      id: 7,
      category: "Financial Smarts",
      title: "How to Price Your Digital Products",
      description: "The psychology and strategy behind pricing that maximizes both sales and profit margins.",
      readTime: "11 min read",
      difficulty: "Intermediate",
      readers: "3,600+",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      slug: "how-to-price-digital-products"
    },
    {
      id: 8,
      category: "Avoiding Burnout",
      title: "Entrepreneur Energy Management 101",
      description: "How to maintain high performance without burning out, including energy audit templates.",
      readTime: "13 min read",
      difficulty: "Intermediate",
      readers: "4,700+",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
      slug: "entrepreneur-energy-management-101"
    }
  ];

  const filteredItems = knowledgeItems.filter(item => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredItem = knowledgeItems.find(item => item.featured);
  const regularItems = filteredItems.filter(item => !item.featured);

  return (
    <>
      <Helmet>
        <title>Knowledge Hub - Comprehensive Business Learning Center | DrivenMind.io</title>
        <meta name="description" content="Access our comprehensive knowledge hub with structured learning articles, templates, and tools for entrepreneurs. Master mindset, marketing, finances, and more." />
        <meta name="keywords" content="business knowledge hub, entrepreneur learning, startup resources, business templates, entrepreneurship education" />
        <link rel="canonical" href="https://drivenmind.io/knowledge-hub" />
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
              Knowledge Hub
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Your comprehensive resource for structured learning. From business fundamentals 
              to advanced strategies, everything you need to build and scale your empire.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div>
                <div className="text-2xl font-bold text-primary-400">50+</div>
                <div className="text-sm text-gray-300">Articles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400">25+</div>
                <div className="text-sm text-gray-300">Templates</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-400">100K+</div>
                <div className="text-sm text-gray-300">Readers</div>
              </div>
            </div>
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
                placeholder="Search knowledge base..."
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

      {/* Featured Article */}
      {featuredItem && selectedCategory === 'All' && !searchTerm && (
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
                    src={featuredItem.image}
                    alt={featuredItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-dark-900 px-3 py-1 rounded-full text-sm font-medium">
                    {featuredItem.difficulty}
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {featuredItem.category}
                  </div>
                  <h2 className="text-3xl font-bold text-dark-900 mb-4">
                    <Link 
                      to={`/knowledge-hub/${featuredItem.slug}`}
                      className="hover:text-primary-600 transition-colors duration-200"
                    >
                      {featuredItem.title}
                    </Link>
                  </h2>
                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {featuredItem.description}
                  </p>
                  
                  {/* Meta Info */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiClock} className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{featuredItem.readTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiUsers} className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{featuredItem.readers}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{featuredItem.rating}</span>
                    </div>
                  </div>

                  <Link
                    to={`/knowledge-hub/${featuredItem.slug}`}
                    className="inline-flex items-center space-x-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200"
                  >
                    <span>Read Article</span>
                    <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Knowledge Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </div>
                    <div className="absolute top-4 right-4 bg-white text-dark-900 px-3 py-1 rounded-full text-xs font-medium">
                      {item.difficulty}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      <Link to={`/knowledge-hub/${item.slug}`}>
                        {item.title}
                      </Link>
                    </h3>

                    <p className="text-dark-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiClock} className="w-4 h-4" />
                          <span>{item.readTime}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <SafeIcon icon={FiUsers} className="w-4 h-4" />
                          <span>{item.readers}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>

                    <Link
                      to={`/knowledge-hub/${item.slug}`}
                      className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                    >
                      <SafeIcon icon={FiBookOpen} className="w-4 h-4" />
                      <span>Read Article</span>
                    </Link>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Take Action?</h3>
            <p className="text-lg opacity-90 mb-8">
              Knowledge without action is worthless. Get our proven products and start 
              implementing what you've learned today.
            </p>
            <Link
              to="/products"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-flex items-center space-x-2"
            >
              <span>View Products</span>
              <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default KnowledgeHubPage;