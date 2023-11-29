"use client";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

type TrackData = {
  title: string;
  description: string;
  image: string;
};

const tracks: TrackData[] = [
  {
    title: "Blockchain",
    image:
      "https://blogs.iadb.org/caribbean-dev-trends/wp-content/uploads/sites/34/2017/12/Blockchain1.jpg",
    description: "Blockchain is a distributed, decentralized, public ledger.",
  },
  {
    title: "AI and DATA",
    image:
      "https://talentsprint.com/course/ai-machine-learning-iiit-hyderabad/images/header-graphic-aiml.webp",
    description:
      "Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.",
  },
  {
    title: "Healthcare",
    image:
      "https://www.sattva.co.in/wp-content/uploads/2022/12/Untitled-1200-%C3%97-630-px.png",
    description:
      "Healthcare is the maintenance or improvement of health via the prevention, diagnosis, treatment, recovery, or cure of disease, illness, injury, and other physical and mental impairments in people.",
  },
  {
    title: "AR/VR",
    image:
      "https://www.technology-innovators.com/wp-content/uploads/2023/05/The-Future-of-ARVR-Transforming-the-Way-We-See-and-Interact-with-the-World-min.jpg",
    description:
      "Augmented reality (AR) is an interactive experience of a real-world environment where the objects that reside in the real world are enhanced by computer-generated perceptual information, sometimes across multiple sensory modalities, including visual, auditory, haptic, somatosensory and olfactory.",
  },
  {
    title: "Open Innovation",
    image:
      "https://cdn-facpg.nitrocdn.com/OusIzrOrgAhkXofPVQIPbIcDPXRbbpOc/assets/images/optimized/rev-524caaf/edison365.com/wp-content/uploads/2020/05/open-innovation-funnel-2.png",
    description:
      "Open innovation is a business management model for innovation that promotes collaboration with people and organizations outside the company.",
  },
  {
    title: "Cloud",
    image:
      "https://www.cybersuccess.biz/wp-content/uploads/2022/06/Explore-The-Essential-Characteristics-of-Cloud-Computing.webp",
    description:
      "Cloud computing is the on-demand availability of computer system resources, especially data storage (cloud storage) and computing power, without direct active management by the user.",
  },
  {
    title: "Cyber Security",
    image:
      "https://cdn.sanity.io/images/tlr8oxjg/production/bdb77d61d1ef7dc459bf17ae010658476c00d420-1456x816.png",
    description:
      "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.",
  },
  {
    title: "IOT",
    image:
      "https://www.simplilearn.com/ice9/free_resources_article_thumb/The_Top_35_IoT_Terms.jpg",
    description:
      "The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the Internet.",
  },
  {
    title: "Education",
    image:
      "https://digitallearning.eletsonline.com/wp-content/uploads/2018/12/Effective-education-system-%E2%80%93-A-must-for-nation-building.jpg",
    description:
      "Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, morals, beliefs, and habits.",
  },
];

function TracksComponent() {
  return (
    <div className="flex justify-center bg-background">
      <motion.div
        className="mt-4 flex min-h-screen w-[min(100%,_70rem)] flex-col items-center justify-center gap-12 px-4 py-24 md:px-8 lg:px-12"
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
          <div className="grid grid-cols-1 gap-3 text-medium font-medium md:grid-cols-2 md:text-lg lg:grid-cols-3">
            {tracks.map((track, index) => (
              <TrackElement data={track} key={index} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default TracksComponent;

function TrackElement({ data }: { data: TrackData }) {
  return (
    <Card
      shadow="sm"
      isPressable
      isFooterBlurred
      className="group relative w-full hover:scale-105"
      radius="lg"
    >
      <CardBody className="overflow-visible p-0">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={data.title}
          className="aspect-[12/9] w-full object-cover"
          src={data.image}
        />
        <div className="absolute inset-0 top-0 z-10 flex justify-center bg-background bg-opacity-80 px-3 py-6 text-sm opacity-0 drop-shadow-lg transition-all duration-500 group-hover:opacity-100">
          {data.description}
        </div>
      </CardBody>
      <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 bg-background bg-opacity-80 py-1 shadow-small before:rounded-xl before:bg-black">
        <p className="text-medium">{data.title}</p>
      </CardFooter>
    </Card>
  );
}
