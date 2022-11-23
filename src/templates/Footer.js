import React from "react";
import BrandIcon from "./BrandIcon";
import GooglePlayIcon from "../assets/images/icons/icon-googlePlay.svg";
import AppStoreIcon from "../assets/images/icons/icon-appStore.svg";

export default function Footer({ data = null }) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <BrandIcon />
            <p className="brand-tagline">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae aliquam nesciunt eos aut earum animi!
            </p>
          </div>
          <div className="col-sm-12 col-lg-3">
            <h6 className="mt-2">About</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <a type="link" href={"/about"}>
                  About us
                </a>
              </li>
              <li className="list-group-item">
                <a type="link" href={"/properties"}>
                  Delivery Information
                </a>
              </li>
              <li className="list-group-item">
                <a type="link" href={"/use-payments"}>
                  Privacy Policy
                </a>
              </li>
              <li className="list-group-item">
                <a type="link" href={"/use-payments"}>
                  Terms & Conditions
                </a>
              </li>
              <li className="list-group-item">
                <a type="link" href={"/use-payments"}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-3">
            <h6 className="mt-2">My Account</h6>
            <ul className="list-group list-group-flush">
              {!data && (
                <li className="list-group-item">
                  <a type="link" href={"/careers"}>
                    Sign In
                  </a>
                </li>
              )}
              <li className="list-group-item">
                <a type="link" href={"/cart-page"}>
                  View Cart
                </a>
              </li>
              <li className="list-group-item">
                <a type="link" href={"/wishlist"}>
                  My Wishlist
                </a>
              </li>
              <li className="list-group-item">
                <a type="link" href={"/help"}>
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-lg-3">
            <h6 className="mt-2">Install App</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">From App Store or Google Play</li>
              <li className="list-group-item d-flex">
                <div className="app-container">
                  <a type="link" href="#">
                    <img
                      src={AppStoreIcon}
                      alt="App Store"
                      className="img-contain"
                      height={100}
                    />
                  </a>
                </div>
                <div className="app-container">
                  <a type="link" href="#">
                    <img
                      src={GooglePlayIcon}
                      alt="Google Play"
                      className="img-contain"
                      height={100}
                    />
                  </a>
                </div>
              </li>
              <li className="list-group-item">Secured Payment Gateways</li>
              <li className="list-group-item d-flex">
                <div className="app-container">
                  <a type="link" href="#">
                    <img
                      src={AppStoreIcon}
                      alt="App Store"
                      className="img-contain"
                      height={100}
                    />
                  </a>
                </div>
                <div className="app-container">
                  <a type="link" href="#">
                    <img
                      src={GooglePlayIcon}
                      alt="Google Play"
                      className="img-contain"
                      height={100}
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center copyrights">
            Copyright 2019 • All rights reserved • Sport Lab
          </div>
        </div>
      </div>
    </footer>
  );
}
