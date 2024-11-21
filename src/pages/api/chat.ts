import { getLanguageModel } from "@/lib/ai-model";
import { streamText, convertToCoreMessages } from "ai";
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  const { messages, additionalContext } = await request.json();

  console.log({ messages, additionalContext });

  const result = await streamText({
    model: getLanguageModel(),
    messages: [...convertToCoreMessages(messages)],
  });

  return result.toDataStreamResponse();
};
