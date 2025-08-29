'use client';

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Loader2, Copy, Check, RefreshCw } from 'lucide-react';

type Task = 'summarize' | 'generate_ideas' | 'enhance_writing';

const taskDetails = {
    summarize: {
        label: 'Summarize Text',
        placeholder: 'Paste a long paragraph or abstract from a research paper here...',
    },
    generate_ideas: {
        label: 'Generate Research Ideas',
        placeholder: 'Enter a research topic, e.g., "The impact of AI on climate change modeling"...',
    },
    enhance_writing: {
        label: 'Enhance Writing',
        placeholder: 'Paste a sentence or paragraph you want to improve...',
    },
};

const DemoComponent = () => {
    const [task, setTask] = useState<Task>('summarize');
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
        if (!result) return;
        navigator.clipboard.writeText(result).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    const handleGenerate = async () => {
        if (!inputText.trim()) {
            setError('Please enter some text.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult('');

        try {
            const response = await fetch('/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    task,
                    context: { text: inputText },
                }),
            });

            if (!response.ok || !response.body) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'An unknown error occurred.');
            }

            const reader = response.body.getReader();
            const decoder = new TextDecoder();

            while (true) {
                const { value, done } = await reader.read();
                if (done) break;
                const chunk = decoder.decode(value);
                setResult((prev) => prev + chunk);
            }
        } catch (err: any) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <select
                    value={task}
                    onChange={(e) => setTask(e.target.value as Task)}
                    className="w-full sm:w-1/3 px-4 py-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="summarize">Summarize Text</option>
                    <option value="generate_ideas">Generate Ideas</option>
                    <option value="enhance_writing">Enhance Writing</option>
                </select>
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {isLoading ? <><Loader2 className="mr-2 h-5 w-5 animate-spin" /> Generating...</> : 'Generate'}
                </button>
            </div>

            <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder={taskDetails[task].placeholder} className="w-full h-40 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4" />

            {error && <p className="text-red-500 mb-4">{error}</p>}

            <div className="bg-gray-100 p-4 rounded-lg min-h-[10rem] relative">
                <h3 className="font-semibold text-gray-800 mb-2">Result:</h3>
                <div className="prose max-w-none text-gray-700 pb-16">
                    {result ? (
                        <ReactMarkdown>{result}</ReactMarkdown>
                    ) : (
                        <p>AI output will appear here...</p>
                    )}
                </div>
                {!isLoading && result && (
                    <div className="absolute bottom-4 right-4 flex gap-2">
                        <button
                            onClick={handleCopy}
                            className="bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 p-2 rounded-lg transition-colors border border-gray-300 hover:bg-gray-200"
                            title="Copy to clipboard"
                        >
                            {isCopied ? <Check className="h-5 w-5 text-green-500" /> : <Copy className="h-5 w-5" />}
                        </button>
                        <button
                            onClick={handleGenerate}
                            className="bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 p-2 rounded-lg transition-colors border border-gray-300 hover:bg-gray-200"
                            title="Regenerate"
                        >
                            <RefreshCw className="h-5 w-5" />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DemoComponent;