import React from "react";
import { appContent } from "./variants";
import { HiCheckCircle } from "react-icons/hi";
import { easeInOut, motion } from "framer-motion";
import { MdAutoGraph, MdOutlineSignalCellularAlt } from "react-icons/md";
import { BsCloudFill } from "react-icons/bs";

const About = () => {
  const anime = {
    initial: { opacity: 0, x: 20 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <div className={appContent({ class: "space-y-20 pb-16" })}>
      <div className="flex gap-16 items-center pb-5">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          src="/images/female.jpg"
          alt="female"
          className="max-w-[550px] aspect-[2/2] rounded-3xl grayscale object-cover"
        />
        <div>
          <h3 className="text-3xl font-bold mb-4">About</h3>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            nisi id lorem blandit consequat. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae nte ipsum.{" "}
          </p>
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={anime}
            transition={{
              ease: "easeOut",
              staggerChildren: 0.1,
              delayChildren: 0.3,
              duration: 0.9,
            }}
          >
            {[1, 2, 3, 4].map((i) => {
              return (
                <motion.div
                  variants={anime}
                  className="flex items-center gap-3 p-3 px-5 bg-white mb-3 rounded-xl max-w-[400px]"
                  style={{
                    boxShadow:
                      "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 #0000",
                  }}
                >
                  <HiCheckCircle className="text-3xl  text-paperColor" />
                  <p className="text-base font-semibold text-black/70">
                    Some Text Here
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }}
        transition={{
          duration: 1,
          ease: easeInOut,
        }}
        className="grid grid-cols-3 gap-6"
      >
        {icon.map((i) => {
          return (
            <div className="flex gap-5">
              <div className="bg-paperColor h-16 w-16 rounded-full flex justify-center items-center text-white">
                {i}
              </div>
              <div>
                <p className="text-xl font-semibold text-black/80 mb-4">
                  Services
                </p>
                <p className="max-w-[250px] mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button className="bg-black/5 text-black/65 p-2 px-5 rounded-full text-sm font-semibold transition-all hover:scale-110 duration-150">
                  Read more
                </button>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default About;

const icon = [
  <MdOutlineSignalCellularAlt className="text-3xl" />,
  <MdAutoGraph className="text-3xl" />,
  <BsCloudFill className="text-3xl" />,
];
