import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
const MODEL = 'sailor2:1b';

// Define schemas for request validation
const requestSchema = z.object({
  task: z.enum(['summarize', 'generate_ideas', 'enhance_writing']),
  context: z.object({
    text: z.string().min(10, { message: "Text must be at least 10 characters long." }),
  }),
});

// Function to create a prompt based on the task
const createPrompt = (task: string, text: string): string => {
  switch (task) {
    case 'summarize':
      return `You are an expert research assistant. Summarize the following academic text, focusing on the key findings, methodology, and conclusions. Keep the summary concise and academic in tone.\n\nText:\n"""\n${text}\n"""\n\nSummary:`;
    case 'generate_ideas':
      return `You are a creative and knowledgeable research advisor. Based on the following topic, generate three innovative research questions or project ideas. For each idea, provide a brief rationale.\n\nTopic:\n"""\n${text}\n"""\n\nResearch Ideas:`;
    case 'enhance_writing':
      return `You are an expert academic editor. Improve the clarity, coherence, and academic tone of the following paragraph without changing its core meaning. Identify and correct any grammatical errors or awkward phrasing.\n\nOriginal Text:\n"""\n${text}\n"""\n\nEnhanced Text:`;
    default:
      throw new Error('Invalid task');
  }
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validation = requestSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json({ error: 'Invalid request body', details: validation.error.flatten() }, { status: 400 });
    }

    const { task, context } = validation.data;
    const prompt = createPrompt(task, context.text);

    const ollamaResponse = await fetch(`${OLLAMA_URL}/api/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: MODEL,
        prompt: prompt,
        stream: true,
      }),
    });

    if (!ollamaResponse.ok) {
      const errorText = await ollamaResponse.text();
      console.error('Ollama API error:', errorText);
      return NextResponse.json({ error: `Ollama API error: ${ollamaResponse.statusText}`, details: errorText }, { status: ollamaResponse.status });
    }

    // Proxy the streaming response from Ollama to the client.
    const stream = new ReadableStream({
      async start(controller) {
        if (!ollamaResponse.body) {
          controller.close();
          return;
        }
        const reader = ollamaResponse.body.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { done, value } = await reader.read();
          if (done) {
            break;
          }
          const chunk = decoder.decode(value, { stream: true });
          // Ollama streams NDJSON, so we need to parse each line
          const lines = chunk.split('\n').filter(line => line.trim() !== '');
          for (const line of lines) {
            try {
              const json = JSON.parse(line);
              if (json.response) {
                controller.enqueue(new TextEncoder().encode(json.response));
              }
              if (json.done) {
                controller.close();
                return;
              }
            } catch (e) {
              console.error('Error parsing Ollama stream chunk:', e);
            }
          }
        }
        controller.close();
      },
    });

    return new Response(stream);

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}


