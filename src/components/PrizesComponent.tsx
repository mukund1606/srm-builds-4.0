"use client";
import { motion } from "framer-motion";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

function PrizesComponent() {
  return (
    <div className="flex justify-center bg-background">
      <motion.div
        className="mt-4 flex min-h-screen w-[min(100%,_70rem)] flex-col items-center justify-center gap-12 px-4 py-24 md:px-8 lg:px-12"
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
        <div className="flex flex-col gap-10">
          <h1 className="text-center text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
              Prizes
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-3 text-medium font-medium md:grid-cols-2 md:text-lg lg:grid-cols-4">
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none"
            >
              <Image
                alt="1st Prize"
                className="aspect-square object-cover"
                src="/prizes/1st.png"
              />
              <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  1st Prize - ₹1ok
                </p>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none"
            >
              <Image
                alt="1st Prize"
                className="aspect-square object-cover"
                src="/prizes/2nd.png"
              />
              <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  2nd Prize - ₹5k
                </p>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none"
            >
              <Image
                alt="1st Prize"
                className="aspect-square object-cover"
                src="/prizes/3rd.png"
              />
              <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  3rd Prize - ₹3 k
                </p>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <Image
                alt="1st Prize"
                className="aspect-square object-cover"
                src="/prizes/goodies.png"
              />
              <CardFooter className="absolute bottom-1 z-10 ml-1 w-[calc(100%_-_8px)] justify-between overflow-hidden rounded-large border-1 border-white/20 py-1 shadow-small before:rounded-xl before:bg-white">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Goodies and Swags
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h1 className="text-center text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
              Sponsor Tracks
            </span>
          </h1>
          <div className="grid grid-cols-1 gap-3 text-medium font-medium md:grid-cols-2 md:text-lg lg:grid-cols-4">
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
            <Card
              isFooterBlurred
              radius="lg"
              className="overflow-visible border-none "
            >
              <CardBody className="flex aspect-square items-center justify-center">
                <p className="w-full bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center text-large font-extrabold text-transparent">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </CardBody>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PrizesComponent;
