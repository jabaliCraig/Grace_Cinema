import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { fetchSinglePersonAsync, selectSinglePerson } from "../features/singlePersonSlice";

const SinglePerson = () => {
	const dispatch = useDispatch()
	const { id } = useParams()
	const single = useSelector(selectSinglePerson);
	
	useEffect(() => {
		dispatch(fetchSinglePersonAsync(id))
	}, [dispatch])
	

	return (
		<div>
			<img src={`${single.imageUrl}`}/>
			<h1>{single.fName}{` `}{single.lName}</h1>
			<p>Description: {single.details}</p>
			<div>Filmography:
				<ul>
					{single.movies && single.movies.map((movie) => {
						return (
							<li>
							<Link to={`/movies/${movie.id}`}>
								{movie.title}
							</Link>
							</li>
						)
					})}
					</ul>
			</div>
		</div>
	);
};

export default SinglePerson;