export const getPublicLinks = async () => {
    const links = await fetch(`/api/links`);
    const data = await links.json();
    return data;
}