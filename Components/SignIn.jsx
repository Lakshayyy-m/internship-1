"use client";
import Image from "next/image";
import React, { useState } from "react";

const SignIn = () => {
  const [isActive, setIsActive] = useState(false);
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState("/Images/eyeOff.svg");

  const handleToggle = () => {
    if (type === "password") {
      setIcon("/Images/eye.svg");
      setType("text");
    } else {
      setIcon("/Images/eyeOff.svg");
      setType("password");
    }
  };
  return (
    <div className="container d-flex flex-column gap-4 justify-content-start small">
      <div className="row d-flex justify-content-start ">
        <button
          className={`col-3 btn fw-bold fs-4 offset-xl-0 offset-3  ${
            isActive ? "inactiveButton" : "activeButton"
          }`}
          onClick={() => setIsActive(false)}
        >
          Sign In
        </button>
        <button
          className={`col-3 btn fw-bold fs-4 ${
            isActive ? "activeButton" : "inactiveButton"
          }`}
          onClick={() => setIsActive(true)}
        >
          Join In
        </button>
      </div>
      <div className="order-xl-1 order-3 d-flex flex-column gap-4">
        <div className="row border-main rounded-3 w-100">
          <button className="btn d-flex justify-content-center align-content-center fw-bold position-relative row ">
            <Image
              src={"/Images/Google.svg"}
              alt="Google"
              width={16}
              height={16}
              className="align-self-center justify-self-left col-2"
            />
            <span className=" col-10">Continue with Google</span>
          </button>
        </div>
        <div className="row border-main rounded-3 w-100">
          <button className="btn d-flex justify-content-center align-content-center fw-bold position-relative row ">
            <Image
              src={"/Images/Facebook.svg"}
              alt="Google"
              width={16}
              height={16}
              className="align-self-center justify-self-left col-2"
            />
            <span className=" col-10">Continue with Facebook</span>
          </button>
        </div>
      </div>
      <div className="row w-100 d-flex position-relative seperator order-2">
        <Image src={"/Images/Seperator.svg"} alt="Connect with us" fill />
      </div>
      <div className="order-xl-3 order-1 d-flex flex-column gap-4">
        <div className="row">
          <input
            type="text"
            className="rounded-2 form-control fs-6 "
            placeholder="Email"
          />
        </div>
        <div className="row position-relative ">
          <input
            type={type}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-2 form-control fs-6 "
            placeholder="Password"
          />
          <span
            class="d-flex justify-content-around align-items-center position-absolute placeEye translate-middle "
            onClick={handleToggle}
          >
            <Image
              className="absolute mr-10"
              alt="eye"
              src={icon}
              width={20}
              height={20}
            />
          </span>
        </div>
        {!isActive ? (
          <>
            <div className="row">
              <div className="col-6 d-flex justify-content-start align-content-center ">
                <input
                  type="checkbox"
                  className="form-check checkBox w-25 h-25"
                />
                <span>Remember me</span>
              </div>
              <div className="col-6  d-flex justify-content-end ">
                <div className="position-relative w-25 lock">
                  <Image
                    src={"/Images/lockIcon.svg"}
                    alt="forgot password"
                    fill
                  />
                </div>
                <span className="fs-6 ">Forgot Password</span>
              </div>
            </div>
            <div className="row">
              <button
                role="button"
                className="mb-4 rounded border-1 fw-bold py-1 bg-light"
              >
                Continue
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="row">
              <div className="col d-flex gap-1 align-items-center ">
                <Image
                  src={"/Images/Rectangle.svg"}
                  alt="password strength"
                  width={50}
                  height={5}
                />
                <Image
                  src={"/Images/Rectangle.svg"}
                  alt="password strength"
                  width={50}
                  height={5}
                />
                <Image
                  src={"/Images/Rectangle.svg"}
                  alt="password strength"
                  width={50}
                  height={5}
                />
              </div>
              <div className="col d-flex justify-content-end fw-light">
                Password Strength
              </div>
            </div>
            <div className="row-cols-2 w-100 small p-0 ">
              By continuing, you agree to our{" "}
              <span className="fw-bold">Terms of Service</span> and{" "}
              <span className="fw-bold">Privacy Policy.</span>
            </div>
            <div className="row">
              <button className="rounded-3 bg-main text-white py-2 mb-5 btn-outline-light border-main">
                Agree and Continue
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
