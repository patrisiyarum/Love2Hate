# Reverse Recommendations

## Overview

A web application that provides AI-powered reverse recommendations for books and movies. Users input what they **don't** like, and the system suggests content they would likely enjoy based on opposite characteristics. The application uses OpenAI's GPT-5 model to analyze user preferences and generate personalized suggestions with detailed reasoning.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing (single-page application with home and 404 routes)

**UI Component System**
- Shadcn/ui component library with Radix UI primitives
- Tailwind CSS for styling with custom design tokens
- Design system follows "New York" style variant with utility-focused approach
- Custom color palette with dark mode support (primary: vibrant purple at 262° 83% 58%)
- Typography: Inter for body text, Plus Jakarta Sans for headings
- Responsive design with mobile-first approach

**State Management**
- TanStack Query (React Query) for server state management and API caching
- Local component state using React hooks
- No complex global state management (stateless recommendation flow)

**Form Handling**
- React Hook Form with Zod validation for type-safe form validation
- Schema-based validation using shared types between client and server

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for API routes
- Single POST endpoint: `/api/recommendations`
- Stateless request/response model (no session or user data persistence)

**API Design**
- RESTful architecture with JSON request/response
- Request validation using Zod schemas
- Error handling middleware for consistent error responses
- Request/response logging for debugging

**AI Integration**
- OpenAI GPT-5 integration for generating recommendations
- Structured JSON output using response_format parameter
- Prompt engineering to extract dislike patterns and generate opposite-characteristic suggestions
- Generates 4 recommendations per request with titles, descriptions, and reasoning

### Data Storage Solutions

**Current Implementation**
- No database or persistent storage required
- MemStorage class exists as placeholder (implements empty IStorage interface)
- All data processing is stateless and request-scoped

**Rationale**
- Application doesn't require user accounts, history, or data persistence
- Each recommendation request is independent
- Simpler architecture reduces complexity and maintenance overhead

**Future Extensibility**
- Drizzle ORM configured with PostgreSQL support for potential future features
- Migration system ready (drizzle-kit configured)
- Schema types can be defined in `shared/schema.ts`

### External Dependencies

**AI Service**
- OpenAI API (GPT-5 model)
- Required: `OPENAI_API_KEY` environment variable
- Used for: Natural language processing, pattern extraction, and recommendation generation

**Database (Optional/Future)**
- Neon Postgres serverless database (configured but not actively used)
- Required: `DATABASE_URL` environment variable
- Connection: `@neondatabase/serverless` driver
- ORM: Drizzle with connection pooling support

**Development Tools**
- Replit-specific plugins for development environment
- Vite plugins: runtime error overlay, cartographer, dev banner
- ESBuild for production server bundling

**UI Dependencies**
- Google Fonts: Inter and Plus Jakarta Sans
- Radix UI component primitives
- Lucide React for icons
- Class Variance Authority for component variants

**Type Safety**
- Zod for runtime type validation and schema definition
- Shared type definitions between client and server via `@shared` path alias
- TypeScript strict mode enabled