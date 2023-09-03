import React from "react";
import { motion } from "framer-motion";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full bg-[#64fed9]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className="text-[#64fed9]"> Fadega,</span>{" "}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-10`}>
             A Software Engineer with a passion for coding, coffee, and conquering challenges one line of code at a time.
          
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center">
        <a href="">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
             animate={{ 
              y: [0, 24, 0]
             }}
             transition={{
               duration: 2, 
               repeat: Infinity, 
              repeatType:'loop'
              }}
              className="w-3 h-3 bg-secondary rounded-full mb-1"
            />


          </div>


        </a>

      </div>
    </section>
  );
};

export default Hero;
