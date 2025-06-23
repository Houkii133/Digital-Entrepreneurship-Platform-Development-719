import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBookOpen, FiPlay, FiFileText, FiArrowRight, FiStar } = FiIcons;

const ProductsPreview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const products = [
    {
      type: "E-book",
      icon: FiBookOpen,
      title: "Start Before You're Ready",
      description: "The definitive guide to overcoming perfectionism and taking action when everything feels uncertain.",
      price: "$29",
      rating: 4.9,
      students: "2,500+",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face"
    },
    {
      type: "Course",
      icon: FiPlay,
      title: "Zero to 100K: Your First 5 Years",
      description: "Complete video course covering everything from idea validation to scaling your first six-figure business.",
      price: "$197",
      rating: 4.8,
      students: "1,200+",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
    },
    {
      type: "Guide",
      icon: FiFileText,
      title: "The No-Quit Blueprint",
      description: "Mental frameworks and daily practices to build unstoppable resilience and push through any setback.",
      price: "$49",
      rating: 5.0,
      students: "3,800+",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
            Proven Products That Transform Lives
          </h2>
          <p className="text-xl text-dark-600 max-w-3xl mx-auto mb-8">
            Each product is battle-tested with real entrepreneurs and designed to give you 
            the exact tools and mindset shifts you need to succeed.
          </p>
          <Link
            to="/products"
            className="inline-flex items-center space-x-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
          >
            <span>View All Products</span>
            <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Product Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {product.type}
                </div>
              </div>

              {/* Product Content */}
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <SafeIcon icon={product.icon} className="w-5 h-5 text-primary-600" />
                  <span className="text-sm font-medium text-primary-600">{product.type}</span>
                </div>

                <h3 className="text-xl font-bold text-dark-900 mb-3">
                  {product.title}
                </h3>

                <p className="text-dark-600 mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Rating and Students */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <SafeIcon 
                          key={i} 
                          icon={FiStar} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-dark-600">({product.rating})</span>
                  </div>
                  <span className="text-sm text-dark-500">{product.students} students</span>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-dark-900">{product.price}</span>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200">
                    Get Access
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPreview;