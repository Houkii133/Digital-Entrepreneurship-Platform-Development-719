import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUser, FiArrowLeft, FiShare2, FiBookmark, FiTwitter, FiLinkedin, FiFacebook } = FiIcons;

const BlogPostPage = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch this data based on the slug
  const post = {
    title: "Why 99% Quit and How to Be the 1%",
    subtitle: "The brutal truth about what separates successful entrepreneurs from those who give up",
    author: "Alex Rivera",
    authorBio: "Serial entrepreneur and founder of 3 successful startups. Alex has helped over 5,000 entrepreneurs build mental toughness and achieve their goals.",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    readTime: "8 min read",
    date: "December 15, 2024",
    category: "Mindset & Mental Toughness",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=600&fit=crop",
    content: `
      <p>Here's the harsh reality: 99% of people who start a business will quit within the first five years. Not because their idea was bad. Not because they lacked skills. Not because the market wasn't ready.</p>

      <p>They quit because they weren't mentally prepared for what entrepreneurship actually demands.</p>

      <h2>The Mental Game No One Talks About</h2>

      <p>Everyone talks about business plans, funding, and market research. But no one talks about the psychological warfare that happens inside your head every single day as an entrepreneur.</p>

      <p>The voice that tells you you're not smart enough. The doubt that creeps in at 3 AM when you can't sleep because of stress. The comparison trap when you see competitors succeeding while you're struggling.</p>

      <p>This is where 99% of entrepreneurs lose the battle. Not in the marketplace, but in their own minds.</p>

      <h2>What the 1% Do Differently</h2>

      <p>After studying hundreds of successful entrepreneurs and building multiple seven-figure businesses myself, I've identified the key mental frameworks that separate the 1% from everyone else:</p>

      <h3>1. They Embrace Discomfort as Growth</h3>

      <p>While 99% run from discomfort, the 1% run toward it. They understand that every uncomfortable moment is a muscle-building exercise for their entrepreneurial resilience.</p>

      <p>When faced with rejection, failure, or uncertainty, they ask: "What is this teaching me?" instead of "Why is this happening to me?"</p>

      <h3>2. They Play the Long Game</h3>

      <p>The 99% want results in 90 days. The 1% think in decades. They understand that building something meaningful takes time, and they're willing to delay gratification for long-term success.</p>

      <p>This long-term thinking protects them from the emotional rollercoaster that kills most entrepreneurs. When revenue dips or competitors emerge, they don't panic. They adjust and keep building.</p>

      <h3>3. They Master Their Internal Dialogue</h3>

      <p>The average person has 60,000 thoughts per day, and 80% of them are negative. Successful entrepreneurs have learned to catch these negative thought patterns and redirect them.</p>

      <p>Instead of "I can't do this," they think "I can't do this YET."</p>
      <p>Instead of "This is too hard," they think "This is exactly what I need to grow."</p>
      <p>Instead of "I'm not ready," they think "I'll never be ready, so I might as well start now."</p>

      <h2>The Framework for Mental Toughness</h2>

      <p>Here's the systematic approach I use with my clients to build unshakeable mental resilience:</p>

      <h3>Step 1: Audit Your Mental Diet</h3>

      <p>For one week, track every piece of content you consume. News, social media, podcasts, conversations. Ask yourself: Is this making me stronger or weaker?</p>

      <p>Cut out anything that doesn't serve your growth. Your mind is like your body - feed it junk, and it will perform like junk.</p>

      <h3>Step 2: Build Your Failure Portfolio</h3>

      <p>Start collecting your failures like trophies. Keep a "failure journal" where you write down every setback, what you learned, and how it made you stronger.</p>

      <p>This reframes failure from something to avoid to something to collect. The entrepreneur with the most intelligent failures usually wins.</p>

      <h3>Step 3: Create Your Non-Negotiables</h3>

      <p>Identify 3-5 daily practices that keep you mentally strong, regardless of what's happening in your business. This might include:</p>

      <ul>
        <li>30 minutes of reading</li>
        <li>20 minutes of exercise</li>
        <li>10 minutes of meditation</li>
        <li>Writing in a gratitude journal</li>
        <li>Calling one potential customer</li>
      </ul>

      <p>These non-negotiables become your anchor when everything else feels chaotic.</p>

      <h2>The Choice Is Yours</h2>

      <p>Every entrepreneur faces the same choice: join the 99% who quit when things get hard, or develop the mental toughness to push through and join the 1% who build lasting success.</p>

      <p>The difference isn't talent, luck, or connections. It's the decision to master your mind before you try to master the market.</p>

      <p>Which group will you choose?</p>

      <h2>Your Next Step</h2>

      <p>If you're serious about developing the mental toughness of the 1%, I've created a comprehensive guide that goes deeper into these concepts. <a href="/products" class="text-primary-600 hover:text-primary-700">The No-Quit Blueprint</a> contains the exact frameworks and daily practices I use with my highest-performing clients.</p>

      <p>Because at the end of the day, your business will only grow as much as you do.</p>
    `
  };

  const relatedPosts = [
    {
      title: "Self-Discipline as a Superpower",
      slug: "self-discipline-as-superpower",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop"
    },
    {
      title: "The 80/20 Rule for Founders",
      slug: "80-20-rule-for-founders",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop"
    },
    {
      title: "How to Win the Day Before 9AM",
      slug: "win-the-day-before-9am",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{post.title} | DrivenMind.io Blog</title>
        <meta name="description" content={post.subtitle} />
        <meta name="keywords" content="entrepreneur mindset, mental toughness, business success, startup survival" />
        <meta name="author" content={post.author} />
        <link rel="canonical" href={`https://drivenmind.io/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.subtitle} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content="2024-12-15" />
        <meta property="article:section" content={post.category} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.subtitle,
            "image": post.image,
            "author": {
              "@type": "Person",
              "name": post.author
            },
            "publisher": {
              "@type": "Organization",
              "name": "DrivenMind.io",
              "logo": {
                "@type": "ImageObject",
                "url": "https://drivenmind.io/logo.png"
              }
            },
            "datePublished": "2024-12-15",
            "dateModified": "2024-12-15"
          })}
        </script>
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 mb-8"
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Category */}
            <div className="text-primary-600 font-medium mb-4">{post.category}</div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-dark-900 mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-dark-600 mb-8 leading-relaxed">
              {post.subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                <img
                  src={post.authorImage}
                  alt={post.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-dark-900">{post.author}</div>
                  <div className="text-sm text-dark-600">{post.date}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1 text-dark-600">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span className="text-sm">{post.readTime}</span>
                </div>
                
                {/* Share Buttons */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                    <SafeIcon icon={FiShare2} className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                    <SafeIcon icon={FiBookmark} className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="mb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* Author Bio */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-50 rounded-2xl p-8"
        >
          <div className="flex items-start space-x-6">
            <img
              src={post.authorImage}
              alt={post.author}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-dark-900 mb-2">About {post.author}</h3>
              <p className="text-dark-600 leading-relaxed">
                {post.authorBio}
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Share Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center py-8 border-t border-b border-gray-200"
        >
          <h3 className="text-lg font-semibold text-dark-900 mb-4">Share this article</h3>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              <SafeIcon icon={FiTwitter} className="w-5 h-5" />
            </button>
            <button className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors duration-200">
              <SafeIcon icon={FiLinkedin} className="w-5 h-5" />
            </button>
            <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              <SafeIcon icon={FiFacebook} className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Related Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <Link
                key={index}
                to={`/blog/${relatedPost.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors duration-200">
                      {relatedPost.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default BlogPostPage;