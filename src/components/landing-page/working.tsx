




export default function Working() {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Get started in minutes with our simple three-step process
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div
                            className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-blue-600">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Connect Your Data</h3>
                        <p className="text-gray-600">
                            Easily import your existing data or connect to your favorite tools and platforms
                        </p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-green-600">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Configure AI Models</h3>
                        <p className="text-gray-600">
                            Choose from our pre-trained models or customize them to fit your specific needs
                        </p>
                    </div>
                    <div className="text-center">
                        <div
                            className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl font-bold text-purple-600">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Get Insights</h3>
                        <p className="text-gray-600">Start receiving AI-powered insights and recommendations
                            instantly</p>
                    </div>
                </div>
            </div>
        </section>
    )
}