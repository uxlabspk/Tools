import {ArrowRight, Rocket, Video} from "lucide-react";
import {Button} from "@/components/ui/button";
import Image from "next/image";


export default function LandingHero() {
    return (
        <section className="flex flex-col justify-center items-center py-20 px-4">
            <div className="container mx-auto text-center max-w-4xl">
                <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 mb-4">
                    {/*<i data-lucide="rocket" className="w-4 h-4 mr-2"></i>*/}
                    <Rocket className={'w-4 h-4 mr-2'} />
                    <span className="text-sm">Now in Beta - Join 10,000+ users</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Transform Your Workflow with
                    <span className="gradient-text">AI-Powered</span>
                    Intelligence
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                    Streamline your processes, boost productivity, and unlock new possibilities with our cutting-edge AI tool
                    designed for modern teams.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size='lg'
                        className={'rounded-full'}
                    >
                        Start Free Trial
                        <ArrowRight className={'h-5 w-5'} />
                    </Button>

                    <Button
                        variant={"ghost"}
                        size='lg'
                        className={'rounded-full'}
                    >
                        <Video className={'h-5 w-5'} />
                        Watch Demo
                    </Button>
                </div>
                <div className="mt-12">
                    <Image
                        src='/app.avif'
                        width={900}
                        height={800}
                        alt="AI Tool Dashboard"
                        className="rounded-lg shadow-2xl mx-auto border"/>
                </div>
            </div>
        </section>
    )
}