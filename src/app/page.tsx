'use client'

import React, { useState } from 'react';
import {
    MessageCircle,
    Folder,
    FileText,
    Share2,
    History,
    ThumbsUp,
    Settings,
    PenTool,
    Image,
    Search,
    Newspaper,
    BarChart3,
    Code,
    Paperclip,
    Smile,
    Send,
    ArrowUp,
    Download,
    ExternalLink,
    Copy
} from 'lucide-react';

const ChatInterface = () => {
    const [message, setMessage] = useState('');

    const sidebarItems = [
        { icon: MessageCircle, label: 'Chat With AI', active: true },
        { icon: Folder, label: 'Folders' },
        { icon: FileText, label: 'Documents' },
        { icon: Share2, label: 'Shared With Me' },
        { icon: History, label: 'History' },
    ];

    const quickActions = [
        {
            icon: PenTool,
            title: 'Write Copy',
            subtitle: 'Craft compelling text for ads and emails',
            bgColor: 'bg-gray-100',
            iconColor: 'text-gray-700'
        },
        {
            icon: Image,
            title: 'Image Generation',
            subtitle: 'Create and edit visuals with AI',
            bgColor: 'bg-gray-100',
            iconColor: 'text-gray-700'
        },
        {
            icon: Search,
            title: 'Research',
            subtitle: 'Quickly gather and summarize info',
            bgColor: 'bg-gray-100',
            iconColor: 'text-gray-700'
        },
        {
            icon: Newspaper,
            title: 'Generate Article',
            subtitle: 'Write long-form content instantly',
            bgColor: 'bg-gray-100',
            iconColor: 'text-gray-700'
        },
        {
            icon: BarChart3,
            title: 'Data Analytics',
            subtitle: 'Analyze data and generate insights',
            bgColor: 'bg-gray-100',
            iconColor: 'text-gray-700'
        },
        {
            icon: Code,
            title: 'Generate Code',
            subtitle: 'Write code in any language',
            bgColor: 'bg-gray-100',
            iconColor: 'text-gray-700'
        }
    ];

    const bottomSidebarItems = [
        { icon: ThumbsUp, label: 'Feedback' },
        { icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                {/* Top section */}
                <div className="p-4 border-b border-gray-200 flex items-center gap-2">
                    <MessageCircle />
                    <div className="text-lg font-semibold text-gray-900 py-1">Chat With AI</div>
                </div>

                {/* Navigation items */}
                <div className="flex-1 p-3">
                    <nav className="space-y-1">
                        {sidebarItems.map((item, index) => (
                            <div
                                key={index}
                                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                                    item.active
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                }`}
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </nav>
                </div>

                {/* Bottom section */}
                <div className="p-3 border-t border-gray-200">
                    <nav className="space-y-1">
                        {bottomSidebarItems.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors"
                            >
                                <item.icon className="w-5 h-5" />
                                <span>{item.label}</span>
                            </div>
                        ))}
                    </nav>

                    {/* User profile */}
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-medium">MN</span>
                            </div>
                            <div>
                                <div className="text-sm font-medium text-gray-900">Muhammad Naveed</div>
                                <div className="text-xs text-gray-500">Pro</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col">
                {/* Header */}
                <div className="bg-white border-b border-gray-200 px-6 py-4">
                    <div className="flex items-center justify-between">
                        <h1 className=""></h1>
                        <div className="flex items-center space-x-3">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center">
                                <ArrowUp className="w-4 h-4 mr-2" />
                                Upgrade
                            </button>
                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                <Download className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                <ExternalLink className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                                <Copy className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Chat content */}
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    {/* Welcome section */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                            <MessageCircle className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Welcome, Naveed</h2>
                        <p className="text-gray-600">
                            Start by selecting a task, and let the chat take over.
                            <br />
                            Not sure where to start?
                        </p>
                    </div>

                    {/* Quick action cards */}
                    <div className="grid grid-cols-3 gap-4 mb-8 max-w-4xl w-full">
                        {quickActions.map((action, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl p-6 cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-gray-300"
                            >
                                <div className="flex flex-col items-center text-center space-y-3">
                                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                                        <action.icon className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-gray-900 mb-1">{action.title}</h3>
                                        <p className="text-sm text-gray-600">{action.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Message input */}
                <div className="border-t border-gray-200 p-4 bg-white">
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Write your message..."
                                className="w-full pr-20 pl-4 py-3 text-base rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            />
                            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                                <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
                                    <Paperclip className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors">
                                    <Smile className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors">
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;