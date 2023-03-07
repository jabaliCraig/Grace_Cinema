import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users";
import allMoviesSlice from "../features/allMovies/allMoviesSlice";
import ordersSlice from "../features/orders";
import allPersonnelSlice from "../features/allPersonnelSlice";
import specificUserSlice from "../features/specificUserSlice";
import singleMovieSlice from "../features/singleMovieSlice";
import cartSlice from "../features/cartSlice";
import authSlice from "../features/authSlice";


const store = configureStore({
  reducer: {
    users: usersSlice,
    user: specificUserSlice,
		movies: allMoviesSlice,
    singleMovie: singleMovieSlice,
    orders: ordersSlice,
    personnel: allPersonnelSlice,
    cart: cartSlice,
	   auth: authSlice
  },
});
// First dispatch when the application loads
// store.dispatch(getTotals());
export default store;

