"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "@/app/style";
import { github } from "@/assets";
import SectionWrapper from "@/hoc/SectionWrapper";
import { fadeIn, textVariant } from "@/utils/motion";
import Image from "next/image";

// import Project after adding them to the projects array

const Work = () => {
  const projects = [1,2,2];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Here are some of my projects. I am always working on something new, so
          check back often!
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <Tilt 
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <Image src={github} alt="github" className="w-full h-full object-cover rounded-2xl" />
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                      <div onClick={() => window.open(projects.source_code_link,"_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                        <Image src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
                      </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-secondary text-[20px] font-bold">Project Name</h3>
                    <p>Project Description</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {
                    project?.tags?.map((tag, index) => (
                      <p key={tag.name} className={'text-[14px] ${tag.color}'} >
                        #{tag.name}
                      </p>
                    ))
                  }
                </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Work, "work");
