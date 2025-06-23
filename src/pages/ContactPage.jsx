import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMail, FiMessageSquare, FiPhone, FiMapPin, FiSend, FiCheck, FiArrowRight } = FiIcons;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd send this data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: "Email Us",
      details: "hello@drivenmind.io",
      description: "Get in touch for general inquiries"
    },
    {
      icon: FiMessageSquare,
      title: "Live Chat",
      details: "Available 9 AM - 6 PM EST",
      description: "Chat with our support team"
    },
    {
      icon: FiPhone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Speak directly with our team"
    },
    {
      icon: FiMapPin,
      title: "Office",
      details: "San Francisco, CA",
      description: "Our headquarters location"
    }
  ];

  const faqs = [
    {
      question: "How quickly will I see results?",
      answer: "Most of our students start seeing mindset shifts within the first week and business results within 30-90 days, depending on their commitment level and implementation."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 30-day money-back guarantee on all our products. If you're not satisfied, we'll refund every penny, no questions asked."
    },
    {
      question: "Is this suitable for complete beginners?",
      answer: "Absolutely! Our products are designed for entrepreneurs at all stages, from complete beginners to those looking to scale their existing businesses."
    },
    {
      question: "Do you offer one-on-one coaching?",
      answer: "We offer limited one-on-one coaching spots each quarter. Contact us directly to learn about availability and pricing for personalized coaching."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | DrivenMind.io</title>
        <meta name="description" content="Get in touch with DrivenMind.io. Contact us for support, partnerships, or questions about our digital products and entrepreneurship training." />
        <meta name="keywords" content="contact drivenmind, customer support, business inquiries, entrepreneur coaching" />
        <link rel="canonical" href="https://drivenmind.io/contact" />
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
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Have questions about our products? Need support? Want to share your success story? 
              We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={info.icon} className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-primary-600 font-medium mb-1">
                  {info.details}
                </p>
                <p className="text-sm text-dark-600">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-dark-900 mb-6">
                  Send us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <SafeIcon icon={FiCheck} className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-dark-600">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark-700 mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Product Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="coaching">Coaching Inquiry</option>
                        <option value="media">Media/Press</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
                    >
                      <SafeIcon icon={FiSend} className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-dark-900 mb-8">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-dark-900 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-dark-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Additional Support */}
              <div className="mt-8 p-6 bg-primary-50 rounded-xl border border-primary-200">
                <h3 className="text-lg font-semibold text-dark-900 mb-3">
                  Need Immediate Help?
                </h3>
                <p className="text-dark-600 mb-4">
                  Check out our comprehensive knowledge hub with answers to common questions 
                  and step-by-step guides.
                </p>
                <a
                  href="/knowledge-hub"
                  className="inline-flex items-center space-x-2 text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                >
                  <span>Visit Knowledge Hub</span>
                  <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4">We Value Your Time</h3>
            <p className="text-lg opacity-90">
              We typically respond to all inquiries within 24 hours during business days. 
              For urgent matters, please call us directly.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;