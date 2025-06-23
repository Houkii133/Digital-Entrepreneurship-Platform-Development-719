import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SafeIcon from '../components/common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUsers, FiArrowLeft, FiDownload, FiBookmark, FiStar, FiCheck } = FiIcons;

const ArticlePage = () => {
  const { slug } = useParams();

  // In a real app, you'd fetch this data based on the slug
  const article = {
    title: "How to Write a Simple Business Plan",
    subtitle: "A step-by-step guide to creating a business plan that actually works, without the fluff and complexity",
    category: "Getting Started",
    readTime: "12 min read",
    difficulty: "Beginner",
    readers: "5,200+",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
    lastUpdated: "December 10, 2024",
    content: `
      <p>Most business plans are overcomplicated disasters that nobody reads. They're filled with jargon, unrealistic projections, and theories that don't work in the real world.</p>

      <p>Here's the truth: You don't need a 50-page business plan to start a successful business. You need a simple, actionable plan that you can actually execute.</p>

      <h2>Why Most Business Plans Fail</h2>

      <p>Traditional business plans fail because:</p>

      <ul>
        <li>They take too long to write</li>
        <li>They're filled with assumptions instead of facts</li>
        <li>They focus on impressing investors instead of guiding action</li>
        <li>They become outdated the moment you start your business</li>
      </ul>

      <p>Instead of writing a novel, you need a living document that evolves with your business.</p>

      <h2>The Simple Business Plan Framework</h2>

      <p>Here's the framework I use with my clients to create business plans that actually work:</p>

      <h3>1. The One-Sentence Summary</h3>

      <p>Start with one sentence that describes what your business does and for whom:</p>

      <blockquote>
        <p>"We help [target customer] achieve [desired outcome] through [your solution]."</p>
      </blockquote>

      <p>Example: "We help busy entrepreneurs save time on social media through automated content creation tools."</p>

      <h3>2. Problem & Solution</h3>

      <p><strong>Problem:</strong> What specific problem are you solving? Be concrete and specific.</p>
      
      <p><strong>Solution:</strong> How does your product or service solve this problem? Focus on benefits, not features.</p>

      <h3>3. Target Market</h3>

      <p>Who exactly is your customer? Don't say "everyone." Be specific:</p>

      <ul>
        <li>Demographics (age, income, location)</li>
        <li>Psychographics (values, interests, behaviors)</li>
        <li>Pain points and challenges</li>
        <li>Where they spend their time online and offline</li>
      </ul>

      <h3>4. Revenue Model</h3>

      <p>How will you make money? Keep it simple:</p>

      <ul>
        <li>What are you selling?</li>
        <li>How much will you charge?</li>
        <li>How often will customers buy?</li>
        <li>What are your main revenue streams?</li>
      </ul>

      <h3>5. Marketing Strategy</h3>

      <p>How will you reach your customers?</p>

      <ul>
        <li>Where does your target market hang out?</li>
        <li>What channels will you use to reach them?</li>
        <li>What's your unique selling proposition?</li>
        <li>How will you differentiate from competitors?</li>
      </ul>

      <h3>6. Financial Projections</h3>

      <p>Keep your financial projections realistic and simple:</p>

      <ul>
        <li>Startup costs</li>
        <li>Monthly operating expenses</li>
        <li>Revenue projections for 12 months</li>
        <li>Break-even point</li>
      </ul>

      <h3>7. Next Steps</h3>

      <p>What are the first 3-5 actions you need to take to get started?</p>

      <h2>The One-Page Business Plan Template</h2>

      <p>Here's a simple template you can use:</p>

      <div class="bg-gray-50 p-6 rounded-lg my-6">
        <h4 class="font-bold mb-4">Business Name: ________________</h4>
        
        <h4 class="font-bold mb-2">One-Sentence Summary:</h4>
        <p class="mb-4">We help _______ achieve _______ through _______.</p>
        
        <h4 class="font-bold mb-2">Problem:</h4>
        <p class="mb-4">_________________________________</p>
        
        <h4 class="font-bold mb-2">Solution:</h4>
        <p class="mb-4">_________________________________</p>
        
        <h4 class="font-bold mb-2">Target Customer:</h4>
        <p class="mb-4">_________________________________</p>
        
        <h4 class="font-bold mb-2">Revenue Model:</h4>
        <p class="mb-4">_________________________________</p>
        
        <h4 class="font-bold mb-2">Marketing Strategy:</h4>
        <p class="mb-4">_________________________________</p>
        
        <h4 class="font-bold mb-2">Key Metrics:</h4>
        <ul class="mb-4">
          <li>Startup Costs: $______</li>
          <li>Monthly Expenses: $______</li>
          <li>Revenue Goal (Month 12): $______</li>
          <li>Break-even: Month ______</li>
        </ul>
        
        <h4 class="font-bold mb-2">Next 5 Actions:</h4>
        <ol class="mb-4">
          <li>_________________________________</li>
          <li>_________________________________</li>
          <li>_________________________________</li>
          <li>_________________________________</li>
          <li>_________________________________</li>
        </ol>
      </div>

      <h2>Common Mistakes to Avoid</h2>

      <h3>1. Over-Complicating Things</h3>
      <p>Your business plan should be a tool for action, not a work of literature. Keep it simple and actionable.</p>

      <h3>2. Unrealistic Financial Projections</h3>
      <p>Don't project hockey stick growth unless you have data to back it up. Be conservative with your estimates.</p>

      <h3>3. Ignoring the Competition</h3>
      <p>Research your competitors and understand how you'll differentiate yourself.</p>

      <h3>4. Writing It Once and Forgetting It</h3>
      <p>Your business plan should evolve as you learn more about your market and customers.</p>

      <h2>When You Actually Need a Detailed Business Plan</h2>

      <p>You only need a comprehensive business plan if:</p>

      <ul>
        <li>You're seeking investment from VCs or banks</li>
        <li>You're applying for business loans</li>
        <li>You're launching a complex business with multiple revenue streams</li>
        <li>You have partners who need to be aligned on strategy</li>
      </ul>

      <p>For most entrepreneurs, especially those starting their first business, a simple one-page plan is more than enough to get started.</p>

      <h2>Your Next Step</h2>

      <p>Stop overthinking and start writing. Set a timer for 30 minutes and fill out the one-page template above. Don't worry about making it perfect – you can always refine it later.</p>

      <p>The best business plan is the one that gets you to take action.</p>

      <p>Remember: You're not writing this to impress anyone. You're writing it to guide your own actions and decisions. Keep it simple, keep it actionable, and keep it updated.</p>
    `,
    downloadableTemplate: {
      title: "One-Page Business Plan Template",
      description: "Get the exact template used in this article as a downloadable PDF",
      fileSize: "245 KB"
    }
  };

  const relatedArticles = [
    {
      title: "Should You Go All In or Side Hustle First?",
      slug: "all-in-vs-side-hustle-first",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
    },
    {
      title: "The First 5 Legal and Financial Steps",
      slug: "first-5-legal-financial-steps",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop"
    },
    {
      title: "From Broke to Break-Even",
      slug: "from-broke-to-break-even",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=200&fit=crop"
    }
  ];

  return (
    <>
      <Helmet>
        <title>{article.title} | DrivenMind.io Knowledge Hub</title>
        <meta name="description" content={article.subtitle} />
        <meta name="keywords" content="business plan, startup planning, entrepreneur guide, business planning template" />
        <link rel="canonical" href={`https://drivenmind.io/knowledge-hub/${slug}`} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": article.title,
            "description": article.subtitle,
            "image": article.image,
            "author": {
              "@type": "Organization",
              "name": "DrivenMind.io"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DrivenMind.io",
              "logo": {
                "@type": "ImageObject",
                "url": "https://drivenmind.io/logo.png"
              }
            },
            "datePublished": "2024-12-10",
            "dateModified": "2024-12-10"
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
              to="/knowledge-hub"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-200 mb-8"
            >
              <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
              <span>Back to Knowledge Hub</span>
            </Link>

            {/* Category & Difficulty */}
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {article.difficulty}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl font-bold text-dark-900 mb-4 leading-tight">
              {article.title}
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-dark-600 mb-8 leading-relaxed">
              {article.subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center space-x-6 mb-4 sm:mb-0">
                <div className="flex items-center space-x-1 text-dark-600">
                  <SafeIcon icon={FiClock} className="w-4 h-4" />
                  <span className="text-sm">{article.readTime}</span>
                </div>
                <div className="flex items-center space-x-1 text-dark-600">
                  <SafeIcon icon={FiUsers} className="w-4 h-4" />
                  <span className="text-sm">{article.readers} readers</span>
                </div>
                <div className="flex items-center space-x-1 text-dark-600">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm">{article.rating} rating</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-500 hover:text-primary-600 transition-colors duration-200">
                  <SafeIcon icon={FiBookmark} className="w-4 h-4" />
                </button>
                <span className="text-sm text-gray-500">Updated {article.lastUpdated}</span>
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
              src={article.image}
              alt={article.title}
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Downloadable Template CTA */}
      {article.downloadableTemplate && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-primary-50 border border-primary-200 rounded-xl p-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark-900 mb-2">
                  {article.downloadableTemplate.title}
                </h3>
                <p className="text-dark-600 mb-2">
                  {article.downloadableTemplate.description}
                </p>
                <span className="text-sm text-gray-500">
                  PDF • {article.downloadableTemplate.fileSize}
                </span>
              </div>
              <button className="bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors duration-200 flex items-center space-x-2 ml-6">
                <SafeIcon icon={FiDownload} className="w-4 h-4" />
                <span>Download Free</span>
              </button>
            </div>
          </motion.div>
        </section>
      )}

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>

      {/* Action CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Empire?</h3>
          <p className="text-lg mb-6 opacity-90">
            Get our complete collection of business templates, guides, and courses 
            to accelerate your entrepreneurial journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              View All Products
            </Link>
            <Link
              to="/knowledge-hub"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200"
            >
              Explore More Articles
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Related Articles */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-dark-900 mb-8 text-center">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
              <Link
                key={index}
                to={`/knowledge-hub/${relatedArticle.slug}`}
                className="group"
              >
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <h4 className="font-semibold text-dark-900 group-hover:text-primary-600 transition-colors duration-200">
                      {relatedArticle.title}
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

export default ArticlePage;