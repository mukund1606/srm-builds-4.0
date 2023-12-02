"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Image } from "@nextui-org/react";

const collapsedAspectRatio = 3 / 4;
const fullAspectRatio = 3 / 2;
const margin = 12;
const gap = 2;

type Props = {
  images: string[];
};

export default function CarouselComponent(props: Props) {
  const { images } = props;
  const [index, setIndex] = useState(0);
  const [isForward, setIsForward] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isForward) {
        setIndex((index) => index + 1);
        if (index + 1 === images.length - 1) {
          setIsForward(false);
        }
      } else {
        setIndex((index) => index - 1);
        if (index - 1 === 0) {
          setIsForward(true);
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <motion.div
      className="flex min-h-[calc(100vh-4.1rem)] w-full flex-col items-center justify-center gap-8 bg-background bg-opacity-30 px-4 py-16 backdrop-blur-sm md:px-8 lg:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="text-center text-4xl font-extrabold md:text-5xl">
        <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
          Glimpses
        </span>
      </h1>
      <MotionConfig transition={{ duration: 1.5, ease: [0.32, 0.72, 0, 1] }}>
        <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
          <div className="relative overflow-hidden rounded-lg">
            <motion.div
              animate={{ x: `-${index * 100}%` }}
              className="flex w-full"
            >
              {images.map((image, i) => (
                <motion.img
                  key={image}
                  src={image}
                  animate={{ opacity: i === index ? 1 : 0.3 }}
                  className="aspect-[3/2] min-w-full object-cover lg:aspect-video"
                />
              ))}
            </motion.div>

            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => {
                    setIndex(index - 1);
                    if (index - 1 === 0) {
                      setIsForward(true);
                    }
                  }}
                >
                  <ChevronLeftIcon className="h-6 w-6 text-black" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                  onClick={() => {
                    setIndex(index + 1);
                    if (index + 1 === images.length - 1) {
                      setIsForward(false);
                    }
                  }}
                >
                  <ChevronRightIcon className="h-6 w-6 text-black" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-2 flex h-24 justify-center overflow-hidden">
            <motion.div
              initial={false}
              animate={{
                x: `-${
                  index * 100 * (collapsedAspectRatio / fullAspectRatio) +
                  margin +
                  index * gap
                }%`,
              }}
              style={{
                aspectRatio: fullAspectRatio,
                gap: `${gap}%`,
              }}
              className="flex"
            >
              {images.map((image, i) => (
                <motion.button
                  onClick={() => {
                    setIndex(i);
                    if (i === 0) {
                      setIsForward(true);
                    } else if (i === images.length - 1) {
                      setIsForward(false);
                    }
                  }}
                  initial={false}
                  whileHover={{ opacity: 1 }}
                  animate={i === index ? "active" : "inactive"}
                  variants={{
                    active: {
                      aspectRatio: fullAspectRatio,
                      marginLeft: `${margin}%`,
                      marginRight: `${margin}%`,
                      opacity: 1,
                    },
                    inactive: {
                      aspectRatio: collapsedAspectRatio,
                      marginLeft: 0,
                      marginRight: 0,
                      opacity: 0.5,
                    },
                  }}
                  className="shrink-0"
                  key={image}
                >
                  <Image src={image} className="h-full object-cover" />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </MotionConfig>
    </motion.div>
  );
}
