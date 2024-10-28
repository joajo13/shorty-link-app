export const getLinkByCustomUrl = async (customUrl) => {
    const response = await fetch(`/api/links/${customUrl}`, {
        method: 'GET',
        redirect: 'follow'
    });

    if (response.redirected) {
        console.log(`Redirected to: ${response.url}`);
    }

    const data = await response.json();
    return data;
}