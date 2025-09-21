"use client"
import { Moon, Sun, Monitor } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="relative transition-all duration-300 hover:scale-110 hover:bg-muted/50">
          <Sun className="h-4 w-4 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 animate-in fade-in-0 zoom-in-95 duration-200">
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className={`cursor-pointer transition-all duration-200 hover:bg-accent/50 ${theme === "light" ? "bg-accent" : ""}`}
        >
          <Sun className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className={`cursor-pointer transition-all duration-200 hover:bg-accent/50 ${theme === "dark" ? "bg-accent" : ""}`}
        >
          <Moon className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-12" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className={`cursor-pointer transition-all duration-200 hover:bg-accent/50 ${theme === "system" ? "bg-accent" : ""}`}
        >
          <Monitor className="mr-2 h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
