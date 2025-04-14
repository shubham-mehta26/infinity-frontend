import { useTheme } from "@/contexts/theme-context";
import { Moon, Sun } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Tabs defaultValue={theme} value={theme}>
      <TabsList>
        <TabsTrigger
          onClick={theme === "dark" ? () => toggleTheme() : undefined}
          value="light">
          <Sun className="h-5 w-5" />
        </TabsTrigger>
        <TabsTrigger
          onClick={theme === "light" ? () => toggleTheme() : undefined}
          value="dark">
          <Moon className="h-5 w-5" />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
