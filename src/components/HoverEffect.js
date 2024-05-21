import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

const HoverEffect = ({ tab }) => {
  const [hover, setHover] = useState(true);
  return (
    <div>
      <div
        className=" relative w-[70px] h-[25px]  z-10 py-7  items-center text-center align-baseline cursor-pointer text-black/90"
        onMouseEnter={() => setHover(!hover)}
        // onMouseLeave={() => setHover(false)}
      >
        <AnimatePresence>
          {hover && (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
              }}
              className="absolute bottom-5 left-0 right-0  font-semibold"
            >
              {tab}
            </motion.h2>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {hover ? (
            ""
          ) : (
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.3,
              }}
              className="absolute  bottom-5 left-0 right-0 font-semibold"
            >
              {tab}
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HoverEffect;
