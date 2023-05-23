import {
  Box,
  Container,
  Container2,
  Row,
  Column,
  FooterLinkedin,
  FooterInstagram,
  Heading,
} from "./FooterStyles";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import React, { useRef, useState } from "react";
import { FooterWrapper } from "../hoc";
const Footer = () => {
  return (
    <div className={`mt-12 flex lg:flex-row flex-col-reverse justify-center `}>
      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h1
          className={`${styles.sectionSubText} text-xl w-24 min-w-full rounded-2xl violet-gradient`}
          style={{
            fontSize: "12px",
            textAlign: "center",
            marginTop: "-50px",
          }}
        >
          Made by Devin Pangestu 💞
        </h1>
        <Heading>Also Check my Profile</Heading>
        <Container2 className={` ${styles.paddingX} flex flex-row gap-10 `}>
          <FooterLinkedin
            href="https://www.linkedin.com/in/devinpangestu"
            className="justify-center grid-rows-none"
          >
            <span>
              <i className="fa-brands fa-linkedin-in"></i>
            </span>
          </FooterLinkedin>
          <FooterInstagram
            href="https://www.instagram.com/devinpangestu5/"
            className="hover:text-rose-500"
          >
            <span>
              <i className="fa-brands fa-instagram"></i>
            </span>
          </FooterInstagram>
        </Container2>
      </motion.div>
    </div>
  );
};
export default FooterWrapper(Footer, "footer");
