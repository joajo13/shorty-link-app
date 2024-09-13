import { useQuery } from "@tanstack/react-query"
import { getNewUsers } from "@/services/users/getNewUsers"

export const useGetNewUsers = (range) => {
    const { isLoading, isError, data: users } = useQuery({
        queryKey: ["users", "new", range],
        queryFn: () => getNewUsers(range),
        enabled: !!range,
    })

    console.log(users)

    return {
        isLoading,
        isError,
        users,
    }
}