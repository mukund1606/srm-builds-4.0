"use client";
import { motion } from "framer-motion";

function ScheduleComponent() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="flex w-[min(100%,_80rem)] flex-col items-center justify-center gap-12 px-4 py-16 md:px-8 lg:px-12"
        id="schedule"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <h1 className="text-center text-4xl font-extrabold md:text-5xl">
          <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
            Schedule
          </span>
        </h1>
        <div className="flex h-[12rem] items-center justify-center rounded-md text-3xl font-bold opacity-60">
          Coming Soon
        </div>
      </motion.div>
    </div>
  );
}

export default ScheduleComponent;
