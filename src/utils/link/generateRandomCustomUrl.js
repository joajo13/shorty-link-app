export const generateRandomCustomUrl = async () => {
    const randomCustomURL = Math.random().toString(36).substring(2, 7);

    const validateCustomUrlExistance = await validateCustomUrlExistance(randomCustomURL);

    if (!validateCustomUrlExistance.isValid) {
        return generateRandomCustomUrl();
    }

    return randomCustomURL;
}