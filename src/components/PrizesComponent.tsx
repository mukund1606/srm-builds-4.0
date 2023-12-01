"use client";
import { motion } from "framer-motion";
import { type CardData, CardElement } from "./CardElement";

const prizes: CardData[] = [
  {
    image: "/prizes/1st.png",
    title: "1st Place - $120",
    description: "1st Prize of $120(₹10000)",
  },
  {
    image: "/prizes/2nd.png",
    title: "2nd Place - $60",
    description: "2nd Prize of $60(₹5000)",
  },
  {
    image: "/prizes/3rd.png",
    title: "3rd Place - $36",
    description: "3rd Prize of $36(₹3000)",
  },
  {
    image: "/prizes/goodies.png",
    title: "Best Female Team",
    description: "Goodies and Swags for Best All Female Team",
  },
  {
    image: "/prizes/goodies.png",
    title: "Best Beginners Team",
    description: "Goodies and Swags for Best Beginners Teas",
  },
];

const sponsorTracks: CardData[] = [
  {
    image: "/prizes/sponsors/polygon.png",
    title: "Ethereum Track",
    description: "Best Hack Built on Ethereum - $150(₹11000)",
  },
  {
    image: "/prizes/sponsors/polygon.png",
    title: "Ethereum + Polygon Track",
    description: "Best Hack Built on Ethereum + Polygon - $200(₹15000)",
  },
  {
    image: "/prizes/sponsors/replit.png",
    title: "Replit Track",
    description: "Winning Project Deployed on Replit: $50(₹4000)",
  },
];

function PrizesComponent() {
  return (
    <div className="flex justify-center bg-background bg-opacity-40 backdrop-blur-sm">
      <motion.div
        className="mt-4 flex w-[min(100%,_80rem)] flex-col items-center justify-center gap-16 px-4 py-16 md:px-8 lg:px-12"
        id="prizes"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 },
        }}
      >
        <div className="flex flex-col gap-8">
          <h1 className="text-center text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
              Prizes
            </span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-3 text-medium font-medium md:text-lg">
            {prizes.map((prize, index) => (
              <div key={index} className="w-full md:w-[49%] lg:w-[32%]">
                <CardElement data={prize} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-center text-4xl font-extrabold md:text-5xl">
              <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
                Sponsor Tracks
              </span>
            </h1>
            <h4 className="text-md w-full text-center font-medium opacity-50 md:text-lg">
              Sponsors Tracks will keep on updating, Stay Tuned!
            </h4>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 text-medium font-medium md:text-lg">
            {sponsorTracks.map((prize, index) => (
              <div key={index} className="w-full md:w-[49%]">
                <CardElement data={prize} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PrizesComponent;
