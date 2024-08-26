import { validateCustomUrlExistance } from "./validateCustomUrlExistance";

export const generateRandomCustomUrl = async () => {
    const randomCustomURL = Math.random().toString(36).substring(2, 7);

    const validateExistanceCustomUrl = await validateCustomUrlExistance(randomCustomURL);

    if (!validateExistanceCustomUrl.isValid) {
        return generateRandomCustomUrl();
    }

    return randomCustomURL;
}