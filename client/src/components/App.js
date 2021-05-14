import React from 'react';
import Header from './Header';

export default function App() {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h1>Welcome</h1>

        <p>
          This is text that users who are not logged in will see. If you <a href="/register">Register</a> for an account
          and <a href="/login">Login</a>, this page will automatically redirect you to the dashboard page.
        </p>
      </div>
    </div>
  );
}
