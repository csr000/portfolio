import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//img
import Img2 from "../assets/portfolio-img2.png";
import Image from "next/image";

function ProjectCard() {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col my-6 w-[23rem] h-52"
    >
      {/* image */}
      <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
        {/* overlay */}
        <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
        {/* img */}
        <Image
          className="group-hove:scale-125 transition-all duration-500"
          src={Img2}
          alt=""
        />
        {/* pretitle */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          <span className="text-gradient ">UI/UX Design</span>
        </div>
        {/* title */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-3xl text-white">Project Title</span>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
