import { useState } from "react";
import InputSection from "@/components/InputSection";
import DislikesDisplay from "@/components/DislikesDisplay";
import SuggestionsGrid from "@/components/SuggestionsGrid";
import LoadingState from "@/components/LoadingState";
import type { Suggestion } from "@/components/SuggestionCard";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [dislikes, setDislikes] = useState<string[]>([]);
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const handleSubmit = async (input: string) => {
    setIsLoading(true);
    
    // Mock processing - extract dislikes
    const dislikesList = input
      .split(/[,;]/)
      .map(item => item.trim())
      .filter(item => item.length > 0);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock suggestions based on input
    const mockSuggestions: Suggestion[] = [
      {
        title: 'Cozy Café Reading',
        description: 'Enjoy a quiet afternoon with a good book in a peaceful café setting',
        reasons: [
          'Relaxing atmosphere without crowds',
          'Control your own space and pace',
          'Gentle background ambiance'
        ],
        icon: '📚'
      },
      {
        title: 'Mild Comfort Food',
        description: 'Discover flavorful dishes with gentle, soothing tastes',
        reasons: [
          'Rich flavors without intense heat',
          'Easy on your palate',
          'Wide variety of options'
        ],
        icon: '🍲'
      },
      {
        title: 'Nature Walks',
        description: 'Explore scenic trails and peaceful outdoor spaces',
        reasons: [
          'Open spaces, no crowds',
          'Calming natural sounds',
          'Fresh air and tranquility'
        ],
        icon: '🌲'
      },
      {
        title: 'Mystery Podcasts',
        description: 'Engaging storytelling without scary visuals',
        reasons: [
          'Suspenseful without being frightening',
          'Control your listening pace',
          'Safe thriller experience'
        ],
        icon: '🎧'
      }
    ];
    
    setDislikes(dislikesList);
    setSuggestions(mockSuggestions);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-12 space-y-10">
        <InputSection onSubmit={handleSubmit} isLoading={isLoading} />
        
        {isLoading && <LoadingState />}
        
        {!isLoading && dislikes.length > 0 && (
          <>
            <DislikesDisplay dislikes={dislikes} />
            <SuggestionsGrid suggestions={suggestions} />
          </>
        )}
      </div>
    </div>
  );
}
