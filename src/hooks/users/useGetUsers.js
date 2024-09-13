import { getUsers } from "@/services/users/getUsers"
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = (filters) => {
    const { isLoading, isError, data: users } = useQuery({
        queryKey: ["users", filters],
        queryFn: () => getUsers(filters),
    })

    return {
        isLoading,
        isError,
        users: users || [],
    }
}