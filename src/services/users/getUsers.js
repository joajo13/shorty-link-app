export const getUsers = async ({role, range}) => {
  const queryParams = {}

  if (role) queryParams.role = role;
  if (range) queryParams.range = range;

  const queryString = new URLSearchParams(queryParams).toString();

  const url = `/api/users?${queryString}`;

  const users = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = users.json();

  return data;
}