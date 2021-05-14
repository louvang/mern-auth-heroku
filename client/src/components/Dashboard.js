import React from 'react';
import Header from './Header';

export default function Dashboard(props) {
  return (
    <div>
      <Header />
      <div className="content-container">
        <h1>{props.userData.name}'s Dashboard</h1>
      </div>
    </div>
  );
}
