export const getUsers = async () => {
  const users = await fetch('/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = users.json();

  return data;
}