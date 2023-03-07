import React from "react";
import Nav from "./Nav";
import Movies from "./Movies";
import SingleMovie from "./SingleMovie";
import SinglePerson from "./SinglePerson";
import Admin from "./Admin";
import UserProfile from "./UserProfile";
import Users from "./Users";
import Cart from "./Cart";
import Orders from "./Orders";
import SideNav from "./SideNav";
import NoPage from "./NoPage";

// HOLD THE INFORMATION ABOUT THE MOVIES POEPLE (EX: ACTORS, DIRECTORS)
import { useSelector } from "react-redux";
import { selectPersonnel } from '../features/allPersonnelSlice';

const Personnel = () => {
	const persons = useSelector(selectPersonnel);
	console.log(persons);
	return (
		<div>
		{
			persons.map((person)=>{
				return(
					<div key = {person.fName}>
						<h4>Name: {person.fName} {person.lName}</h4>
						<h4> details: {person.details}</h4>
						<img src = {person.imageUrl} alt=''/>
					</div>
				)
			})
		}
	</div>
		);
};

export default Personnel;
