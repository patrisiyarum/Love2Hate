import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-end">
        <ThemeToggle />
      </div>
    </header>
  );
}
