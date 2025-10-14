import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles } from "lucide-react";

interface InputSectionProps {
  onSubmit: (dislikes: string) => void;
  isLoading?: boolean;
}

export default function InputSection({ onSubmit, isLoading }: InputSectionProps) {
  const [input, setInput] = useState("");
  const charCount = input.length;
  const maxChars = 500;

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-display)] tracking-tight">
          Reverse Recommendations
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tell us what you don't like, and we'll suggest things you might love instead
        </p>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <Textarea
            placeholder="Type what you don't like... (e.g., 'spicy food, horror movies, crowded places')"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="min-h-32 resize-none text-base rounded-xl"
            maxLength={maxChars}
            data-testid="input-dislikes"
          />
          <div className="absolute bottom-3 right-3 text-sm text-muted-foreground">
            {charCount}/{maxChars}
          </div>
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!input.trim() || isLoading}
          className="w-full sm:w-auto px-8 py-6 text-base rounded-lg"
          data-testid="button-submit"
        >
          <Sparkles className="h-5 w-5 mr-2" />
          {isLoading ? "Finding suggestions..." : "Find What I'd Love Instead"}
        </Button>
      </div>
    </div>
  );
}
