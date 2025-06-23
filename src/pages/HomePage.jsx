import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/home/HeroSection';
import FeaturesSection from '../components/home/FeaturesSection';
import ProductsPreview from '../components/home/ProductsPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import BlogPreview from '../components/home/BlogPreview';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>DrivenMind.io - Master Yourself. Build Your Empire.</title>
        <meta name="description" content="From idea to empire - learn the mental strength and business skills to survive and thrive in your first 5 years. Digital products, courses, and guides for driven entrepreneurs." />
        <meta name="keywords" content="entrepreneur, startup, mindset, business skills, digital products, online courses, e-books" />
        <link rel="canonical" href="https://drivenmind.io/" />
      </Helmet>

      <HeroSection />
      <FeaturesSection />
      <ProductsPreview />
      <TestimonialsSection />
      <BlogPreview />
      <CTASection />
    </>
  );
};

export default HomePage;