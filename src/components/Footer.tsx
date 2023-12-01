"use client";
import { motion } from "framer-motion";
import {
  DiscordIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  WhatsappIcon,
  XIcon,
} from "./icons/icons";
import { Button, Image, Link } from "@nextui-org/react";

function Footer() {
  return (
    <>
      <div
        className="flex justify-center bg-background bg-opacity-40 backdrop-blur-sm"
        id="footer"
      >
        <div className="w-[min(100%,_85rem)]">
          <motion.div
            className="grid w-full justify-center gap-12 px-4 py-4 md:flex md:justify-between md:px-8 lg:px-12"
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
              <h1 className="text-center text-2xl font-extrabold md:text-left md:text-3xl">
                <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <div className="flex flex-wrap justify-center gap-3 md:justify-start">
                <Button
                  as={Link}
                  isIconOnly
                  color="secondary"
                  className="hover:bg-primary hover:text-white"
                  href="mailto:ciie@srmuniversity.ac.in"
                  target="_blank"
                >
                  <MailIcon />
                </Button>
                <Button
                  as={Link}
                  isIconOnly
                  color="secondary"
                  className="hover:bg-primary hover:text-white"
                  href="https://twitter.com/ciiesrmuh"
                  target="_blank"
                >
                  <XIcon />
                </Button>
                <Button
                  as={Link}
                  isIconOnly
                  color="secondary"
                  className="hover:bg-primary hover:text-white"
                  href="https://www.facebook.com/CIIE.SRMUH"
                  target="_blank"
                >
                  <FacebookIcon />
                </Button>
                <Button
                  as={Link}
                  isIconOnly
                  color="secondary"
                  className="hover:bg-primary hover:text-white"
                  href="https://chat.whatsapp.com/BhAcacvyWAw09iHvgNkguO"
                  target="_blank"
                >
                  <WhatsappIcon />
                </Button>
                <Button
                  as={Link}
                  isIconOnly
                  color="secondary"
                  className="hover:bg-primary hover:text-white"
                  href="https://www.linkedin.com/company/ciie-srmuh"
                  target="_blank"
                >
                  <LinkedinIcon />
                </Button>
                <Button
                  as={Link}
                  isIconOnly
                  color="secondary"
                  className="hover:bg-primary hover:text-white"
                  href="https://discord.gg/mbTnAbNXbS"
                  target="_blank"
                >
                  <DiscordIcon />
                </Button>
                <Button
                  as={Link}
                  isIconOnly
                  color="secondary"
                  className="hover:bg-primary hover:text-white"
                  href="https://instagram.com/ciie.srmuh"
                  target="_blank"
                >
                  <InstagramIcon />
                </Button>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-col gap-8">
                <h1 className="text-center text-2xl font-extrabold md:text-left md:text-3xl">
                  <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-transparent">
                    Organizing Body
                  </span>
                </h1>
                <div className="grid justify-center gap-2 md:flex md:justify-start">
                  <Link
                    // href="#"
                    // target="_blank"
                    className="justify-center rounded-md bg-white p-1"
                  >
                    <Image
                      src="mhrd.png"
                      radius="none"
                      className="max-h-24 w-auto"
                    />
                  </Link>
                  <Link
                    // href="#"
                    // target="_blank"
                    className="justify-center rounded-md bg-white p-1"
                  >
                    <Image
                      src="ciie.png"
                      radius="none"
                      className="max-h-24 w-auto"
                    />
                  </Link>
                  <Link
                    href="https://www.srmuniversity.ac.in/"
                    target="_blank"
                    className="justify-center rounded-md bg-white p-1"
                  >
                    <Image
                      src="srmuh.png"
                      radius="none"
                      className="max-h-24 w-auto"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex justify-center gap-12 border-t-1 border-primary-500 border-opacity-30 bg-background bg-opacity-40 px-4 py-2 backdrop-blur-sm md:justify-end  md:px-8 lg:px-12">
        <h1 className="text-md text-center font-semibold md:text-left md:text-lg">
          Designed and Developed by{" "}
          <Link
            href="https://github.com/mukund1606"
            target="_blank"
            className="text-md bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-center font-semibold text-transparent md:text-left md:text-lg"
          >
            Mukund Mittal
          </Link>
        </h1>
      </div>
    </>
  );
}

export default Footer;
