import React from 'react';

export const UserRow = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>
        <img
          src={user.avatar}
          alt={`${user.avatar} of ${user.first_name}`}
          className="img-thumbnail"
          style={{
            width: 75,
          }}
        />
      </td>
    </tr>
  );
};
