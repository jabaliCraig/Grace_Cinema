import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import AuthLogin from '../components/AuthLogin';
import UserProfile from '../components/UserProfile';
import { me } from '../features/authSlice';


const LoginSignUp = () => {
  const loggedIn = useSelector((state) => !state.auth.me.id);
  const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(me());
//   }, [dispatch]);

  return (
    <div>
      {loggedIn ? (
        <Routes>
          <Route path="/*" element={<UserProfile />} />
          <Route to="/userprofile" element={<UserProfile />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthLogin name="login" displayName="Login" />}
          />
          <Route
            path="/login"
            element={<AuthLogin name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthLogin name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default LoginSignUp;

