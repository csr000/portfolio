import React from "react";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
//img
import Img2 from "../assets/portfolio-img2.png";
import Image from "next/image";

function ProjectCard({ project }) {
  console.log(project);
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
          src={convertString(project.mainImage.asset._ref)}
          width={500}
          height={500}
          alt=""
        />
        {/* pretitle */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
          {/* <span className="text-gradient ">{project.categories}</span> */}
        </div>
        {/* title */}
        <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
          <span className="text-3xl text-white">{project.name}</span>
        </div>
      </div>
    </motion.div>
  );
}

function convertString(inputString) {
  // Split the input string into two parts using the '-' separator
  const parts = inputString.split("-");

  // Extract the required part and replace 'x' with a dot
  // const imageName = parts[1].replace("x", ".");

  // Extract the file extension from the original string
  const fileExtension = parts[3];

  // Concatenate the image name and file extension
  const outputString = `${parts[1]}-${parts[2]}.${fileExtension}`;

  return "https://cdn.sanity.io/images/hgb302bo/production/" + outputString;
}

export default ProjectCard;

// https://cdn.sanity.io/images/hgb302bo/production/image-8e622260263332f9f8247a499016b33a1d1e1da1-88x59-png
// https://cdn.sanity.io/images/hgb302bo/production/8e622260263332f9f8247a499016b33a1d1e1da1-88x59.png
