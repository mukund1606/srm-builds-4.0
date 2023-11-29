"use client";
import { Button, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function HeroComponent() {
  return (
    <>
      <div className="fixed top-0 -z-10 h-screen w-full bg-red-100 opacity-10"></div>
      <motion.div
        className="flex min-h-[calc(100vh-4.1rem)] w-full flex-col items-center justify-center gap-4 px-4 py-24 md:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <span className="flex h-40 w-80 items-center justify-center rounded-md border text-3xl font-bold">
          Logo
        </span>
        <CountDown />
        <div className="flex gap-2">
          <Button
            as={Link}
            href="#tracks"
            color="primary"
            variant="bordered"
            size="md"
            className="font-bold md:text-lg"
          >
            Problem Statements
          </Button>
          <Button
            as={Link}
            href="#map"
            color="secondary"
            variant="flat"
            size="md"
            className="font-bold md:text-lg"
          >
            How to Reach
          </Button>
        </div>
        <span className="text-center text-medium font-bold md:text-2xl lg:text-3xl">
          December 9th and 10th @ SRM University Sonepat, Delhi-NCR
        </span>
      </motion.div>
    </>
  );
}

export default HeroComponent;

function CountDown() {
  const date = new Date(Date.UTC(2023, 11, 8, 18, 30, 0));
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function updateCountDown() {
    const now = new Date();
    const diff = date.getTime() - now.getTime();
    const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor(
      (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
    setDays(daysLeft);
    setHours(hoursLeft);
    setMinutes(minutesLeft);
    setSeconds(secondsLeft);
  }

  useEffect(() => {
    updateCountDown();
    const interval = setInterval(() => {
      updateCountDown();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="bg-gradient-to-r from-[#58ba92] to-[#2faa79] bg-clip-text text-3xl font-extrabold text-transparent md:text-5xl">
      {days}d:{hours}h:{minutes}m:{seconds}s
    </span>
  );
}
