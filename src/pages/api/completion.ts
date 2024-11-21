import { getLanguageModel } from "@/lib/ai-model";
import { streamText } from "ai";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const {
    prompt,
    additionalContext,
  }: { prompt: string; additionalContext: string } = await request.json();

  console.log({ prompt, additionalContext });

  const result = await streamText({
    model: getLanguageModel(),
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: prompt },
    ],
  });

  return result.toDataStreamResponse();
};
