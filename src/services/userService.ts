import { User } from '../models/User';

// Num cenário ideal, essa constante viria do env
const API_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_URL}/users`);

    if (!response.ok) {
      throw new Error(`Failed to fetch users: ${response.status}`);
    }

    const data: User[] = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
