import React from "react";
import { appContent } from "./variants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className={appContent({ class: "py-20 flex gap-5 items-center" })}>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
        >
          <h3 className="text-3xl font-bold mb-4">Contact</h3>
          <p className="mb-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            nisi id lorem blandit consequat. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae nte ipsum.{" "}
          </p>
          <button className="p-3 px-6 rounded-full bg-paperColor text-white hover:scale-110 transition-all duration-150">
            Call to Action
          </button>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{
            duration: 0.9,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <img
            src="/images/male-pic.jpg"
            alt="female"
            className="max-w-[550px] aspect-[6/4] rounded-3xl grayscale object-cover"
          />
          <div className="absolute -right-[10%] top-[25%]  shadow-xl max-w-[150px] aspect-[2/2] pt-5 p-3  bg-white rounded-lg">
            <img src="/images/award.webp" alt="award" className="" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
