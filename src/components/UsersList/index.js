import React from 'react';
import UserItem from '../UserItem';

import './UsersList.scss';

const UsersList = ({ users }) => {
  const hasUsers = !!(users && users.length);

  if (!hasUsers) {
    return null;
  }

  const getUsers = () => users.map(elem => <UserItem user={elem} />);

  return (
    <div className="users-list">
      <h1>Lista de usuários</h1>
      <div>{getUsers()}</div>
    </div>
  );
};

export default UsersList;
