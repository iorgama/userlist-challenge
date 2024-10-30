import { fetchUsers } from '../userService';
import { mockUsers } from '../../components/Users/List/__tests__/List.test';

global.fetch = jest.fn();

describe('fetchUsers', () => {
  afterEach(() => {
    jest.clearAllMocks(); 
  });

  it('should fetch users successfully', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: jest.fn().mockResolvedValueOnce(mockUsers),
    });

    const users = await fetchUsers();

    expect(users).toEqual(mockUsers);
  });

  it('should throw an error when response is not ok', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      status: 500,
    });

    await expect(fetchUsers()).rejects.toThrow('Failed to fetch users: 500');
  });

  it('should handle generic errors', async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error('Generic Error'));

    await expect(fetchUsers()).rejects.toThrow('Generic Error'); 
  });
});
