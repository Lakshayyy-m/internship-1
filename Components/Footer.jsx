import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="row">
        <div className="p-5 d-flex justify-content-between flex-xl-row flex-column gap-5 gap-xl-0">
          <div className="col-2 d-flex flex-column gap-2 small offset-xl-1">
            <span className="fw-bold">HobbyCue</span>
            <span>About Us</span>
            <span>Our Services</span>
            <span>Work With Us</span>
            <span>FAQ</span>
            <span>Contact Us</span>
          </div>
          <div className="col-4 col-xl-2 d-flex flex-column gap-2 small ">
            <span className="fw-bold">How Do I</span>
            <span>Sign Up</span>
            <span>Add a Listing</span>
            <span>Claim Listing</span>
            <span>Post a Query</span>
            <span>Adding a Blog Post</span>
            <span>Other Queries</span>
          </div>
          <div className="col-xl-2 col-4 d-flex flex-column gap-2 small ">
            <span className="fw-bold">Quick Links</span>
            <span>Listings</span>
            <span>Blog Posts</span>
            <span>Shop / Store</span>
            <span>Community</span>
          </div>
          <div className="col-xl-3 col-12 d-flex flex-column justify-content-between ">
            <div className="row mb-5">
              <div className="row mb-3">
                <span className="fw-bold">Social Media</span>
              </div>
              <div className="row col-xl-10 col-12">
                <div className="position-relative col-xl-10 p-0 social col-12">
                  <Image src={"/Images/social.svg"} alt="social links" fill />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="row mb-3">
                <span className="fw-bold">Invite Friends</span>
              </div>
              <div className="row">
                <div className="d-flex">
                  <input
                    type="text"
                    placeholder="Email ID"
                    className="rounded-start-3 border p-2 px-4 col-11"
                  />
                  <button className="border rounded-end-3 bg-main px-2 text-light small ">
                    Invite
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-col-12 d-flex justify-content-center align-items-center py-3 bg-second">
        &copy; Purple Cues Private Limited
      </div>
    </>
  );
};

export default Footer;
