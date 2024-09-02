import { useQuery } from "@tanstack/react-query";
import { getClicks } from "@/services/clicks/getClicks";

export const useGetClicks = (userId, customUrl, range) => {
    const {isLoading, isError, data: clicks, refetch: fetchClicks} = useQuery({
        queryKey: ["clicks", customUrl],
        queryFn: () => getClicks({ userId, customUrl, range }),
        enabled: !!userId,
    })

    return {
        isLoading,
        isError,
        clicks,
        fetchClicks
    }
}