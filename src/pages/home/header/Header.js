import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonSubmit from "../../../components/button/ButtonSubmit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faBookmark } from "@fortawesome/free-solid-svg-icons";
import UserAvata from "../../../components/user/UserAvata";
import UserDropdown from "../../../components/user/UserDropdown";

const ListLink = [
  {
    id: 1,
    to: "#",
    title: "Home",
  },
  {
    id: 2,
    to: "#",
    title: "Places",
  },
  {
    id: 3,
    to: "#",
    title: "Guides",
  },
  {
    id: 4,
    to: "#",
    title: "Blogs",
  },
  {
    id: 5,
    to: "#",
    title: "About",
  },
  {
    id: 6,
    to: "#",
    title: "Contact",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="fixed top-0 right-0 left-0 z-[1000] w-full flex items-center justify-between px-[9%] py-[15px]  bg-header ">
      <div className="text-[25px] font-bold text-[#fff] cursor-pointer ">
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="text-primary pr-[5px] font-[900]"
        />
        Travel
      </div>
      <div className="flex list-none items-center m-0 p-0  ">
        {ListLink.map((link) => (
          <li
            className="text-[17px] text-[#aaa] mx-[10px] cursor-pointer capitalize hover-menu"
            key={link.id}
          >
            <Link to={link.to}>{link.title}</Link>
          </li>
        ))}
      </div>
      <div className="cursor-pointer relative">
        {login ? (
          <>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faBookmark}
                className="text-primary text-[17px]"
              ></FontAwesomeIcon>
              <UserAvata
                className="ml-[10px]"
                show={show}
                setShow={setShow}
              ></UserAvata>
              {show && <UserDropdown></UserDropdown>}
            </div>
          </>
        ) : (
          <>
            <ButtonSubmit
              className=""
              onClick={() => {
                navigate("/login");
              }}
            >
              Login
            </ButtonSubmit>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
