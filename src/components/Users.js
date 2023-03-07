import React, { useState } from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import Personnel from "./Personnel";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import Cart from "./Cart";
import Orders from "./Orders";
import SideNav from "./LeftSideNav";
import NoPage from "./NoPage";

import { useSelector } from "react-redux";
import { selectUsers } from '../features/users';

const Users = () => {
	const users = useSelector(selectUsers)

	// console.log(users);

  return (
  <div>
	<h1>Welcome to the Users Component!</h1>
	{
			users.map((user)=>{
				return(
					<div key = {user.id}>
						<h4>First Name: {user.fName}</h4>
						<h4>Last Name: {user.lName}</h4>
						<h4>Email: {user.email}</h4>
						<h4>Type: {user.type}</h4>
					</div>
				)
			})
		}
  </div>

  );
};

export default Users;
