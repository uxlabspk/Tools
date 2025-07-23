import {Check, Shield, Users, Zap} from "lucide-react";


export default function Features() {
    return (
        <section className="py-20 px-4 bg-gray-50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features for Every Need</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Our AI tool comes packed with features designed to supercharge your productivity and streamline
                        your workflow.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                        <Zap className={'h-12 w-12 text-blue-600 mb-4'} />
                        <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                        <p className="text-gray-600 mb-4">Process complex tasks in seconds with our optimized AI
                            algorithms</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                Real-time processing
                            </li>
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                Instant results
                            </li>
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                Batch operations
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                        <Shield className={'h-12 w-12 text-blue-600 mb-4'} />
                        <h3 className="text-xl font-semibold mb-2">Enterprise Security</h3>
                        <p className="text-gray-600 mb-4">Your data is protected with bank-level security and
                            encryption</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                End-to-end encryption
                            </li>
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                SOC 2 compliant
                            </li>
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                GDPR ready
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
                        <Users className={'h-12 w-12 text-purple-600 mb-4'} />
                        <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                        <p className="text-gray-600 mb-4">Work together seamlessly with built-in collaboration tools</p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                Real-time sharing
                            </li>
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                Role-based access
                            </li>
                            <li className="flex items-center">
                                <Check className={'h-4 w-4 text-green-500 mr-2'} />
                                Activity tracking
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}