"use client";
import { motion } from "framer-motion";

function AboutComponent() {
  return (
    <div
      className="flex justify-center bg-background bg-opacity-60 backdrop-blur-sm"
      id="about"
    >
      <div className="flex w-[min(100%,_80rem)] flex-col items-center justify-center gap-16 px-4 py-16 md:px-8 lg:px-12">
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
          <div className="flex flex-col gap-3 text-justify text-medium font-medium md:text-lg">
            <p>
              Get ready to immerse yourself in a whirlwind of creativity and
              innovation at SRM BUILDS 4.0, a 36-hour hackathon organized by the
              Center for Innovation, Incubation and Entrepreneurship (CIIE) at
              SRM University, Delhi-NCR. Taking place in Sonepat, India, this
              electrifying event will challenge you to push the boundaries of
              technology and develop groundbreaking solutions that address
              real-world problems.
            </p>
            <p>
              Whether you're a seasoned developer or a budding innovator, SRM
              BUILDS 4.0 provides the perfect platform to showcase your talent,
              test your skills, and make a lasting impact.
            </p>
            <p>
              SRM BUILDS 4.0 is more than just a hackathon; it's a catalyst for
              change, an incubator of groundbreaking ideas, and a launchpad for
              aspiring innovators. Our mission is to ignite the spark of
              innovation within students, empowering them to transform their
              creative visions into tangible solutions that will revolutionize
              the Indian landscape.
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
              CIIE: Where Innovation Meets Impact
            </span>
          </h1>
          <div className="flex flex-col gap-3 text-justify text-medium font-medium md:text-lg">
            <p>
              Backed by the esteemed Ministry of Human Resource Development
              (MHRD), CIIE is dedicated to fostering a culture of creativity,
              nurturing entrepreneurial aspirations, and transforming
              groundbreaking ideas into impactful startups.
            </p>
            <p>
              It serves as an inclusive platform, welcoming students from
              diverse backgrounds and nurturing their entrepreneurial spirit. By
              providing early-stage support, mentorship, and access to
              resources, CIIE empowers aspiring entrepreneurs to navigate the
              challenges of business development and bring their transformative
              ideas to life.
            </p>
            <br />
            <p className="text-justify lg:text-right">
              <strong>
                Empowering Innovation, Incubating Dreams, Igniting
                Entrepreneurship: The CIIE Mission
              </strong>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutComponent;
