




export default function ToolsCardsContainer({ children }: { children: ReactNode }) {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {children}
                </div>
            </div>
        </section>
    )
}
