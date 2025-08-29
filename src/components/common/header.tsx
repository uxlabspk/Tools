import {Bot} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";


export default function Header() {
    return (
        <header className="gradient-bg backdrop-blur-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href="" className="flex items-center space-x-2">
                    <Bot className={'h-8 w-8'} />
                    <span className="text-2xl font-bold">AITool</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link href={'/'} className="text-gray-950 hover:text-gray-800 transition-colors">Home</Link>
                    <Link href={'/tools'} className="text-gray-950 hover:text-gray-800 transition-colors">Tools</Link>
                    <Link href={'/about'} className="text-gray-950 hover:text-gray-800 transition-colors">About</Link>
                    <Link href={'/contact'} className="text-gray-950 hover:text-gray-800 transition-colors">Contact</Link>
                    <Link href={'/login'} className="text-gray-950 hover:text-gray-800 transition-colors">
                        <Button
                            size={'lg'}
                            className={'rounded-full'}>
                            Get Started
                        </Button>
                    </Link>

                </nav>
            </div>
        </header>
    )
}
