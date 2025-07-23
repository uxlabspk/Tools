import {Bot} from "lucide-react";
import {Button} from "@/components/ui/button";


export default function Header() {
    return (
        <header className="border-b gradient-bg backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href="" className="flex items-center space-x-2">
                    {/*<i data-lucide="bot" className="h-8 w-8 text-white"></i>*/}
                    <Bot className={'h-8 w-8'} />
                    <span className="text-2xl font-bold">AITool</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <a href=""
                       className="text-gray-950 hover:text-gray-800 transition-colors">Home</a>
                    <a href=""
                       className="text-gray-950 hover:text-gray-800 transition-colors">Tools</a>
                    <a href=""
                       className="text-gray-950 hover:text-gray-800 transition-colors">About</a>
                    <a href=""
                       className="text-gray-950 hover:text-gray-800 transition-colors">Contact</a>
                    <Button
                        size={'lg'}
                        className={'rounded-full'}
                    >
                        Get Started
                    </Button>
                </nav>
            </div>
        </header>
    )
}
