"use client";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "@/app/style";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";
import ServiceCard from "./ServiceCard";

import SectionWrapper from "@/hoc/SectionWrapper";

const About = () => {
  return (
    <>
      <motion.div className="mt-14" variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a web developer, App developer and UI designer based in India. I
        have a passion for web design and love to create for web and mobile
        devices. I have expertise in frameworks like React, Next, Express, and
        React Native. I also have experience in UI/UX designing and have worked
        with Figma and Adobe Photoshop. I have worked with many clients and have
        helped them to achieve their goals. 
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {
            services.map((service, index) => (
                <ServiceCard key={index} index={index } {...service} />
            ))
        }

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
