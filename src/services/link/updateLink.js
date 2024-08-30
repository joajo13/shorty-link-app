export const updateLink = async ({
    userId,
    linkId,
    url,
    customUrl,
}) => {
    
    const response = await fetch(`/api/users/${userId}/links/${linkId}`, {
        method: 'PUT',
        body: JSON.stringify({
            url,
            customUrl,
            linkId
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