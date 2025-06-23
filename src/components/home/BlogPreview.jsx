import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiArrowRight, FiUser } = FiIcons;

const BlogPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const blogPosts = [
    {
      category: "Mindset",
      title: "Why 99% Quit and How to Be the 1%",
      excerpt: "The brutal truth about what separates successful entrepreneurs from those who give up. It's not what you think.",
      author: "Alex Rivera",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
      slug: "why-99-percent-quit-how-to-be-the-1-percent"
    },
    {
      category: "Strategy",
      title: "The 80/20 Rule for Founders",
      excerpt: "How to identify the 20% of activities that drive 80% of your results and scale your business faster.",
      author: "Sarah Mitchell",
      readTime: "6 min read",
      date: "Dec 12, 2024",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      slug: "80-20-rule-for-founders"
    },
    {
      category: "AI Tools",
      title: "10 AI Tools Every New Founder Needs",
      excerpt: "Cut your workload in half with these AI tools that handle everything from content creation to customer service.",
      author: "Marcus Chen",
      readTime: "10 min read",
      date: "Dec 10, 2024",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop",
      slug: "10-ai-tools-every-new-founder-needs"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Latest Insights & Strategies
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
            Stay ahead of the game with actionable insights, proven strategies, and real-world 
            case studies from successful entrepreneurs.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
          >
            <span>Read All Articles</span>
            <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Featured Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                  <Link to={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <p className="text-dark-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
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
      </div>
    </section>
  );
};

export default BlogPreview;