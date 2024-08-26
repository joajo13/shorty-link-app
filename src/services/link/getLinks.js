export const getLinks = async (userId) => {
    const links = await fetch(`/api/users/${userId}/links`);
    const data = await links.json();

    return data;
}