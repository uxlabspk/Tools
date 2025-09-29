'use client'

import React, { useState, useRef, useEffect } from 'react';
import {
    MessageCircle,
    PenTool,
    Image,
    Search,
    Newspaper,
    BarChart3,
    Code,
    Paperclip,
    Smile,
    Send,
    Bot,
    User,
} from 'lucide-react';

interface Message {
    role: 'user' | 'assistant';
    content: string;
}

const ChatWithAI = () => {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [showWelcome, setShowWelcome] = useState(true);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const quickActions = [
        {
            icon: PenTool,
            title: 'Write Copy',
            subtitle: 'Craft compelling text for ads and emails',
            prompt: 'Help me write compelling copy for a marketing campaign'
        },
        {
            icon: Image,
            title: 'Image Generation',
            subtitle: 'Create and edit visuals with AI',
            prompt: 'Help me brainstorm ideas for image generation'
        },
        {
            icon: Search,
            title: 'Research',
            subtitle: 'Quickly gather and summarize info',
            prompt: 'Help me research and summarize information about'
        },
        {
            icon: Newspaper,
            title: 'Generate Article',
            subtitle: 'Write long-form content instantly',
            prompt: 'Help me write a comprehensive article about'
        },
        {
            icon: BarChart3,
            title: 'Data Analytics',
            subtitle: 'Analyze data and generate insights',
            prompt: 'Help me analyze data and generate insights'
        },
        {
            icon: Code,
            title: 'Generate Code',
            subtitle: 'Write code in any language',
            prompt: 'Help me write code for'
        }
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async (text: string) => {
        if (!text.trim()) return;

        const userMessage: Message = { role: 'user', content: text };
        setMessages(prev => [...prev, userMessage]);
        setMessage('');
        setShowWelcome(false);
        setIsLoading(true);

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage],
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();
            const aiMessage: Message = { role: 'assistant', content: data.message };
            setMessages(prev => [...prev, aiMessage]); // This is correct
        } catch (error) {
            console.error('Error:', error);
            const errorMessage: Message = {
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
            };
            setMessages(prev => [...prev, errorMessage]); // This is correct
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendMessage(message);
    };

    const handleQuickAction = (prompt: string) => {
        setMessage(prompt);
        sendMessage(prompt);
    };

    return (
        <div className="flex-1 flex flex-col h-screen bg-gray-50">
            {showWelcome && messages.length === 0 ? (
                <div className="flex-1 flex flex-col items-center justify-center p-8">
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

                    <div className="grid grid-cols-3 gap-4 mb-8 max-w-4xl w-full">
                        {quickActions.map((action, index) => (
                            <div
                                key={index}
                                onClick={() => handleQuickAction(action.prompt)}
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
            ) : (
                <div className="flex-1 overflow-y-auto p-6">
                    <div className="max-w-4xl mx-auto space-y-6">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div className={`flex gap-3 max-w-3xl ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                                        msg.role === 'user' ? 'bg-blue-500' : 'bg-green-500'
                                    }`}>
                                        {msg.role === 'user' ? (
                                            <User className="w-5 h-5 text-white" />
                                        ) : (
                                            <Bot className="w-5 h-5 text-white" />
                                        )}
                                    </div>
                                    <div className={`rounded-2xl px-4 py-3 ${
                                        msg.role === 'user' 
                                            ? 'bg-blue-500 text-white' 
                                            : 'bg-white text-gray-900 border border-gray-200'
                                    }`}>
                                        <p className="whitespace-pre-wrap">{msg.content}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                            <div className="flex justify-start">
                                <div className="flex gap-3 max-w-3xl">
                                    <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-green-500">
                                        <Bot className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="rounded-2xl px-4 py-3 bg-white border border-gray-200">
                                        <div className="flex space-x-2">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                </div>
            )}

            <div className="p-6 bg-white border-t border-gray-200">
                <div className="max-w-4xl mx-auto">
                    <form onSubmit={handleSubmit} className="relative">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Write your message..."
                            disabled={isLoading}
                            className="w-full pr-20 pl-4 py-3 text-base rounded-full border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                        />
                        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
                            <button 
                                type="button"
                                className="cursor-pointer p-1.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <Paperclip className="w-4 h-4" />
                            </button>
                            <button 
                                type="button"
                                className="cursor-pointer p-1.5 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
                            >
                                <Smile className="w-4 h-4" />
                            </button>
                            <button 
                                type="submit"
                                disabled={isLoading || !message.trim()}
                                className="cursor-pointer p-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                            >
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatWithAI;