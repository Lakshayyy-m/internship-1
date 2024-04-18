import Image from "next/image";
import React from "react";

const Testimonials = () => {
  return (
    <div className="container bg-second col-10 offset-1 p-5 row gap-4 mt-5">
      <div className="row">
        <Image
          src={"/Images/testimonials.svg"}
          alt="testimonials"
          width={20}
          height={20}
          className="col-1 px-0"
        />
        <span className="col-3 fw-bold px-0">Testimonials</span>
      </div>
      <div className="row">
        In a fast growing and ever changing city like Bangalore, it sometimes
        becomes very difficult to find or connect with like minded people.
        Websites like hobbycue.com is a great service which helps me get in
        touch with, communicate, connect, and exchange ideas with other dancers.
        It also provides the extra benefit of finding products and services that
        I can avail, which I can be assured is going to be of great quality as
        it comes recommended by people of the hobbycue community. To have
        discussions, to get visibility, and to be able to safely explore various
        hobbies and activities in my city, all under one roof, is an excellent
        idea and I highly recommend it.
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <div className="position-relative col-xl-8 col-12 player order-xl-1 order-3">
          <Image src={"/Images/player.svg"} alt="Audio Player" fill />
        </div>
        <div className="position-relative player col-xl-1 col-4 order-xl-2 order-1 offset-1">
          <Image src={"/Images/lady.svg"} alt="lady" fill />
        </div>
        <div className="col-xl-2 col-6 order-2 order-xl-3">
          <div className="row text-color-main fs-6 small">Shubha Nagarajan</div>
          <div className="row text-primary fs-6 small">Classical Dancer</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
