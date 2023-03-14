import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../features/users";
import allMoviesSlice from "../features/allMovies/allMoviesSlice";
import ordersSlice from "../features/orders";
import allPersonnelSlice from "../features/allPersonnelSlice";
import specificUserSlice from "../features/specificUserSlice";
import singleMovieSlice from "../features/singleMovieSlice";
import singlePersonSlice from "../features/singlePersonSlice";
import cartSlice from "../features/cartSlice";
import authSlice from "../features/authSlice";


const store = configureStore({
  reducer: {
    users: usersSlice,
    user: specificUserSlice,
		movies: allMoviesSlice,
    singleMovie: singleMovieSlice,
    singlePerson: singlePersonSlice,
    orders: ordersSlice,
    personnel: allPersonnelSlice,
    cart: cartSlice,
		auth: authSlice
  },
});
// First dispatch when the application loads
// store.dispatch(getTotals());
export default store;

