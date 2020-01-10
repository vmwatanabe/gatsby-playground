import React from 'react';
import { Link } from 'gatsby';

import './UserItem.scss';

const UserItem = ({ user }) => {
  const { id, name, username, email, address, phone, website, company } = user;

  return (
    <div className="user-item">
      <div className="user-info">
        <span className="user-info__user-name">{username}</span>
        <span className="user-info__name">{name}</span>
      </div>
      <div className="user-actions">
        <Link to={`/user/${id}`}>Ver Posts</Link>
      </div>
    </div>
  );
};

export default UserItem;
