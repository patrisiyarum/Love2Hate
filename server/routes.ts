import type { Express } from "express";
import { createServer, type Server } from "http";
import { recommendationRequestSchema } from "@shared/schema";
import { generateRecommendations } from "./lib/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/recommendations", async (req, res) => {
    try {
      const validatedData = recommendationRequestSchema.parse(req.body);
      
      const result = await generateRecommendations(
        validatedData.dislikes,
        validatedData.category
      );

      res.json({
        dislikes: result.dislikes,
        suggestions: result.suggestions,
        category: validatedData.category,
      });
    } catch (error: any) {
      console.error("Recommendation error:", error);
      res.status(400).json({ 
        error: error.message || "Failed to generate recommendations" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
