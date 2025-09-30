'use client'

import React, { useState } from 'react';
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
    Copy, Hand,
    Heart
} from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import ChatWithAI from './components/ChatWithAI';
import Folders from './components/Folders';
import Documents from './components/Documents';
import SharedWithMe from './components/SharedWithMe';
import History from './components/History';

const ChatInterface = () => {
    const [activePage, setActivePage] = useState('Chat With AI');

    const sidebarItems = [
        { id: 'Chat With AI', icon: MessageCircle, label: 'Chat With AI' },
        { id: 'Folders', icon: Folder, label: 'Folders' },
        { id: 'Documents', icon: FileText, label: 'Documents' },
        { id: 'Shared With Me', icon: Share2, label: 'Shared With Me' },
        { id: 'History', icon: HistoryIcon, label: 'History' }, // Use aliased icon
    ];

    const renderContent = () => {
        switch (activePage) {
            case 'Chat With AI':
                return <ChatWithAI />;
            case 'Folders':
                return <Folders />;
            case 'Documents':
                return <Documents />;
            case 'Shared With Me':
                return <SharedWithMe />;
            case 'History':
                return <History />;
            default:
                return <ChatWithAI />;
        }
    };

    return (
        <div className="flex h-screen bg-gray-50 font-sans">
            {/* Sidebar */}
            <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
                {/* Top section */}
                <div className="p-4 border-b border-gray-200 flex items-center gap-2">
                    <Heart />
                    <div className="text-lg font-semibold text-gray-900 py-1">Aivora AI</div>
                </div>

                {/* Navigation items */}
                <div className="flex-1 p-3">
                    <nav className="space-y-1">
                        {sidebarItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setActivePage(item.id)}
                                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm cursor-pointer transition-colors ${
                                    activePage === item.id
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
                    {/* User profile */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <div className="mt-4 p-3 bg-gray-50 rounded-lg cursor-pointer">
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
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuItem>
                                <Hand className={'w-4 h-4 mr-2'} />
                                <span>hi, naveed!</span>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <ThumbsUp className="w-4 h-4 mr-2" />
                                <span>Feedback</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Settings className="w-4 h-4 mr-2" />
                                <span>Settings</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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
                {renderContent()}
            </div>
        </div>
    );
};

export default ChatInterface;