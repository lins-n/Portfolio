import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import "./css/nav.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState("#");
  return (
    <nav>
      <Link
        to="/"
        onClick={() => setActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <RiHome6Line />
      </Link>
      <Link
        to="/about"
        onClick={() => setActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </Link>
      <a
        href="#experience"
        onClick={() => setActive("#experience")}
        className={active === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#logos"
        onClick={() => setActive("#logos")}
        className={active === "#logos" ? "active" : ""}
      >
        <MdOutlineDesignServices />
      </a>
      <a
        href="#services"
        onClick={() => setActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
