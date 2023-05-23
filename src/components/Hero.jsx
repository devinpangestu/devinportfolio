import React, { useState } from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { heroMemes } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { random } from "maath";

const HeroCard = ({ index, image, event }) => (
  <Tilt className="xs:w-[250px] w-full grid place-items-center">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full blue-green-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-blue-bg rounded-[20px] px-5 min-h-[200px] flex justify-evenly items-center flex-col"
      >
        <img
          src={image}
          alt="heroMeme"
          className="h-25 w-25 object-contain rounded-[20px]"
          onClick={event}
        />
      </div>
    </motion.div>
  </Tilt>
);
const Shuffle = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  // get random item
  const item = arr[randomIndex];
  return item;
};

const Hero = () => {
  const [imageSrc, setImageSrc] = useState("");

  const handleClick = () => {
    // Generate a random number to select a new image
    // Update the image source based on the random number
    setImageSrc(Shuffle(heroMemes).image);
  };
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[80px] mx-auto max-w-max ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#2c5cf9]" />
          <div className="w-1 sm:h-80 h-40 blue-gradient" />
        </div>
        {/* gradient bulat dan garis */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm <span className="text-[#2c5cf9]">Devin</span>
          </h1>
          <p className={`${styles.heroSubText}mt-2 text-white-100 text-[20px]`}>
            Step into a realm of endless exploration and boundless imagination.{" "}
            <br className="sm:block hidden" />
            Unleash your potential and embark on a transformative journey with
            me!
          </p>
          <div className="mt-5 flex flex-wrap justify-center">
            {
              <HeroCard
                key={`project-1`}
                image={Shuffle(heroMemes).image}
                event={handleClick}
              />
            }
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center mt-20">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 opacity-60">
            <motion.div
              animate={{
                y: [0, 26, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
