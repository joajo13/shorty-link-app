import { getPublicLinks } from "../../services/link/getPublicLinks";
import { useQuery } from "@tanstack/react-query";

export const useGetPublicLinks = (userId) => {
    const {isLoading, isError, data, refetch: fetchPublicLinks} = useQuery({
        queryKey: ["links", userId],
        queryFn: () => getPublicLinks(userId),
    })

    return {
        isLoading,
        isError,
        data,
        fetchPublicLinks
    };
}