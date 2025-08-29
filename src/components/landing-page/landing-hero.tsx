import { ArrowRight, Rocket, Sparkle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingHero() {
    return (
        <section className="bg-white relative pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-gradient-to-br from-blue-100/50 via-white to-white rounded-full blur-3xl opacity-60"></div>
                <div className="hidden lg:block absolute top-1/4 -right-48 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl opacity-50"></div>
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="text-center lg:text-left animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
                    <div className="inline-flex items-center justify-center lg:justify-start">
                        <span className="inline-flex items-center justify-center gap-1 bg-blue-100 text-blue-700 font-semibold px-4 py-1 rounded-full text-sm mb-4">
                            <Sparkle className="w-4" />
                            Now in Public Beta
                        </span>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
                        AI-Powered Research <br />
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mt-2">For Academic Excellence</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                        Accelerate your academic journey with intelligent tools designed for students and researchers.
                        From literature reviews to data analysis, we've got you covered.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button
                            size="lg"
                            className="bg-primary text-white px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center"
                        >
                            Start Free Trial
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="bg-white text-gray-700 px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/20 border border-gray-200 flex items-center justify-center"
                        >
                            <Video className="mr-2 h-5 w-5" />
                            Watch Demo
                        </Button>
                    </div>
                </div>
                <div className="relative order-first lg:order-last group animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 group-hover:blur-2xl transition-all duration-500"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200/50 aspect-video ">
                        <img
                            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                            alt="AcademiaAI Product Screenshot"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}