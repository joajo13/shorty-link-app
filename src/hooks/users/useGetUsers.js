import { getUsers } from "@/services/users/getUsers"
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = () => {
    const { isLoading, isError, data: users } = useQuery({
        queryKey: ["users"],
        queryFn: () => getUsers(),
    })

    return {
        isLoading,
        isError,
        users: users || [],
    }
}