import OpenAI from "openai";
import type { Category, Suggestion } from "@shared/schema";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateRecommendations(
  dislikes: string,
  category: Category
): Promise<{ dislikes: string[], suggestions: Suggestion[] }> {
  const categoryLabel = category === "books" ? "books" : "movies";
  const prompt = `You are a ${categoryLabel} recommendation expert. A user has told you what they DON'T like in ${categoryLabel}. Your job is to:

1. Extract the key themes/patterns from their dislikes
2. Suggest 4 ${categoryLabel} they would likely enjoy based on the OPPOSITE characteristics

User's dislikes: "${dislikes}"

Respond with JSON in this exact format:
{
  "dislikes": ["dislike1", "dislike2", "dislike3"],
  "suggestions": [
    {
      "title": "${category === "books" ? "Book title and author" : "Movie title and year"}",
      "description": "Brief description (1-2 sentences)",
      "reasons": ["Reason 1 why they'd like it", "Reason 2", "Reason 3"],
      "icon": "${category === "books" ? "📚" : "🎬"}"
    }
  ]
}

Make the suggestions diverse and genuinely appealing based on their stated dislikes. Be specific with titles and thoughtful with reasons.`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-5", // the newest OpenAI model is "gpt-5" which was released August 7, 2025
      messages: [
        {
          role: "system",
          content: `You are an expert at understanding people's preferences and making personalized ${categoryLabel} recommendations.`,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
      max_completion_tokens: 2048,
    });

    const result = JSON.parse(response.choices[0].message.content || "{}");
    return {
      dislikes: result.dislikes || [],
      suggestions: result.suggestions || [],
    };
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to generate recommendations");
  }
}
