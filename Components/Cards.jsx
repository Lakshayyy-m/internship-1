import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <section className="container p-5">
      <div className="row g-5 gap-4 mb-4">
        <div className="col-xl-5 col-lg-12 border rounded-3 p-5 d-flex flex-column gap-3 offset-xl-1 peopleCard">
          <div className="row d-flex justify-content-start align-items-center peopleCardIcon">
            <Image
              src={"/Images/Group.svg"}
              alt="group"
              width={20}
              height={20}
              className="col-2 "
            />
            <span className="fw-bold col-1  ">People</span>
          </div>
          <div className="row">
            Find a teacher, coach, or expert for your hobby interest in your
            locality. Find a partner, teammate, accompanist or collaborator.
          </div>
          <div className="row">
            <button className="border-main col-xl-3 col-12 py-2 py-xl-0 rounded-3 text-color-main bg-light small">
              Connect
            </button>
          </div>
        </div>
        <div className="col-xl-5 col-lg-12 border rounded-3 p-5 d-flex flex-column gap-3 placeCard">
          <div className="row d-flex justify-content-start align-items-center placeCardIcon">
            <Image
              src={"/Images/place.svg"}
              alt="place"
              width={20}
              height={20}
              className="col-2"
            />
            <span className="fw-bold col-1  ">Place</span>
          </div>
          <div className="row">
            Find a class, school, playground, auditorium, studio, shop or an
            event venue. Book a slot at venues that allow booking through
            hobbycue.
          </div>
          <div className="row">
            <button className="border-main col-xl-3 col-12 py-2 py-xl-0 rounded-3 text-color-main bg-light small">
              Meet up
            </button>
          </div>
        </div>
      </div>
      <div className="row g-5 gap-4  ">
        <div className="col-xl-5 col-lg-12 border rounded-3 p-5 d-flex flex-column gap-3 offset-xl-1 productCard">
          <div className="row d-flex justify-content-start align-items-center productCardIcon ">
            <Image
              src={"/Images/product.svg"}
              alt="product"
              width={20}
              height={20}
              className="col-2"
            />
            <span className="fw-bold col-1  ">Product</span>
          </div>
          <div className="row">
            Find equipment or supplies required for your hobby. Buy, rent or
            borrow from shops, online stores or from community members.
          </div>
          <div className="row">
            <button className="border-main col-xl-3 col-12 py-2 py-xl-0 rounded-3 text-color-main bg-light small">
              Got it
            </button>
          </div>
        </div>
        <div className="col-xl-5 col-lg-12 border rounded-3 p-5 d-flex flex-column gap-3 programCard">
          <div className="row d-flex justify-content-start align-items-center programCardIcon">
            <Image
              src={"/Images/program.svg"}
              alt="program"
              width={20}
              height={20}
              className="col-2"
            />
            <span className="fw-bold col-1  ">Place</span>
          </div>
          <div className="row">
            Find events, meetups and workshops related to your hobby. Register
            or buy tickets online.
          </div>
          <div className="row">
            <button className="border-main col-xl-3 col-12 py-2 py-xl-0 rounded-3 text-color-main bg-light small">
              Attend
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
