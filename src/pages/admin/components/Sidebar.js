import {
  faPaperPlane,
  faBarsProgress,
  faPerson,
  faLocationDot,
  faPersonChalkboard,
  faBlog,
  faComment,
  faRightFromBracket,
  faAddressCard,
  faFileInvoiceDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex-1 border-0 border-r-[0.5px] border-solid border-primary min-h-[100vh] bg-[#111]">
      <div className="top h-[50px] flex items-center justify-center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="text-[20px] font-bold text-[#fff] cursor-pointer ">
            <FontAwesomeIcon
              icon={faPaperPlane}
              className="text-primary pr-[5px] font-[900]"
            />
            Travel
          </div>
        </Link>
      </div>
      <hr className="h-0 border-[0.5px] border-b-0 border-solid border-primary" />
      <div className="center pl-[10px]">
        <ul className="list-none m-0 p-0">
          <p className="title text-[10px] font-[600] mt-[15px] mb-[5px]">
            MAIN
          </p>
          <li>
            <FontAwesomeIcon
              icon={faBarsProgress}
              className="icon text-primary"
            />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faPerson} className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/admin/places" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              <span>Places</span>
            </li>
          </Link>
          <Link to="/admin/guides" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faPersonChalkboard} className="icon" />
              <span>Guides</span>
            </li>
          </Link>
          <Link to="/admin/booking" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon
                icon={faFileInvoiceDollar}
                className="icon text-[18px]"
              />
              <span>Booking</span>
            </li>
          </Link>
          <Link to="/admin/blogs" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faBlog} className="icon" />
              <span>Blogs</span>
            </li>
          </Link>
          <Link to="/admin/comments" style={{ textDecoration: "none" }}>
            <li>
              <FontAwesomeIcon icon={faComment} className="icon" />
              <span>Comments</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <li>
            <FontAwesomeIcon icon={faAddressCard} className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faRightFromBracket} className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
