import { useEffect, useState } from 'react';
import { usersApi } from '../api/userApi';

export const useUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const { data } = await usersApi.get('https://reqres.in/api/users');
    setUsers(data.data);
  };

  return {
    users,
  };
};
