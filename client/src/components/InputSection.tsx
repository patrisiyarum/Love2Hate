import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Book, Film } from "lucide-react";

export type Category = "books" | "movies";

interface InputSectionProps {
  onSubmit: (dislikes: string, category: Category) => void;
  isLoading?: boolean;
}

export default function InputSection({ onSubmit, isLoading }: InputSectionProps) {
  const [input, setInput] = useState("");
  const [category, setCategory] = useState<Category>("books");
  const charCount = input.length;
  const maxChars = 500;

  const handleSubmit = () => {
    if (input.trim()) {
      onSubmit(input, category);
    }
  };

  const placeholders = {
    books: "Type books you don't like... (e.g., 'slow-paced novels, dark fantasy, romance')",
    movies: "Type movies you don't like... (e.g., 'horror films, long documentaries, superhero movies')"
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold font-[family-name:var(--font-display)] tracking-tight">
          Reverse Recommendations
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tell us what books or movies you don't like, and we'll suggest ones you'll love
        </p>
      </div>

      <div className="space-y-4">
        <div className="flex justify-center gap-2">
          <Button
            variant={category === "books" ? "default" : "outline"}
            onClick={() => setCategory("books")}
            className="gap-2"
            data-testid="button-category-books"
          >
            <Book className="h-4 w-4" />
            Books
          </Button>
          <Button
            variant={category === "movies" ? "default" : "outline"}
            onClick={() => setCategory("movies")}
            className="gap-2"
            data-testid="button-category-movies"
          >
            <Film className="h-4 w-4" />
            Movies
          </Button>
        </div>

        <div className="relative">
          <Textarea
            placeholder={placeholders[category]}
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
          {isLoading ? "Finding suggestions..." : `Find ${category === "books" ? "Books" : "Movies"} I'd Love`}
        </Button>
      </div>
    </div>
  );
}
