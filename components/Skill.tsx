import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft: boolean;
};

const Skill = ({ directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src="https://avatars.githubusercontent.com/u/17177659?s=280&v=4"
      />
    </div>
  );
};

export default Skill;
