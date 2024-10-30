import { useCallback, useEffect, useMemo, useState } from 'react';
import { User } from '../models/User';
import { fetchUsers } from '../services/userService';

export type StatusMode = 'idle' | 'loading' | 'success'| 'error' ;

export const useUser = (searchTerm: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<StatusMode>('idle')

  const filterUsersList = useMemo(() => {
    const searchTermInLowerCase = searchTerm.toLowerCase();
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTermInLowerCase)
    );
    return filteredUsers;
  }, [searchTerm, users])
  
  const loadUserData = useCallback(async () => {
    setStatus('loading')
    try {
      const usersData = await fetchUsers();
      setUsers(usersData);
      setStatus('success')
    } catch {
      setStatus('error')
      setError('Não foi possível realizar a ação.'); 
    }
  }, []);
  
  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  return { users: filterUsersList, error, status }; 
};
