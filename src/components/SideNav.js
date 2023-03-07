import React from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Personnel from "./Personnel";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import Users from "./Users";
import Cart from "./Cart";
import Orders from "./Orders";
import NoPage from "./NoPage";

// The sideNav bar

const SideNav = () => {
  return (
    <div>
			<h1>Welcome to the Side Nav Component!</h1>
      <div>
        <ul id="sidenav">
          <li>
            <a href="#">Orders</a>
          </li>
          <li>
            <a href="#">Personal Info</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
