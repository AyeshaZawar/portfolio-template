"use client";

import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";


const HeroSection = () => {
  return (
    <section
      className="h-screen bg-gradient-to-br from-[var(--secondary-color-5)] to-[var(--secondary-color-3)]
      dark:bg-gradient-to-br dark:from-[var(--primary-color-5)] dark:to-[var(--primary-color-4)]
      flex items-center justify-start lg:px-24 px-10 
      relative overflow-hidden"
    >
      {/* Left side */}
      <div className="z-40 xl:mb-0 mb-[10%] lg:w-1/2 md:w-2/3">
        <motion.h1
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            type: "tween",
            ease: "easeOut",
            delay: 1.3,
            duration: 1.5,
          }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold 
          text-[var(--secondary-color-4)] dark:text-[var(--primary-color-3)] 
          z-10 mb-6"
        >
          Design With Purpose,
          <br />
          Creativity With Impact
        </motion.h1>
        <motion.p
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 25,
            delay: 1.8,
            duration: 1.5,
          }}
          // initial={{ x: -200, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // transition={{
          //   type: "tween",
          //   ease: "easeOut",
          //   delay: 1.3,
          //   duration: 1.5,
          // }}
          className="text-xl md:text-1xl lg:text-2xl text-[var(--secondary-color-2)] dark:text-[var(--primary-color-2)]"
        >
          Hey, I’m [Me]. My work focuses on blending creativity with
          strategy—whether it’s logos, marketing campaigns, or social media
          graphics. I believe design is not just about looking good, but about
          communicating effectively and building strong identities.
        </motion.p>
      </div>
      {/* Right side */}
      <div  className="absolute top-0 right-[-30%] w-full h-full flex items-center justify-center" >
        <Spline  scene="https://prod.spline.design/pgozU9VM9w7ysfct/scene.splinecode" />
      </div>
    </section>
  );
};

export default HeroSection;
