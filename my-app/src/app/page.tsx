          // import { Style } from "./index.css";
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Header from "../components/Header";
import ThemeToggler from "./ThemeToggler";
import HeroSection from "../components/HeroSection";

export default function Homepage() {
  return (
   <>
       <Header />
       <HeroSection />
       <div className="min-h-screen flex items-center justify-center  text-gray-900 dark:text-white transition-all duration-300  ">
       <ThemeToggler />
      </div>
  </>

  )
}