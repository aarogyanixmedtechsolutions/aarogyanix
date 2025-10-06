/*
 * Next.js Live Coming Soon Page for AarogyaNIX with Animations
 * Uses Tailwind CSS and Framer Motion (for animation)
 */

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-10-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <main className="min-h-screen bg-[#f9fbfd] text-center flex flex-col items-center justify-center px-4 lg:pt-[80px] md:pt-[40px] pt-[20px]">
      <motion.img
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        src="/logo.svg"
        alt="AarogyaNIX Logo"
        className="mb-4 lg:w-auto md:w-80 w-50"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-sm text-gray-500"
      >
        Reliable Equipment. Trusted Service. Smarter Healthcare.
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="sm:text-4xl text-2xl font-bold md:mt-[100px] mt-[50px] mb-[40px]"
      >
        <span className="text-primary">We’re</span>{" "}
        <span className="text-orange-600">Launching</span>{" "}
        <span className="text-primary">Soon!</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex gap-4  mt-6 text-2xl font-bold text-gray-900"
      >
        <div className="text-center flex flex-col justify-center">
          <p className="inline-block lg:text-[32px] md:text-[26px] text-[14px] mb-4 text-blue-900 font-rajdhani">
            DAYS <span className="float-right ms-2 sm:block hidden">🚧</span>
          </p>
          <div className="flex items-center lg:text-9xl md:text-8xl md:text-6xl sm:text-4xl text-2xl">
            <p className=" sm:me-8 me-4">
              {String(timeLeft.days).padStart(2, "0")}
            </p>
            <p className="flex items-center h-fit">:</p>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center">
          <p className="inline-block lg:text-[32px] md:text-[26px]  text-[14px] mb-4 text-blue-900 font-rajdhani">
            HOURS <span className="float-right ms-2 sm:block hidden">🚧</span>
          </p>
          <div className="flex items-center lg:text-9xl md:text-8xl md:text-6xl sm:text-4xl text-2xl ">
            <p className="sm:mx-8 mx-4">
              {" "}
              {String(timeLeft.hours).padStart(2, "0")}
            </p>
            <p className="flex items-center h-fit">:</p>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center">
          <p className="inline-block lg:text-[32px] md:text-[26px]  text-[14px] mb-4 text-blue-900 font-rajdhani">
            MINUTES <span className="float-right ms-2 sm:block hidden">🚧</span>
          </p>
          <div className="flex items-center lg:text-9xl md:text-8xl md:text-6xl sm:text-4xl text-2xl gap-4">
            <p className="sm:mx-8 mx-4">
              {" "}
              {String(timeLeft.minutes).padStart(2, "0")}
            </p>
            <p className="flex items-center h-fit">:</p>
          </div>
        </div>
        <div className="text-center flex flex-col justify-center">
          <p className="inline-block lg:text-[32px] md:text-[26px]  text-[14px] mb-4 text-blue-900 font-rajdhani">
            SECONDS
          </p>
          <div className="flex items-center lg:text-9xl md:text-8xl md:text-6xl sm:text-4xl text-2xl gap-4">
            <p className=" sm:me-8 me-4">
              {" "}
              {String(timeLeft.seconds).padStart(2, "0")}
            </p>
          </div>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-sm text-gray-600 mt-6 "
      >
        Our official website is on its way. Stay tuned for a smarter way to
        explore our medical equipment solutions.
      </motion.p>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-10 text-xl font-semibold"
      >
        Get In Touch
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4 }}
        className="mt-4 flex flex-col gap-y-8 items-start lg:flex-row gap-4 text-sm items-center justify-center font-bold sm:text-xl text-lg "
      >
        <div className="max-w-[410px] min-w-[320px] w-full">
          <img
            src="/location.svg"
            alt="location"
            className="mb-4 md:size-[64px] size-[52px] mx-auto"
          />
          <p>📍 E-247, Sumel 11 Indian Textile, Nr. Namaste Circle, Shahibag, Ahmedabad, Gujarat - 380004</p>
        </div>
        <div className="max-w-[410px] min-w-[320px] w-full">
          <img
            src="/mobile.svg"
            alt="mobile"
            className="mb-4 md:size-[64px] size-[52px] mx-auto"
          />
          <p>📞 +91 99783 85284</p>
        </div>
        <div className="max-w-[410px] min-w-[320px]  w-full">
          <img
            src="/email.svg"
            alt="email"
            className="mb-4 md:size-[64px] size-[52px] mx-auto"
          />
          <p className="md:text-nowrap text-wrap">📧 info@aarogyanix.com</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6 }}
        className="flex gap-4 mt-6"
      >
        <a href="https://www.linkedin.com/company/aarogyanix" target="_blank" aria-label="LinkedIn" className="hover:opacity-75">
          <img src="/linkedin.svg" alt="LinkedIn" className="md:size-[64px] size-[52px]" />
        </a>
        <a href="#" aria-label="WhatsApp" className="hover:opacity-75">
          <img src="/whatsapp.svg" alt="WhatsApp" className="md:size-[64px] size-[52px]" />
        </a>
        <a href="#" aria-label="Instagram" className="hover:opacity-75">
          <img src="/instagram.svg" alt="Instagram" className="md:size-[64px] size-[52px]" />
        </a>
      </motion.div>

      <footer className="text-xs text-gray-400 mt-10 mb-2">
        © 2025 AarogyaNIX MedTech Solutions. All rights reserved.
        <br />
        Designed by{" "}
        <span className="text-blue-700 font-semibold">Jay Gajera</span> | UI/UX
        Designer
      </footer>
    </main>
  );
}
