import Image from "next/image";
import React from "react";

const GetStarted = () => {
  return (
    <div className="pt-5 px-5 offset-1">
      <div className="row">
        <div className="col-xl-4 col-8  position-relative player">
          <Image src={"/Images/yourHobby.svg"} alt="getStarted" fill />
        </div>
      </div>
      <div className="row">
        <button
          className="col-xl-2 col-4 bg-main rounded-3 border-main text-light py-1 small mb-5"
          role="button"
        >
          Get Started
        </button>
      </div>
      <div className="row">
        <div className="col-10 position-relative people">
          <Image src={"/Images/people2.svg"} alt="People" fill />
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
