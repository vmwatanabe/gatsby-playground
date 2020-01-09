import React from 'react';
import './UserItem.scss';

const UserItem = ({ user }) => {
  const { id, name, username, email, address, phone, website, company } = user;

  return (
    <div className="user-item">
      <span className="user-item__user-name">{username}</span>
      <span className="user-item__name">{name}</span>
    </div>
  );
};

export default UserItem;
