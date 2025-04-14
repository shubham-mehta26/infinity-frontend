import { ThemeToggle } from "@/components/ThemeToggleTab/theme-toggle";
import { Button } from "@/components/ui/button";

export const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto p-4">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <h1 className="text-4xl font-bold mb-8">Welcome to Infinity</h1>
          <Button>Click me</Button>
        </div>
      </div>
    </div>
  );
};
