"use client";

import { singInAction } from "@/store/menu-open-state";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const dispatch = useDispatch();
  const currentState = useSelector((state) => state.isOpen);

  const showSignIn = () => {
    dispatch(singInAction.changeState(!currentState));
  };

  return (
    <navbar className="navbar  d-flex w-100 p-2 justify-content-around position-sticky ">
      <div className="d-flex align-items-center justify-content-center gap-4">
        <Image
          src={`/Images/${!currentState ? "HobbyCueLogo.svg" : "mainLogo.svg"}`}
          alt="logo"
          width={293}
          height={60}
          className="col-8"
        />
        <div className="d-xl-flex d-none">
          <input
            type="text"
            placeholder="Search here..."
            className="rounded-start-3 border p-2 px-4"
          />
          <button className="border rounded-end-3 bg-main px-3 ">
            <Image
              src={"/Images/SearchIcon.png"}
              alt="Search"
              width={12}
              height={12}
            />
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-5">
        <Image
          src={"/Images/searchIcon.svg"}
          alt="search"
          width={20}
          height={20}
          className="d-xl-none d-flex "
        />
        <div
          className="d-xl-flex d-none align-items-center justify-content-center gap-1 position-relative showCard "
          onClick={() => setIsShown((pre) => !pre)}
        >
          <Image
            src={"/Images/ExploreIcon.svg"}
            alt="Explore"
            width={20}
            height={20}
          />
          Explore
          <Image
            src={"/Images/DownArrow.svg"}
            alt="Drop Down"
            width={11}
            height={6}
          />
          {isShown && (
            <div className="card position-absolute top-100">
              <div>People-Community</div>
              <div>Places-Venues</div>
              <div>Programs-Events</div>
              <div>Products-Store</div>
              <div>Blogs</div>
            </div>
          )}
        </div>
        <div className="d-xl-flex d-none justify-content-center align-items-center gap-3 ">
          <div className="position-relative d-flex justify-content-center align-items-center ">
            <Image
              src={"/Images/PolygonOuter.svg"}
              height={19}
              width={19}
              alt="Hobby"
              className="position-absolute z-0 "
            />
            <Image
              src={"/Images/HobbyIcon.svg"}
              alt="Hobby"
              width={12}
              height={12}
              className="position-absolute z-1"
            />
          </div>
          Hobbies
          <Image
            src={"/Images/DownArrow.svg"}
            alt="Drop Down"
            width={11}
            height={6}
          />
        </div>
        <Image
          className="d-xl-flex d-none"
          src={"/Images/SaveIcon.svg"}
          alt="save"
          width={14}
          height={18}
        />
        <Image
          src={"/Images/NotificationsIcon.svg"}
          alt="save"
          width={16}
          height={20}
        />
        <div className="position-relative d-xl-flex d-none justify-content-center align-items-center flex-column gap-1">
          <div className="d-flex align-items-end ">
            <Image src={"/Images/Cart.svg"} alt="save" width={20} height={13} />
          </div>
          <div className="w-100  d-flex justify-content-around align-items-start   ">
            <Image
              src={"/Images/CartWheel.svg"}
              alt="Cart Wheel"
              width={5}
              height={5}
            />
            <Image
              src={"/Images/CartWheel.svg"}
              alt="Cart Wheel"
              width={5}
              height={5}
            />
          </div>
        </div>
        <div role="button" className="d-flex d-xl-none" onClick={showSignIn}>
          <Image
            src={`/Images/${!currentState ? "menu.svg" : "close.svg"}`}
            alt="menu"
            width={15}
            height={15}
          />
        </div>
        <button className="px-4 py-2 rounded border-2 text-color-main border-main btn-outline-light bg-light d-xl-flex d-none">
          Sign In
        </button>
      </div>
    </navbar>
  );
};

export default Navbar;
