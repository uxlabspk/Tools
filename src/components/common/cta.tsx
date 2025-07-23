import {Button} from "@/components/ui/button";


export default function CTA() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Workflow?</h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                    Join thousands of teams already using our AI tool to boost productivity and drive results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        size={'lg'}
                        className={'rounded-full px-8 py-6'}
                    >
                        Start Free Trial
                    </Button>
                </div>
            </div>
        </section>
    )
}