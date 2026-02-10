'use client';
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggler() {
    const { theme, setTheme } = useTheme();
    return (
     <Button
     variant="outline"
     size="icon"
     className="rounded-full bottom-2 right-2 fixed"
     onClick={() => setTheme(theme === "light" ? "dark" : "light")}
     >
       <FiSun className="fixed h-10 w-10 rotate-0 scale-100 dark:rotate-90 dark:scale-0">
       </FiSun>
       <FiMoon className="fixed  h-10 w-10rotate-90 scale-0 dark:rotate-0 dark:scale-100">
       </FiMoon>    
     </Button>
    )
}