import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTwitter, FiLinkedin, FiInstagram, FiMail, FiArrowRight } = FiIcons;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Join 10,000+ Driven Entrepreneurs
            </h3>
            <p className="text-dark-300 mb-6">
              Get weekly insights, exclusive content, and proven strategies delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-dark-800 border border-dark-700 text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <span>Subscribe</span>
                <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img 
                src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1750785079361-blob" 
                alt="DrivenMind Logo" 
                className="w-12 h-12 object-contain" 
              />
            </Link>
            <p className="text-dark-300 mb-6">
              Master Yourself. Build Your Empire.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                <SafeIcon icon={FiTwitter} className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
              </a>
              <a href="#" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                <SafeIcon icon={FiInstagram} className="w-5 h-5" />
              </a>
              <a href="mailto:hello@drivenmind.io" className="text-dark-400 hover:text-primary-400 transition-colors duration-200">
                <SafeIcon icon={FiMail} className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">E-books</Link></li>
              <li><Link to="/products" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Online Courses</Link></li>
              <li><Link to="/products" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Mindset Guides</Link></li>
              <li><Link to="/products" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Templates</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Blog</Link></li>
              <li><Link to="/knowledge-hub" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Knowledge Hub</Link></li>
              <li><Link to="/about" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Success Stories</Link></li>
              <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Free Tools</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">About</Link></li>
              <li><Link to="/contact" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Contact</Link></li>
              <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Privacy Policy</a></li>
              <li><a href="#" className="text-dark-300 hover:text-primary-400 transition-colors duration-200">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-800 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-dark-400 text-sm">
            © {currentYear} DrivenMind.io. All rights reserved.
          </p>
          <p className="text-dark-400 text-sm mt-2 sm:mt-0">
            Built for driven entrepreneurs worldwide.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;