import { useQuery } from "@tanstack/react-query";
import { getClicks } from "@/services/clicks/getClicks";

export const useGetClicks = (userId, customUrl, range) => {
    const {isLoading, isError, data} = useQuery({
        queryKey: ["clicks", customUrl, range],
        queryFn: () => getClicks({ userId, customUrl, range }),
        enabled: !!userId,
    })

    const clicks = data?.clicks || [];
    const totalClicks = data?.totalClicks || 0;

    return {
        isLoading,
        isError,
        clicks,
        totalClicks
    }
}