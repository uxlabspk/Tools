'use client'

import React from 'react';
import {
    MessageCircle,
    PenTool,
    Image,
    Search,
    Newspaper,
    BarChart3,
    Code,
} from 'lucide-react';

const ChatWithAI = () => {
    const quickActions = [
        {
            icon: PenTool,
            title: 'Write Copy',
            subtitle: 'Craft compelling text for ads and emails',
        },
        {
            icon: Image,
            title: 'Image Generation',
            subtitle: 'Create and edit visuals with AI',
        },
        {
            icon: Search,
            title: 'Research',
            subtitle: 'Quickly gather and summarize info',
        },
        {
            icon: Newspaper,
            title: 'Generate Article',
            subtitle: 'Write long-form content instantly',
        },
        {
            icon: BarChart3,
            title: 'Data Analytics',
            subtitle: 'Analyze data and generate insights',
        },
        {
            icon: Code,
            title: 'Generate Code',
            subtitle: 'Write code in any language',
        }
    ];

    return (
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
    );
};

export default ChatWithAI;