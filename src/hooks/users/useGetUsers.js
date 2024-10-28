import { getUsers } from "@/services/users/getUsers"
import { useQuery } from "@tanstack/react-query"

export const useGetUsers = ({role, range, loginRange}) => {
    const { isLoading, isError, data } = useQuery({
        queryKey: ["users", {role, range, loginRange}],
        queryFn: () => getUsers({role, range, loginRange}),
    })

    return {
        isLoading,
        isError,
        data
    }
}