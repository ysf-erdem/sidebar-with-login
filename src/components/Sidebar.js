import React from "react";
import { useState } from "react";
import {
  IoMdClose,
  IoMdHome,
  IoMdMenu,
  IoMdPerson,
  IoMdListBox,
  IoMdLogOut,
} from "react-icons/io";
import "./Sidebar.css";

function Sidebar() {
  const [active, setActive] = useState(false);
  const activateNav = () => {
    setActive(!active);
  };
  const Logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <div>
      <div className={`sidebar ${active ? "" : "open"}`}>
        <div
          className="menu-icon"
          style={{ paddingRight: "15px" }}
          onClick={activateNav}
        >
          {!active ? (
            <IoMdMenu className="menu" />
          ) : (
            <IoMdClose className="menu" />
          )}
        </div>
        <ul className={"ul-item"}>
          <li
            className="icon"
            onClick={() => {
              window.location.href = "/Anasayfa";
            }}
          >
            <IoMdHome />
            <p onClick={activateNav}>Anasyfa</p>
          </li>
          <li
            className="icon"
            onClick={() => {
              window.location.href = "/Profil";
            }}
          >
            <IoMdPerson />
            <p onClick={activateNav}>Profil</p>
          </li>
          <li
            className="icon"
            onClick={() => {
              window.location.href = "/Yap";
            }}
          >
            <IoMdListBox />
            <p onClick={activateNav}>Yap</p>
          </li>
          <li onClick={Logout}>
            <IoMdLogOut />
            <p>Çıkış </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
