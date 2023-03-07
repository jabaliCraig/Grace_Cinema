import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authenticate } from "../features/authSlice";
import { me } from "../features/authSlice";
import UsersProfile from "./UserProfile";
import { logout } from "../features/authSlice";
// import { Link } from "react-router-dom";

const AuthLogin = ({ name, displayName }) => {
  const loggedIn = useSelector((state) => !!state.auth.me.id);
	const { error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


	// useEffect(() => {
  //   dispatch(me());
  // }, [dispatch]);

	const onSubmit = (ev) => {
		ev.preventDefault();
		const formName = ev.target.name;
    const email = ev.target.email.value;
    const password = ev.target.password.value;
    dispatch(authenticate({ email, password, method: formName }));
  };
  return (
    <h1>
      Welcome to the LogIn Component!
    <div>{loggedIn ? (<UsersProfile/>) :
      (<form onSubmit={onSubmit} name={name}>
        <div>
          <label htmlFor="email">
            <small>Email</small>
          </label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && <div> {error} </div>}
      </form>
			)}
    </div>
    </h1>
  );
};

export default AuthLogin;
