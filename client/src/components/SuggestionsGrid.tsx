import SuggestionCard, { type Suggestion } from "./SuggestionCard";
import { Sparkles } from "lucide-react";

interface SuggestionsGridProps {
  suggestions: Suggestion[];
}

export default function SuggestionsGrid({ suggestions }: SuggestionsGridProps) {
  if (!suggestions.length) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Sparkles className="h-5 w-5 text-primary" />
        <h2 className="text-xl font-semibold font-[family-name:var(--font-display)]">
          Here's What You Might Love
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {suggestions.map((suggestion, index) => (
          <SuggestionCard key={index} suggestion={suggestion} index={index} />
        ))}
      </div>
    </div>
  );
}
