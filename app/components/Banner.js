import React from "react";
//images
import avatar from "../assets/avatar.svg";
//icons
import { FaGithub, FaDribbble, FaYoutube, FaLinkedin } from "react-icons/fa";
//animation type
import { TypeAnimation } from "react-type-animation";
//motion
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[78vh] flex items-center mb-20"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          {/* text */}
          <div className="flex-1 text-center font-secondary lg:text-left ">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-bold leading-[0.8] lg:text-[110px] "
            >
              RICHARD <span>STEPHEN</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-3">I am a </span>
              <TypeAnimation
                sequence={[
                  "Developer",
                  2000,
                  "Designer",
                  2000,
                  "Youtuber",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8  max-w-max mx-auto lg:mx-0 "
            >
              As a seasoned full-stack developer with expertise in Python,
              TypeScript, and JavaScript, I've had the pleasure of working on a
              range of projects spanning web and mobile app development,
              AI-powered solutions, and sophisticated desktop programs. With
              experience designing user-friendly interfaces, implementing
              scalable back-end infrastructure, and conducting comprehensive
              testing, I'm passionate about leveraging technology to solve
              complex problems and deliver high-quality solutions. My skills in
              frameworks such as React.js, Next.js, and Node.js, coupled with my
              proficiency in tools like Git, Linux, and Figma, enable me to
              deliver efficient and scalable solutions to help businesses
              enhance their productivity and user experience. Check out my
              projects to see how I can contribute to your team
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max  gap-x-6 items-center mb-12 mx-auto lg:mx-0 "
            >
              <button className="btn btn-lg">Contact Me</button>
              <a href="#" className="text-gradient btn-link ">
                My Portfolio
              </a>
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0"
            >
              <a href="https://github.com/csr000" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/csr000" target="_blank" rel="noreferrer">
                <FaLinkedin />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[480px] lg:max-w-[700px] -mt-60"
          >
            <Image src={avatar} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
