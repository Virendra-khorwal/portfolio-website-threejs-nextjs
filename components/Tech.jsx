"use client";

import SectionWrapper from "@/hoc/SectionWrapper";
import { technologies } from "@/constants";
import { BallCanvas } from "@/components/canvas";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div key={technology.name} className="w-28 h-28">
          <BallCanvas icon={technology.icon.src} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
