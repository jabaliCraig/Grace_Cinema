import React, { useEffect } from "react";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import SingleMovie from "./components/SingleMovie";
import SinglePerson from "./components/SinglePerson";
import Admin from "./components/Admin";
import UserProfile from "./components/UserProfile";
import Users from "./components/Users";
import Cart from "./components/Cart";
import Orders from "./components/Orders";
import LoginSignUp from "./components/LoginSignUp";
import NoPage from "./components/NoPage";
import UpdateInfo from './components/UpdateInfo';
import AddMovie from './components/AddMovie';
import EditMovie from './components/EditMovie';
import LeftSideNav from "./components/LeftSideNav";
import RightSideNav from "./components/RightSideNav"
import Action from "./components/allGenres/Action";
import Bio from "./components/allGenres/Bio";
import Comedy from "./components/allGenres/Comdey";
import Documentary from "./components/allGenres/Documentary";
import Drama from "./components/allGenres/Drama";
import Family from "./components/allGenres/Family";
import Fantasy from "./components/allGenres/Fantasy";
import Horror from "./components/allGenres/Horror";
import Romance from "./components/allGenres/Romance";
import Science from "./components/allGenres/Science";
import Western from "./components/allGenres/Western";
import AuthLogin from "./components/AuthLogin";

import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchMoviesAsync } from "./features/allMovies/allMoviesSlice";
import { fetchPersonnelAsync } from "./features/allPersonnelSlice";
import { fetchUsersAsync } from "./features/users";
import { fetchOrdersAsync } from "./features/orders";


function App() {
	const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(fetchPersonnelAsync());
    dispatch(fetchUsersAsync());
    dispatch(fetchOrdersAsync());
  }, [dispatch]);
  return (
    <div className="App">
			<Nav />

			<Routes>
				<Route path='/' element={<Movies />} />
	<Route path="/signUp" element={<AuthLogin name={'sign up'} displayName="Sign Up"/>} />
				<Route path='/movies' element={<Movies />} />
				<Route path='/movies/:id' element={<SingleMovie />} />
				<Route path='/movies/:id/edit' element={<EditMovie />} />
				<Route path='/movies/add' element={<AddMovie />} />
				<Route path='/people/:id' element={<SinglePerson />} />
				<Route path='/admin' element={<Admin />} />
				<Route path='/users/:id' element={<UserProfile />} />
				<Route path='/users' element={<Users />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/orders' element={<Orders />} />
				<Route path='/rightSidenav' element={<RightSideNav />} />
				<Route path='/leftSidenav' element={<LeftSideNav />} />
// 				<Route path='/login' element={<LogIn />} />
				<Route path='/nopage' element={<NoPage />} />
				<Route path='/update' element={<UpdateInfo />} />
				<Route path='/actionadventure' element={<Action/>} />
				<Route path='/biographyhistorical' element={<Bio/>} />
				<Route path='/comedy' element={<Comedy/>} />
				<Route path='/documentary' element={<Documentary/>} />
				<Route path='/drama' element={<Drama/>} />
				<Route path='/family' element={<Family/>} />
				<Route path='/fantasy' element={<Fantasy/>} />
				<Route path='/horror' element={<Horror/>} />
				<Route path='/romance' element={<Romance/>} />
				<Route path='/sciencefiction' element={<Science/>} />
				<Route path='/western' element={<Western/>} />
			</Routes>
		</div>
	)
}

export default App;
