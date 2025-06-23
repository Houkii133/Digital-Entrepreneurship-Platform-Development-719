import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBookOpen, FiPlay, FiFileText, FiDownload, FiStar, FiCheck } = FiIcons;

const ProductsPage = () => {
  const products = [
    {
      type: "E-book",
      icon: FiBookOpen,
      title: "Start Before You're Ready",
      subtitle: "The Perfectionist's Guide to Taking Action",
      description: "Stop waiting for the perfect moment and learn how to take massive action even when you feel unprepared. This comprehensive guide reveals the mental shifts and practical strategies used by successful entrepreneurs to overcome perfectionism and launch their dreams.",
      price: "$29",
      originalPrice: "$49",
      rating: 4.9,
      students: "2,500+",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=face",
      features: [
        "7 chapters of actionable content",
        "Mental framework worksheets",
        "Real entrepreneur case studies",
        "30-day action challenge",
        "Lifetime updates"
      ],
      testimonial: {
        text: "This book literally changed my life. I went from analysis paralysis to launching my business in 30 days.",
        author: "Sarah Chen, Tech Founder"
      }
    },
    {
      type: "Course",
      icon: FiPlay,
      title: "Zero to 100K: Your First 5 Years",
      subtitle: "Complete Business Survival System",
      description: "The most comprehensive course on surviving and thriving in your first 5 years of business. Covers everything from idea validation to scaling your first six-figure business with proven frameworks and real-world case studies.",
      price: "$197",
      originalPrice: "$497",
      rating: 4.8,
      students: "1,200+",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      features: [
        "12+ hours of video content",
        "5 comprehensive modules",
        "Business plan templates",
        "Financial tracking sheets",
        "Private community access",
        "Monthly group coaching calls",
        "1-year money-back guarantee"
      ],
      testimonial: {
        text: "From $0 to $150K in revenue in 18 months. This course gave me the roadmap I desperately needed.",
        author: "Marcus Rodriguez, E-commerce Owner"
      }
    },
    {
      type: "Guide",
      icon: FiFileText,
      title: "The No-Quit Blueprint",
      subtitle: "Mental Toughness for Entrepreneurs",
      description: "Build unshakeable mental resilience with this systematic approach to developing entrepreneur-level mental toughness. Learn the exact frameworks used by successful founders to push through any setback and never give up on their dreams.",
      price: "$49",
      originalPrice: "$97",
      rating: 5.0,
      students: "3,800+",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
      features: [
        "Mental toughness assessment",
        "Daily resilience practices",
        "Setback recovery protocols",
        "Mindset tracking journal",
        "Audio affirmations",
        "Success story interviews"
      ],
      testimonial: {
        text: "I was ready to quit after 6 months of failures. This blueprint saved my business and my sanity.",
        author: "Jennifer Walsh, Consultant"
      }
    }
  ];

  return (
    <>
      <Helmet>
        <title>Digital Products - E-books, Courses & Guides | DrivenMind.io</title>
        <meta name="description" content="Transform your entrepreneurial journey with our proven digital products. E-books, online courses, and mindset guides designed to help you survive and thrive in your first 5 years." />
        <meta name="keywords" content="entrepreneur ebooks, business courses, mindset guides, startup survival, digital products" />
        <link rel="canonical" href="https://drivenmind.io/products" />
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
              Proven Products That Transform Lives
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Each product is battle-tested with real entrepreneurs and designed to give you 
              the exact tools and mindset shifts you need to survive and thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Product Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-80 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute top-6 left-6 bg-primary-600 text-white px-4 py-2 rounded-lg font-medium">
                      {product.type}
                    </div>
                    <div className="absolute bottom-6 right-6 bg-white text-dark-900 px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
                      {product.price}
                    </div>
                  </div>
                </div>

                {/* Product Details */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="flex items-center space-x-2 mb-4">
                    <SafeIcon icon={product.icon} className="w-6 h-6 text-primary-600" />
                    <span className="text-primary-600 font-medium">{product.type}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-dark-900 mb-2">
                    {product.title}
                  </h2>
                  
                  <p className="text-lg text-primary-600 font-medium mb-4">
                    {product.subtitle}
                  </p>

                  <p className="text-dark-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating and Social Proof */}
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <SafeIcon 
                            key={i} 
                            icon={FiStar} 
                            className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <span className="font-medium text-dark-700">({product.rating})</span>
                    </div>
                    <span className="text-dark-600">{product.students} students</span>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark-900 mb-3">What's Included:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500" />
                          <span className="text-dark-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-white p-6 rounded-lg border-l-4 border-primary-600 mb-6">
                    <p className="text-dark-700 italic mb-2">"{product.testimonial.text}"</p>
                    <p className="text-sm text-dark-600 font-medium">— {product.testimonial.author}</p>
                  </div>

                  {/* Pricing and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-3xl font-bold text-dark-900">{product.price}</span>
                        <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                      </div>
                      <p className="text-sm text-green-600 font-medium">Limited Time Offer</p>
                    </div>
                    <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 transform hover:scale-105 flex items-center space-x-2">
                      <SafeIcon icon={FiDownload} className="w-5 h-5" />
                      <span>Get Access Now</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Money Back Guarantee */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">30-Day Money-Back Guarantee</h3>
          <p className="text-lg opacity-90">
            We're so confident in our products that if you don't see results in 30 days, 
            we'll refund every penny. No questions asked.
          </p>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;