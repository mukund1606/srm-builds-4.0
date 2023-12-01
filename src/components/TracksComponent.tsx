"use client";
import { motion } from "framer-motion";
import { type CardData, CardElement } from "./CardElement";

const tracks: CardData[] = [
  {
    title: "Web3 & Blockchain",
    image: "/tracks/blockchain.png",
    description:
      "Dive into the world of decentralized technologies and explore the potential of blockchain in revolutionizing industries.",
  },
  {
    title: "Social Good",
    image: "/tracks/social.png",
    description:
      "Channel your skills towards projects with a positive impact on society, addressing real-world issues and contributing to social change.",
  },
  {
    title: "Open Innovation",
    image: "/tracks/openinnovation.png",
    description:
      "Embrace the spirit of open collaboration, where diverse ideas and perspectives come together to create innovative solutions.",
  },
  {
    title: "FinTech",
    image: "/tracks/fintech.png",
    description:
      "Unleash your creativity in the financial technology landscape, developing solutions that redefine the way we handle transactions, investments, and financial services.",
  },
  {
    title: "EdTech",
    image: "/tracks/edtech.png",
    description:
      "Explore the intersection of technology and education, devising tools and platforms that enhance learning experiences and accessibility.",
  },
  {
    title: "AR/VR",
    image: "/tracks/vr.png",
    description:
      "Immerse yourself in the world of augmented and virtual reality, pushing the boundaries of what's possible in entertainment, education, and beyond.",
  },
];

function TracksComponent() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="mt-4 flex w-[min(100%,_80rem)] flex-col items-center justify-center gap-12 px-4 py-16 md:px-8 lg:px-12"
        id="tracks"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <div className="flex flex-col gap-10">
          <h1 className="text-center text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
              Tracks
            </span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-medium font-medium md:text-lg">
            {tracks.map((track, index) => (
              <div key={index} className="w-full md:w-[49%] lg:w-[32%]">
                <CardElement data={track} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TracksComponent;
