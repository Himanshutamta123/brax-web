import React from "react";
import { appContent } from "./variants";
import { motion } from "framer-motion";

const Head = () => {
  const animV = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };
  return (
    <div className="bg-[#ffffff] h-[100vh]">
      <div className={appContent()}>
        <div className="w-[100%] flex h-[100vh] items-center ">
          <motion.div
            initial="initial"
            animate="animate"
            variants={animV}
            transition={{
              ease: "easeOut",
              staggerChildren: 0.1,
              delayChildren: 0.3,
              duration: 0.8,
            }}
            className=" "
          >
            <motion.h2
              variants={animV}
              className="text-7xl font-bold text-black/90 mb-2"
            >
              Select a color
            </motion.h2>
            <motion.h2
              variants={animV}
              className="text-7xl font-bold text-black/90 mb-2"
            >
              That Matches
            </motion.h2>
            <motion.h2
              variants={animV}
              className="text-7xl font-bold text-black/90 mb-7"
            >
              Your Brand.
            </motion.h2>
            <motion.p variants={animV} className="max-w-[550px]  mb-14">
              Our team created this tool to help users test color designs for
              their new website. Simply click the color picker button on the
              right to try it out.
            </motion.p>
            <motion.div variants={animV}>
              <button className="bg-paperColor text-white font-medium p-3 px-6 rounded-full hover:scale-110 transition-all duration-150">
                Call To Action
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Head;
