import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const SelectColor = ({ open, setOpen }) => {
  const changeColor = (i) => {
    document.documentElement.style.setProperty("--paper-color", i);
    setOpen(false);
  };
  return (
    <AnimatePresence>
      {open && (
        <div className="">
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            transition={{
              delay: 0.2,
              ease: "easeInOut",
              duration: 0.5,
            }}
            className="bg-white shadow-lg top-0 right-0 bottom-0 z-20 absolute h-full"
          >
            <div className="flex justify-end">
              <button
                className="p-2 w-10 h-10 rounded-md bg-black m-3 text-white  "
                onClick={() => setOpen(false)}
              >
                X
              </button>
            </div>
            <div className="p-3 pt-20 ">
              <p className="text-xl font-semibold mb-3">Filter</p>
              <p className="font-semibold opacity-75">
                Select a button color below
              </p>
              <div className="h-0.5 w-full bg-black/80 mb-5"></div>
              <div className="grid grid-cols-3 gap-5">
                {colors.map((col) => {
                  return (
                    <button
                      className={`bg-[${col}] p-2 px-4 rounded-full text-white`}
                      onClick={() => changeColor(col)}
                    >
                      Pick Color
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SelectColor;

const colors = [
  "#30d6db",
  "#46de3e",
  "#000",
  "#d14358",
  "#9fd143",
  "#b152cc",
  "#4e77ad",
  "#0b64d9",
  "#c77b58",
  "#40c290",
];
