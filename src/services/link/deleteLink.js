export const deleteLink = async ({
    userId,
    linkId
}) => {
    
    const response = await fetch(`/api/users/${userId}/links/${linkId}`, {
        method: 'DELETE',
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