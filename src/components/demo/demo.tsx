'use client';

import { useState, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import { Loader2, Copy, Check, RefreshCw, StopCircle } from 'lucide-react';

type Task = 'summarize' | 'generate_ideas' | 'enhance_writing' | 'explain';

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
    explain: {
        label: 'explain',
        placeholder: 'Enter a paragraph for explanation....',
    },
};

const DEMO_LIMIT = 5;

const DemoComponent = () => {
    const [task, setTask] = useState<Task>('summarize');
    const [inputText, setInputText] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isCopied, setIsCopied] = useState(false);
    const [demoCount, setDemoCount] = useState(0);
    const abortControllerRef = useRef<AbortController | null>(null);

    const isLimitReached = demoCount >= DEMO_LIMIT;

    const handleCopy = () => {
        if (!result) return;
        navigator.clipboard.writeText(result).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        });
    };

    const handleStop = () => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }
    };

    const handleGenerate = async () => {
        if (isLimitReached) {
            setError(`You have reached the demo limit of ${DEMO_LIMIT} generations.`);
            return;
        }
        if (!inputText.trim()) {
            setError('Please enter some text.');
            return;
        }
        setIsLoading(true);
        setError('');
        setResult('');

        const controller = new AbortController();
        abortControllerRef.current = controller;

        try {
            const response = await fetch('/api/ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    task,
                    context: { text: inputText },
                }),
                signal: controller.signal,
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
            setDemoCount(prev => prev + 1);
        } catch (err: any) {
            if (err.name !== 'AbortError') {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
            abortControllerRef.current = null;
        }
    };

    return (
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <select
                    value={task}
                    onChange={(e) => setTask(e.target.value as Task)}
                    className="w-full sm:w-1/3 px-4 py-3 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                    disabled={isLimitReached}
                >
                    <option value="summarize">Summarize Text</option>
                    <option value="generate_ideas">Generate Ideas</option>
                    <option value="enhance_writing">Enhance Writing</option>
                    <option value="explain">Explain</option>
                </select>
                {isLoading ? (
                    <button
                        onClick={handleStop}
                        className="w-full sm:w-auto bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center"
                    >
                        <StopCircle className="mr-2 h-5 w-5" /> Stop Generating
                    </button>
                ) : (
                    <button
                        onClick={handleGenerate}
                        disabled={isLimitReached}
                        className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                        Generate
                    </button>
                )}
            </div>

            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isLimitReached ? "You've reached the demo limit." : taskDetails[task].placeholder}
                className="w-full h-40 p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4 disabled:bg-gray-100"
                disabled={isLimitReached}
            />

            {isLimitReached && !error && (
                <p className="text-yellow-600 bg-yellow-50 p-3 rounded-lg mb-4">
                    You have used {demoCount}/{DEMO_LIMIT} free generations. Please sign up to continue.
                </p>
            )}
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
                            disabled={isLimitReached}
                            className="bg-white/80 backdrop-blur-sm text-gray-600 hover:text-gray-900 p-2 rounded-lg transition-colors border border-gray-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
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
