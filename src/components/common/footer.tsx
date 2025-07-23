import {Bot} from "lucide-react";


export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center space-x-2 mb-4">
                            <Bot className={'w-8 h-8'} />
                            <span className="text-2xl font-bold">AITool</span>
                        </div>
                        <p className="text-gray-400">Empowering teams with AI-powered solutions for the modern
                            workplace.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href=""
                                   className="hover:text-white transition-colors">Features</a></li>
                            <li><a href="" className="hover:text-white transition-colors">Pricing</a></li>
                            <li><a href="" className="hover:text-white transition-colors">API</a></li>
                            <li><a href="" className="hover:text-white transition-colors">Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href=""
                                   className="hover:text-white transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                            <li><a href=""
                                   className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Support</h3>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="" className="hover:text-white transition-colors">Help Center</a></li>
                            <li><a href="" className="hover:text-white transition-colors">Community</a></li>
                            <li><a href="" className="hover:text-white transition-colors">Status</a></li>
                            <li><a href="" className="hover:text-white transition-colors">Privacy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2024 AITool. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}