
import { useUser } from '../useUser';
import {  renderHook, waitFor } from '@testing-library/react';
import * as userService from '../../services/userService'; 
import { mockUsers } from '../../components/Users/List/__tests__/List.test';

jest.mock('../../services/userService'); 

describe('useUser', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should initialize with initial status', () => {
      const { result } = renderHook(() => useUser(''));
      waitFor(() => {
        expect(result.current.users).toEqual([]);
        expect(result.current.error).toBe(null);
      })
  });

  it('should fetch users successfully', async () => {
    (userService.fetchUsers as jest.Mock).mockResolvedValue(mockUsers); 
    const { result } = renderHook(() => useUser(''));
    
    waitFor(() => {
      expect(result.current.users).toEqual(mockUsers);
      expect(result.current.status).toBe('success');
    })
  });
});