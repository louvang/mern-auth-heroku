import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserData, selectAuthStatus, fetchUser } from '../redux/authSlice';
import axios from 'axios';

export default function Header() {
  const userData = useSelector(selectUserData);
  const authStatus = useSelector(selectAuthStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authStatus === 'idle') {
      dispatch(fetchUser());
    }
  }, [authStatus, dispatch]);

  const logout = () => {
    axios({
      method: 'GET',
      widthCredentials: true,
      url: '/api/logout',
    }).then((res) => {
      window.location = '/login';
    });
  };

  let authContent;
  switch (authStatus) {
    case 'succeeded':
      authContent = (
        <div>
          Logged in as <strong>{userData.name}</strong>. <button onClick={logout}>Logout</button>
        </div>
      );
      break;
    case 'failed':
      authContent = (
        <div>
          <a href="/login">Login</a> or <a href="/register">Register</a>
        </div>
      );
      break;
    default:
      authContent = null;
  }

  return (
    <header>
      <div className="logo-container">Logo</div>
      {authContent}
    </header>
  );
}
