export const createLink = async ({
    userId,
    url,
    customUrl,
    customFaviconUrl = '',
}) => {
    
    const response = await fetch(`/api/users/${userId}/links`, {
        method: 'POST',
        body: JSON.stringify({
            url,
            customUrl,
            customFaviconUrl,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });


    if (!response.ok) {
        const error = await response.json();

        throw new Error(`${error.error}`);
    }

    const data = await response.json();

    return data;
}