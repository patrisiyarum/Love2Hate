import { z } from "zod";

export const categorySchema = z.enum(["books", "movies"]);
export type Category = z.infer<typeof categorySchema>;

export const suggestionSchema = z.object({
  title: z.string(),
  description: z.string(),
  reasons: z.array(z.string()),
  icon: z.string().optional(),
});

export type Suggestion = z.infer<typeof suggestionSchema>;

export const recommendationRequestSchema = z.object({
  dislikes: z.string().min(1, "Please enter what you don't like"),
  category: categorySchema,
});

export type RecommendationRequest = z.infer<typeof recommendationRequestSchema>;

export const recommendationResponseSchema = z.object({
  dislikes: z.array(z.string()),
  suggestions: z.array(suggestionSchema),
  category: categorySchema,
});

export type RecommendationResponse = z.infer<typeof recommendationResponseSchema>;
