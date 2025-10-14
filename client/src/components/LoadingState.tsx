import { Card } from "@/components/ui/card";

export default function LoadingState() {
  return (
    <div className="space-y-6">
      <div className="h-6 w-48 bg-muted rounded-md animate-pulse" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="p-6 rounded-xl">
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="h-8 w-8 bg-muted rounded-md animate-pulse" />
                <div className="flex-1 space-y-2">
                  <div className="h-5 bg-muted rounded-md animate-pulse w-3/4" />
                  <div className="h-4 bg-muted rounded-md animate-pulse w-full" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-muted rounded-md animate-pulse w-32" />
                <div className="space-y-1.5">
                  {[1, 2, 3].map((j) => (
                    <div key={j} className="h-4 bg-muted rounded-md animate-pulse w-5/6" />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
