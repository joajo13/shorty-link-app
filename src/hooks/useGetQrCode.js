import { useQuery } from "@tanstack/react-query"
import { getQrCode } from "@/utils/getQrSrc"

export const useGetQrCode = (customUrl) => {
    const { isLoading, data: qrSrc } = useQuery({
        queryKey: ["qr-code"],
        queryFn: () => getQrCode(customUrl),
        enabled: !!customUrl
    })

    return {
        isLoading,
        qrSrc
    }
}