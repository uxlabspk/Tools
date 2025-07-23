import CTA from "@/components/common/cta";
import ToolsHeader from "@/components/tools/tools-header";
import ToolsCardsContainer from "@/components/tools/tools-cards-container";
import Card from "@/components/common/card";


export default function ToolsPage() {
    return (
        <>
            <ToolsHeader />
            <ToolsCardsContainer>
                <Card
                    title="AI Assistant"
                    description="Helps you complete tasks efficiently"
                    category={['AI', 'Productivity']}
                    features={['Chat', 'Suggestions', 'Reminders']}
                />
            </ToolsCardsContainer>
            <CTA />
        </>
    )
}