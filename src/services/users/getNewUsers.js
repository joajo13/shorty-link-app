export const getNewUsers = async (range) => {
  const users = await fetch(`/api/users/new?range=${range}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = users.json();

  return data;
}