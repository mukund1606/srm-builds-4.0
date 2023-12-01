"use client";
import { motion } from "framer-motion";

function AboutComponent() {
  return (
    <div className="flex justify-center bg-background bg-opacity-60 backdrop-blur-sm">
      <div
        className="flex w-[min(100%,_80rem)] flex-col items-center justify-center gap-16 px-4 py-16 md:px-8 lg:px-12"
        id="about"
      >
        <motion.div
          className="flex flex-col gap-8"
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
              SRM Builds 4.0
            </span>{" "}
            Hackathon is here!
          </h1>
          <div className="flex flex-col gap-3 text-medium font-medium md:text-lg">
            <p>
              SRM Builds 4.0 is a 36 hour hackathon, an initiative by CIIE
              (Centre for Innovation, Incubation and Entrepreneurship), SRM
              University Sonepat. Which is being held in Sonepat, India. It is a
              36 Hour Hackathon where participants will build projects to solve
              problems and compete with other participants and innovate for
              society.
            </p>
            <p>
              Our moto is to ignite new ideas from students that would alter and
              revolutionize the present day situation in India. It will give
              students chance to showcase their innovative ideas and compete
              with their peers.
            </p>
            <p>
              SRM Builds 4.0 is an amalgamation of fun and learning where
              spectacular ideas will be displayed, and students will learn and
              feel inspired. Our 36-hour hackathon fosters an environment of
              teamwork and innovation, where students showcase their passion for
              technology, their creative drive, and their ingenious
              problem-solving skills.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-col gap-8"
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
            About{" "}
            <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
              CIIE
            </span>
          </h1>
          <div className="flex flex-col gap-3 text-medium font-medium md:text-lg">
            <p>
              The CIIE (Centre for Innovation, Incubation, and Entrepreneurship)
              serves as an inclusive platform backed by the MHRD ministry. Its
              focus is on fostering innovation, supporting the incubation of
              novel ideas and projects, and promoting entrepreneurship among
              students. The ultimate aim is to guide these concepts toward
              becoming fully developed startups that actively contribute to the
              enhancement of society. CIIE is dedicated in nurturing creativity,
              providing early-stage support for business or project development,
              and cultivating an entrepreneurial mindset.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutComponent;
