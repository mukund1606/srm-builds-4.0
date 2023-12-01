"use client";
import { motion } from "framer-motion";

function MapComponent() {
  return (
    <div className="flex justify-center" id="map">
      <motion.div
        className="mt-4 flex w-[min(100%,_80rem)] flex-col items-center justify-center gap-12 px-4 py-16 md:px-8 lg:px-12"
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
            How to Reach?
          </span>
        </h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13969.108499240656!2d77.127911!3d28.9198218!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dae878d2dcaf1%3A0xdd00179e64a0846f!2sSRM%20University%20(Sonepat%2C%20Haryana)!5e0!3m2!1sen!2sin!4v1701461552742!5m2!1sen!2sin"
          allowFullScreen
          height={600}
          loading="lazy"
          className="w-full rounded-md border-0"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default MapComponent;
