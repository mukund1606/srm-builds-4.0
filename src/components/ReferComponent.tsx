"use client";
import { Card, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

function ReferComponent() {
  return (
    <div className="flex justify-center bg-background">
      <motion.div
        className="mt-4 flex w-[min(100%,_70rem)] flex-col items-center justify-center gap-12 px-4 py-24 md:px-8 lg:px-12"
        id="refer"
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
              Refer and Earn
            </span>
          </h1>
          <ul className="flex list-disc flex-col gap-3 pl-4 text-medium font-medium md:text-lg">
            <li>
              If you cross 100+ registration from your referral link then you
              are eligible for the contest.
            </li>
            <li>
              Go to your Hackathon Dashboard and you will get one referral link,
              share the link in your socials.
            </li>
            <li>
              Depending on the registration and participation ratio winner will
              announce.
            </li>
            <li>
              Share the referral link in your circle / professional network and
              encourage them to register for the event.
            </li>
          </ul>
          <div className="grid grid-cols-1 gap-3 text-medium font-medium md:grid-cols-3 md:text-lg">
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

export default ReferComponent;
