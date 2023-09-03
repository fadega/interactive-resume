import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <h1 className= "mb-5 text-[#dfd9ff] font-medium lg:text-[25px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]">Some technologies I worked with ..</h1>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        // <div className='w-28 h-28' key={technology.name}>
        //   <BallCanvas icon={technology.icon} />
        // </div>
        <div className='background' key={technology.name}>
          <p className='bg-[#122d41] text-[#64fed9] px-4 py-1 rounded-2xl hover:bg-[#1e3d59] hover:text-[#4db6ac]'>{technology.name}</p>
       </div>
        
        
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");