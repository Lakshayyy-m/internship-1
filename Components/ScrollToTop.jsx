"use client";
import Image from "next/image";
import React, { useState } from "react";

const ScrollToTop = () => {
  const [img, setImg] = useState("/Images/ScrollToTop.svg");

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setImg("/Images/scrollActive.svg");
    } else if (scrolled <= 300) {
      setImg("/Images/ScrollToTop.svg");
    }
  };
  window.addEventListener("scroll", toggleVisible);

  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Image
      src={img}
      alt="scroll"
      width={52}
      height={52}
      className="position-fixed scrollToTop"
      onClick={scroll}
    />
  );
};

export default ScrollToTop;
