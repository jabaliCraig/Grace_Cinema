import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSingleMovieAsync, selectSingleMovie } from "../features/singleMovieSlice";
import EditMovie from "./EditMovie";


const SingleMovie = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const [showMenu, SetShowMenu] = useState(false)
	
	useEffect(() => {
		dispatch(fetchSingleMovieAsync(id))
	}, [dispatch])
	
	const single = useSelector(selectSingleMovie);
	const toggleMenu = () => SetShowMenu(!showMenu);

  return (
		<div>
			<div className="edit-menu">
				<button onClick={()=> toggleMenu()}>Update Movie Information</button>
				{showMenu && <EditMovie id={id}/>}
			</div>
			<img src={`${single.imageUrl}`}/>
		<h1>{single.title}</h1>
		<h2>{single.year}</h2>
		<h3>Genre: {single.genre}</h3>
		<h4>Price: {single.price}</h4>
		<p>Description: {single.description}</p>
		<div>Starring:
			<ul>
				{single.personnels && single.personnels.map((person) => {
					return (
						<li>
						<Link to={`/personnel/${person.id}`}>
							{person.fName}{` `}{person.lName}
						</Link>
						</li>
					)
				})}
				</ul>
		</div>
		</div>
	);
};

export default SingleMovie;