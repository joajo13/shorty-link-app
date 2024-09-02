export const getClicks = async ({ userId, customUrl, range }) => {

    const response = await fetch(`/api/users/${userId}/links/${customUrl}/clicks?range=${range}`);
    const links = await response.json();

    return links;
}
