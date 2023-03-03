import React from "react";
import { Link } from "react-router-dom"
import { useSelector } from "react-redux";
import { selectMovies } from "../../features/allMovies/allMoviesSlice";
import RightSideNav from "../RightSideNav";


const Bio = () => {

const bio = useSelector(selectMovies)
  return (
    <section className="container">
    <h1 className="genre">No Biography/Historical Movies yet</h1>
      {bio.map((filter) => {
        if(filter.genre === 'Biography/Historical'){
          return(
            <div className="card">
                <div className="card-image">
               <Link to={`/movies/${filter.id}`}>
                    <img className="movieImage" src={filter.imageUrl} alt="" />
                    <h2 className="movieTitle">{filter.title}</h2>
                    <h2 className="moviePrice">
                      <small>${filter.price}</small>
                    </h2>
                    </Link>
                    </div>
            </div>
          )
        }
      })}
<RightSideNav/>
		</section>
	);
};

export default Bio;
