import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <div className="relative w-full h-screen flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-around p-4 md:py-48 h-screen"
          >
            <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl md:my-8 my-20">
              Projects
            </h3>

            <motion.img
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project.image).url()}
              alt=""
              width="350"
              height="450"
              className="mr-4 md:mr-0 rounded-lg md:w-[500px] md:h-[380px]"
            />

            <div className="space-y-10 px-0 md:px-10 max-w-6xl md:pb-4">
              <h4 className="text-xl md:text-2xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} Of {projects.length} :
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center justify-around md:px-24 rounded-full">
                {project?.technologies.map((technology) => (
                  <motion.img
                    key={technology._id}
                    height={50}
                    width={50}
                    src={urlFor(technology.image).url()}
                    alt=""
                    className="rounded-full w-8 h-8 md:w-14 md:h-14"
                  />
                ))}
              </div>

              <p className="text-lg py-4 px-2 leading-relaxed text-center md:mx-16">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
