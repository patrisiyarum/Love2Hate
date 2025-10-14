import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import InputSection, { type Category } from "@/components/InputSection";
import DislikesDisplay from "@/components/DislikesDisplay";
import SuggestionsGrid from "@/components/SuggestionsGrid";
import LoadingState from "@/components/LoadingState";
import { useToast } from "@/hooks/use-toast";
import type { Suggestion } from "@/components/SuggestionCard";
import type { RecommendationResponse } from "@shared/schema";

export default function Home() {
  const [dislikes, setDislikes] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const { toast } = useToast();

  const recommendationMutation = useMutation({
    mutationFn: async ({ dislikes, category }: { dislikes: string; category: Category }) => {
      const response = await apiRequest("POST", "/api/recommendations", {
        dislikes,
        category,
      });
      return (await response.json()) as RecommendationResponse;
    },
    onSuccess: (data) => {
      setDislikes(data.dislikes);
      setSuggestions(data.suggestions);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to generate recommendations. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (input: string, category: Category) => {
    recommendationMutation.mutate({ dislikes: input, category });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 space-y-10">
        <InputSection onSubmit={handleSubmit} isLoading={recommendationMutation.isPending} />
        
        {recommendationMutation.isPending && <LoadingState />}
        
        {!recommendationMutation.isPending && dislikes.length > 0 && (
          <>
            <DislikesDisplay dislikes={dislikes} />
            <SuggestionsGrid suggestions={suggestions} />
          </>
        )}
      </div>
    </div>
  );
}
