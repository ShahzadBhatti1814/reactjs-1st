import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => { 
  const user = useSelector((state) => state.auth.user);  

  return (
    <div className="profile">
      <h2>Profile</h2>
      <p>{user ? `Email: ${user.email}` :null }</p>
    </div>
  );
};

export default Profile;

