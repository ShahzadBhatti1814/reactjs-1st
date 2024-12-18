import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="profile">
      <h2>Profile</h2>
      {user ? (
        <div>
          <p>Welcome, {user.email}</p>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
      ) : (
        <p>Please log in to see your profile.</p>
      )}
    </div>
  );
};

export default Profile;
