import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";

interface DislikesDisplayProps {
  dislikes: string[];
}

export default function DislikesDisplay({ dislikes }: DislikesDisplayProps) {
  if (!dislikes.length) return null;

  return (
    <Card className="p-6 rounded-xl">
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <XCircle className="h-5 w-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold font-[family-name:var(--font-display)]">
            What You're Not Into
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {dislikes.map((dislike, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="rounded-full text-sm px-4 py-1.5 bg-primary/10 text-primary hover:bg-primary/20"
              data-testid={`badge-dislike-${index}`}
            >
              {dislike}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
}
