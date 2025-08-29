'use client'

import { useState } from 'react';
import React from 'react';
import { Brain, BookOpen, Search, Lightbulb, Users, Zap, ArrowRight, CheckCircle, Star, Menu, X, Mail, Phone, MapPin, Twitter, Github, Linkedin } from 'lucide-react';
import DemoComponent from '../components/demo/demo';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: <Search />,
      title: "Literature Review Assistant",
      description: "Quickly analyze and summarize research papers, identifying key findings and gaps in existing literature."
    },
    {
      icon: <Lightbulb />,
      title: "Idea Generation",
      description: "Spark creativity with AI-powered suggestions for research topics and innovative approaches."
    },
    {
      icon: <BookOpen />,
      title: "Writing Enhancement",
      description: "Improve clarity, coherence, and academic tone while maintaining your unique voice."
    },
    {
      icon: <Zap />,
      title: "Citation Management",
      description: "Automatically generate and format citations in multiple academic styles."
    },
    {
      icon: <Users />,
      title: "Collaboration Tools",
      description: "Share and co-edit research with peers, track changes, and manage feedback."
    },
    {
      icon: <Brain />,
      title: "Data Analysis",
      description: "Interpret complex datasets and generate insights with intuitive visualizations."
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "PhD Researcher, MIT",
      content: "This tool has revolutionized my research process. I save hours every week on literature reviews.",
      avatar: "https://placehold.co/60x60/6366f1/ffffff?text=SC",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Graduate Student, Stanford",
      content: "The writing assistance helped me improve my thesis clarity significantly. Highly recommended!",
      avatar: "https://placehold.co/60x60/8b5cf6/ffffff?text=MR",
      rating: 5
    },
    {
      name: "Prof. James Wilson",
      role: "Research Director, Cambridge",
      content: "Our entire research team uses this platform. It's become indispensable for collaborative projects.",
      avatar: "https://placehold.co/60x60/06b6d4/ffffff?text=JW",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Student",
      price: "$9",
      period: "/month",
      features: ["500 pages/month", "Basic writing tools", "1 active project", "Email support"],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "Researcher",
      price: "$29",
      period: "/month",
      features: ["Unlimited pages", "Advanced analysis", "10 active projects", "Priority support", "Collaboration tools"],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Institution",
      price: "Custom",
      period: "",
      features: ["Unlimited everything", "Team management", "Custom integrations", "Dedicated support", "Training sessions"],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const stats = [
    { value: "10K+", label: "Active Researchers" },
    { value: "1M+", label: "Papers Analyzed" },
    { value: "95%", label: "Time Saved" },
    { value: "24/7", label: "Support" }
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Thank you! We'll contact you at ${email}`);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AcademiaAI</span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
                <a href="#pricing" className="text-gray-600 hover:text-blue-600 transition-colors">Pricing</a>
                <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
                <a href="#demo" className="text-gray-600 hover:text-blue-600 transition-colors">Demo</a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-600 hover:text-blue-600 transition-colors">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-gray-900"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Features</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Testimonials</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Pricing</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</a>
              <a href="#demo" className="block px-3 py-2 text-gray-600 hover:text-blue-600">Demo</a>
              <div className="pt-4 pb-2 border-t border-gray-200">
                <button className="block w-full text-left px-3 py-2 text-gray-600 hover:text-blue-600">Sign In</button>
                <button className="block w-full mt-2 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main>
        <section className="relative pt-20 pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-br from-blue-100/50 via-white to-white rounded-full blur-3xl opacity-50"></div>
          </div>
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <p className="inline-block bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm mb-4">
                Now in Public Beta
              </p>
              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              AI-Powered Research
                <span className="block text-blue-600">For Academic Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Accelerate your academic journey with intelligent tools designed for students and researchers. 
                From literature reviews to data analysis, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-white text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/20 border border-gray-200">
                  Watch Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-25"></div>
              <img 
                src="https://placehold.co/1200x900/e0e7ff/4f46e5?text=Product+Screenshot" 
                alt="AcademiaAI Product Screenshot"
                className="relative w-full rounded-2xl shadow-2xl border border-gray-200/50"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
                  <div className="mt-1 text-lg text-gray-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Academic Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI tools are specifically designed to address the unique challenges faced by students and researchers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500 transition-all duration-300"></div>
                <div className="relative">
                  <div className="inline-block bg-blue-100 text-blue-600 p-3 rounded-lg mb-4">
                    {React.cloneElement(feature.icon, { className: "w-8 h-8" })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Academics Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of researchers who have transformed their workflow with our AI tools.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-blue-200"
                  />
                  <div>
                    <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                    <div className="text-blue-600 font-semibold">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-700 text-lg mb-6 relative">
                  <span className="absolute -top-2 -left-4 text-6xl text-blue-100 font-serif opacity-75">“</span>
                  {testimonial.content}
                </p>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your academic needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`relative bg-white p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:scale-105 ${
                  plan.popular 
                    ? 'border-blue-500 ring-4 ring-blue-500/20' 
                    : 'border-gray-200 '
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30 transform hover:scale-105'
                    : 'bg-white text-blue-600 hover:bg-gray-100 border-2 border-gray-300 transform hover:scale-105'
                }`}>
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of academics who are already using AcademiaAI to accelerate their research.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>

      {/* AI Demo Section */}
      <section id="demo" className="py-20 bg-gray-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Try AcademiaAI Now
            </h2>
            <p className="text-xl text-gray-600">
              Experience the power of our AI assistant. Choose a task and provide some text to get started.
            </p>
          </div>

          <DemoComponent />
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 lg:col-span-1">
              <div className="flex items-center mb-4">
                <Brain className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-xl font-bold text-white">AcademiaAI</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Empowering students and researchers with AI-driven tools to accelerate academic excellence and discovery.
              </p>
              <div className="flex space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-white"><Twitter /></a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-gray-400 hover:text-white"><Github /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white"><Linkedin /></a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/api-docs" className="hover:text-white transition-colors">API</a></li>
                <li><a href="/docs" className="hover:text-white transition-colors">Documentation</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0" />
                  <span>123 Research Parkway, Cambridge, MA 02139</span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-3" />
                  <span>(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-3" />
                  <span>support@academiaai.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; 2024 AcademiaAI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              <a href="/terms" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;