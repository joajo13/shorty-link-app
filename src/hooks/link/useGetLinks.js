import { getLinks } from "@/services/link/getLinks";
import { useQuery } from "@tanstack/react-query";

export const useGetLinks = (userId) => {
    const {isLoading, isError, data, refetch: fetchUserLinks} = useQuery({
        queryKey: ["links", userId],
        queryFn: () => getLinks(userId),
        enabled: !!userId,
    })

    return {
        isLoading,
        isError,
        data,
        fetchUserLinks
    };
}