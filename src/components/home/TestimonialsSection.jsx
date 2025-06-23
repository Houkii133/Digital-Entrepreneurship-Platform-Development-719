import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiQuote } = FiIcons;

const TestimonialsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Tech Startup Founder",
      company: "DataFlow AI",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5bb?w=100&h=100&fit=crop&crop=face",
      content: "DrivenMind literally saved my business. I was ready to quit after 18 months of struggle, but the mental frameworks here helped me push through. Now we're at $2M ARR.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      role: "E-commerce Entrepreneur",
      company: "Peak Performance Gear",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The 'No-Quit Blueprint' is pure gold. It's not just motivation - it's a systematic approach to building mental toughness. My revenue jumped 400% in 8 months.",
      rating: 5
    },
    {
      name: "Jennifer Walsh",
      role: "Service Business Owner",
      company: "Walsh Consulting",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "I've bought countless business courses, but nothing compares to this. The focus on survival and mental strength is what sets it apart. Finally hit my first $100K year.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Real Results from Real Entrepreneurs
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't take our word for it. Here's what driven entrepreneurs are saying about 
            their transformation with DrivenMind.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-dark-800 p-8 rounded-xl border border-dark-700"
            >
              {/* Quote Icon */}
              <SafeIcon icon={FiQuote} className="w-8 h-8 text-primary-400 mb-4" />

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                  <div className="text-sm text-primary-400">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 pt-16 border-t border-dark-700"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">95%</div>
            <div className="text-gray-300">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">$2.5M</div>
            <div className="text-gray-300">Average Revenue Growth</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-400 mb-2">10K+</div>
            <div className="text-gray-300">Entrepreneurs Transformed</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;