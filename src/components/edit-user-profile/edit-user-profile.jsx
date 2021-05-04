import React from 'react';
import { useSelector } from 'react-redux';
import EditProfileForm from '../edit-profile-form/edit-profile-form';
import './edit-user-profile.css';

const EditUserProfile = () => {
  const userState = useSelector((state) => state.user);
  return (
    <div className="edit-profile-container">
      <p>Account settings</p>
      <div className="edit-profile">
        <div className="profile-desc">
          <div className="profile-img"></div>
          <p className="user-name">{`${userState.first_name} ${userState.last_name}`}</p>
          <p className="user-position">Financial director</p>
        </div>
        <div className="profile-form">
          <EditProfileForm />
        </div>
      </div>
    </div>
  );
};
export default EditUserProfile;
