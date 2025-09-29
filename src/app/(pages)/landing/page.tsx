'use client'


// pages/index.js
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
    MessageCircle,
    Folder,
    FileText,
    Share2,
    History as HistoryIcon,
    ThumbsUp,
    Settings,
    ArrowUp,
    Download,
    ExternalLink,
    Copy,
    Heart,
    Users,
    Zap,
    Shield,
    Star,
    Check,
    ArrowRight,
    Menu,
    X
} from 'lucide-react';

export default function LandingPage() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const features = [
        {
            icon: <MessageCircle className="w-8 h-8" />,
            title: "AI Chat Assistant",
            description: "Get instant answers and intelligent responses with our advanced AI chat system."
        },
        {
            icon: <Folder className="w-8 h-8" />,
            title: "Smart Organization",
            description: "Organize your documents and conversations in intuitive folders."
        },
        {
            icon: <FileText className="w-8 h-8" />,
            title: "Document Management",
            description: "Upload, store, and manage all your important documents in one place."
        },
        {
            icon: <Share2 className="w-8 h-8" />,
            title: "Collaboration",
            description: "Share documents and collaborate with team members seamlessly."
        },
        {
            icon: <HistoryIcon className="w-8 h-8" />,
            title: "Conversation History",
            description: "Keep track of all your AI interactions with detailed history."
        },
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Secure & Private",
            description: "Enterprise-grade security to protect your data and conversations."
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            content: "Jannah AI has transformed how our team manages documents and communicates with AI. The organization features are incredible!",
            avatar: "SJ"
        },
        {
            name: "Michael Chen",
            role: "Software Engineer",
            content: "The chat interface is smooth and the document management system is exactly what we needed for our workflow.",
            avatar: "MC"
        },
        {
            name: "Emma Rodriguez",
            role: "Marketing Director",
            content: "I love how easy it is to share documents and collaborate. The AI responses are spot-on every time.",
            avatar: "ER"
        }
    ];

    const pricingPlans = [
        {
            name: "Starter",
            price: "$9",
            period: "/month",
            features: [
                "500 AI messages/month",
                "3 folders",
                "Basic document storage",
                "1GB storage",
                "Email support"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Pro",
            price: "$29",
            period: "/month",
            features: [
                "Unlimited AI messages",
                "Unlimited folders",
                "Advanced document storage",
                "50GB storage",
                "Priority support",
                "Collaboration tools",
                "Custom branding"
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            features: [
                "Unlimited everything",
                "Custom integrations",
                "Dedicated support",
                "Advanced security",
                "Team management",
                "API access"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];

    return (
        <>
            <Head>
                <title>Jannah AI - AI-Powered Chat & Document Management</title>
                <meta name="description" content="Revolutionary AI chat platform with smart document management, organization, and collaboration tools." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navigation */}
            <nav className="bg-white shadow-sm border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Heart className="w-8 h-8 text-orange-500 mr-2" />
                            <span className="text-xl font-bold text-gray-900">Jannah AI</span>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                            <a href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">Testimonials</a>
                            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">Dashboard</Link>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors">
                                Get Started
                            </button>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden py-4 border-t border-gray-200">
                            <div className="flex flex-col space-y-4">
                                <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
                                <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
                                <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
                                <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">Dashboard</Link>
                                <button className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </nav>

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-orange-50 to-white py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            AI-Powered Chat & Document
                            <span className="text-orange-500"> Management</span>
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                            Revolutionize your workflow with intelligent AI conversations, smart document organization,
                            and seamless collaboration tools.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                                Start Free Trial
                            </button>
                            <button className="border-2 border-gray-300 hover:border-orange-500 text-gray-700 hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="mt-16 relative">
                        <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center space-x-2">
                                    <Heart className="w-6 h-6 text-orange-500" />
                                    <span className="font-semibold">Jannah AI</span>
                                </div>
                                <div className="flex space-x-2">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-4">
                                <div className="col-span-1 space-y-2">
                                    {['Chat With AI', 'Folders', 'Documents', 'Shared With Me', 'History'].map((item, index) => (
                                        <div key={item} className="p-3 bg-gray-100 rounded-lg text-sm">
                                            <div className="flex items-center space-x-2">
                                                {index === 0 && <MessageCircle className="w-4 h-4" />}
                                                {index === 1 && <Folder className="w-4 h-4" />}
                                                {index === 2 && <FileText className="w-4 h-4" />}
                                                {index === 3 && <Share2 className="w-4 h-4" />}
                                                {index === 4 && <HistoryIcon className="w-4 h-4" />}
                                                <span>{item}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="col-span-3 bg-gray-50 rounded-lg p-4">
                                    <div className="text-center text-gray-500">
                                        <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                                        <p>AI Chat Interface Preview</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Powerful Features for Modern Teams
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Everything you need to streamline your workflow and boost productivity
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                                <div className="text-orange-500 mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">10K+</div>
                            <div className="text-gray-600">Active Users</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">50M+</div>
                            <div className="text-gray-600">Messages Processed</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">99.9%</div>
                            <div className="text-gray-600">Uptime</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">24/7</div>
                            <div className="text-gray-600">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Loved by Thousands of Users
                        </h2>
                        <p className="text-xl text-gray-600">
                            See what our customers have to say about Jannah AI
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-xl text-gray-600">
                            Choose the plan that works best for you and your team
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {pricingPlans.map((plan, index) => (
                            <div key={index} className={`bg-white border-2 rounded-xl p-8 ${plan.popular ? 'border-orange-500 relative' : 'border-gray-200'}`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                                            Most Popular
                                        </span>
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                    <div className="text-4xl font-bold text-gray-900 mb-2">
                                        {plan.price}
                                        <span className="text-lg text-gray-600">{plan.period}</span>
                                    </div>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Check className="w-5 h-5 text-green-500 mr-3" />
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                                    plan.popular
                                        ? 'bg-orange-500 hover:bg-orange-600 text-white'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                                }`}>
                                    {plan.cta}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Workflow?
                    </h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Join thousands of users who are already boosting their productivity with Jannah AI
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-orange-500 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                            Start Free Trial
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-orange-500 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                            Schedule Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <Heart className="w-8 h-8 text-orange-500 mr-2" />
                                <span className="text-xl font-bold">Jannah AI</span>
                            </div>
                            <p className="text-gray-400">
                                AI-powered chat and document management for modern teams.
                            </p>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Product</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">Support</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Jannah AI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
