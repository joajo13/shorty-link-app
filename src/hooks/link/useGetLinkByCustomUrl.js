import { getLinkByCustomUrl } from "@/services/link/getLinkByCustomUrl";
import { useQuery } from "@tanstack/react-query";

export const useGetLinksByCustomUrl = (customUrl) => {
    const {isLoading, isError, data} = useQuery({
        queryKey: ["link", customUrl],
        queryFn: () => getLinkByCustomUrl(customUrl),
        enabled: !!customUrl,
    })

    return {
        isLoading,
        isError,
        data
    };
}