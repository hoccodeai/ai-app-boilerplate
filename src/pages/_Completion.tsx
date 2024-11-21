/**
 * Completion Component
 *
 * Use this component when you need:
 * - Single-turn interactions (one prompt, one response)
 * - Simple question-answer scenarios
 * - No conversation history needed
 * - Shorter, focused responses
 *
 * Ideal for:
 * - Quick queries
 * - Code completion
 * - Text generation
 * - Translation requests
 * - Simple explanations
 */
import { useCompletion } from "ai/react";
import { Loader2 } from "lucide-react";
import Markdown from "react-markdown";

const Completion: React.FC = () => {
  const {
    completion,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
    isLoading,
  } = useCompletion({
    api: "/api/completion",
    body: {
      additionalContext: "This is completion context",
    },
    onFinish() {
      setInput("");
    },
  });

  return (
    <div className="max-w-6xl mx-auto p-4 h-full">
      <div className="bg-white rounded-lg shadow flex flex-col">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type a message..."
              className="flex-1 rounded-lg border p-2 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Send
            </button>
          </div>
        </form>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 break-words whitespace-pre-wrap">
          <Markdown>{completion}</Markdown>
          {isLoading && (
            <Loader2 className="w-6 h-6 text-gray-500 animate-spin" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Completion;
