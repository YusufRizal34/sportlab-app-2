import React from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "react-bootstrap";

import BrandIcon from "./BrandIcon";
import PhotoProfile from "../assets/images/resize.jpg";
import { TextFormatter } from "../utils/TextFormatter";
import { signOut } from "../services/action/auth";

export default function Header({ data = null }) {
  const usernameLength = 8;
  const dispatch = useDispatch();
  const location = useLocation();

  const getNavLinkClass = (path) => {
    if (path) {
      return location.pathname === path ? " active" : "";
    }
  };
  const logout = async () => {
    await dispatch(signOut());
    window.location.reload();
  };

  return (
    <header className="spacing-sm">
      <div className="container">
        <Navbar className="navbar" collapseOnSelect expand="lg">
          <BrandIcon />
          <Navbar.Toggle className="navbar-toggler-header" />
          <Navbar.Collapse>
            <div className="mx-auto"></div>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link${getNavLinkClass("/")}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link${getNavLinkClass("/shop-page")}`}
                  aria-current="page"
                  to="/shop-page"
                >
                  Shop
                </Link>
              </li>
              {!data?.user ? (
                <li className="nav-item">
                  <Link
                    className={`nav-link${getNavLinkClass("/login")}`}
                    aria-current="page"
                    to="/login"
                  >
                    Login
                  </Link>
                </li>
              ) : (
                <li className="nav-item nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    {TextFormatter(data?.user?.username, usernameLength)}
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="dropdown-item profile-container">
                        <img
                          className="img-fluid profile-image rounded-circle"
                          src={PhotoProfile}
                          alt="photo profile"
                        />
                        <div className="profile-info">
                          <div className="profile-name">
                            {TextFormatter(
                              data?.user?.username,
                              usernameLength
                            )}
                          </div>
                          <div className="profile-email">
                            {data?.user?.email}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="divider"></li>
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item d-flex justify-content-between"
                        to="/cart-page"
                      >
                        <div>Cart</div>
                        <div className="notification">{data?.cart}</div>
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/order-page">
                        Order
                      </Link>
                    </li>
                    <li>
                      <button onClick={logout} className="dropdown-item">
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </header>
  );
}
