import {Sparkles} from "lucide-react";


export default function ToolsHeader() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center max-w-4xl">
                <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                    <Sparkles className={'w-4 h-4 mr-2'} />
                    <span className="text-sm">6 Powerful AI Tools</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    AI Tools for
                    <span className="gradient-text">Every Task</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Discover our comprehensive suite of AI-powered tools designed to transform how you work, create, and
                    innovate.
                </p>
            </div>
        </section>
    )
}