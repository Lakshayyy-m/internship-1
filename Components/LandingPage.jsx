"use client";

import Image from "next/image";
import React from "react";
import "./LandingPage.css";
import SignIn from "./SignIn";
import { useSelector } from "react-redux";

const LandingPage = () => {
  const currentState = useSelector((state) => state.isOpen);

  return !currentState ? (
    <div className="container pt-5 h-100 ">
      <div className="row py-5 px-3 h-100 pb-0 pe-5 ">
        <div className="col-xl-7 col-lg-10 d-flex flex-column gap-3 fw-light h-100">
          <div className="col-10 player position-relative">
            <Image src={"/Images/ExploreText.svg"} alt="" fill />
          </div>
          <p className="">
            Sign-in to interact with a community of fellow hobbyists and an
            eco-system of experts, teachers, suppliers, classes, workshops, and
            places to practice, participate or perform. Your hobby may be about
            visual or performing arts, sports, games, gardening, model making,
            cooking, indoor or outdoor activities…
          </p>
          <p className="">
            If you are an expert or a seller, you can Add your Listing and
            promote yourself, your students, products, services or events. Hop
            on your hobbyhorse and enjoy the ride.
          </p>
          <div className="position-relative w-100  p-5 peopleImage my-5 d-none d-xl-block ">
            <Image src={"/Images/People.svg"} alt="Poeple" fill />
          </div>
        </div>
        <div className="col-xl-5 col-lg-12 d-flex justify-content-center align-items-center ">
          <SignIn />
        </div>
        <div className="position-relative w-100  p-5 peopleImage my-5 d-block d-xl-none ">
          <Image src={"/Images/People.svg"} alt="Poeple" fill />
        </div>
      </div>
    </div>
  ) : (
    <SignIn />
  );
};

export default LandingPage;
