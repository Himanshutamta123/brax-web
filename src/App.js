import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import About from "./components/About";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import SelectColor from "./components/SelectColor";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App bg-[#ffffff] relative overflow-hidden">
      <Navbar />
      <Head />
      <About />
      <Contact />
      <motion.div
        className="text-white bg-paperColor absolute top-[10%] right-0 p-2 px-3 cursor-pointer"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        onClick={() => setOpen(true)}
      >
        Select color{" "}
      </motion.div>
      <div>{open && <SelectColor open={open} setOpen={setOpen} />}</div>
    </div>
  );
}

export default App;
