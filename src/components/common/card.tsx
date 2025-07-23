import {ArrowRight, Play, Tag} from "lucide-react";
import {Button} from "@/components/ui/button";

interface CardProps {
    title: string;
    description: string;
    category: string[];
    features: string[];
}



export default function Card({ title, description, category, features }: CardProps) {
    return(
    <div className="bg-white rounded-lg shadow-lg p-6 card-hover">
        <div className="flex items-center justify-between mb-4">
            <i data-lucide="{% if tool.category == 'Content' %}file-text{% elif tool.category == 'Vision' %}image{% elif tool.category == 'Conversation' %}message-square{% elif tool.category == 'Analytics' %}brain{% elif tool.category == 'Automation' %}zap{% else %}bot{% endif %}"
               className="h-12 w-12 text-blue-600"></i>

            <div className={'flex items-center justify-between gap-2'}>
                {category.map((item, index) => (
                    <span key={index}  className="text-primary flex items-center justify-center gap-2 bg-gray-100  text-xs px-2 py-1 rounded-full">
                        <Tag className={'w-3'} />
                        {item}
                    </span>
                ))}
            </div>

        </div>
        <h3 className="text-xl font-semibold mb-2">{ title }</h3>
        <p className="text-gray-600 mb-4">{ description }</p>
        <div className="space-y-2 mb-4">
            <div className="flex flex-col items-start text-sm text-gray-600">
                {features.map((feature, index) => (
                    <div key={index} className={'flex items-center mb-2'}>
                        <span className="w-2 h-2 bg-primary rounded-full mr-1"></span>
                        <p>{feature}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className="flex gap-2">
            <Button
                className="flex-1 rounded-full"
                variant={"outline"}
            >
                <Play className={'w-4 h-4'} />
                Try Demo
            </Button>
            <Button
                className="flex-1 rounded-full"
            >
                Use Tool
                <ArrowRight className={'w-4 h-4'} />
            </Button>
        </div>
    </div>
    )
}