import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export interface Suggestion {
  title: string;
  description: string;
  reasons: string[];
  icon?: string;
}

interface SuggestionCardProps {
  suggestion: Suggestion;
  index: number;
}

export default function SuggestionCard({ suggestion, index }: SuggestionCardProps) {
  return (
    <Card className="p-6 rounded-xl hover-elevate" data-testid={`card-suggestion-${index}`}>
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          {suggestion.icon && (
            <div className="text-2xl flex-shrink-0">{suggestion.icon}</div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold font-[family-name:var(--font-display)] mb-1" data-testid={`text-suggestion-title-${index}`}>
              {suggestion.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {suggestion.description}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium text-foreground">Why you'd like this:</p>
          <ul className="space-y-1.5">
            {suggestion.reasons.map((reason, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="h-4 w-4 text-chart-2 flex-shrink-0 mt-0.5" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
}
