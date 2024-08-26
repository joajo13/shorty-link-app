import { createLink } from "@/services/link/createLink";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateLink = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: callCreateLinkMutation, isPending } = useMutation({
    mutationFn: ({ userId, url, customUrl, customFaviconUrl }) => createLink({ userId, url, customUrl, customFaviconUrl }),
    onSuccess: () => {
      toast.success("Link created successfully");
      queryClient.invalidateQueries("links");
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  return {
    callCreateLinkMutation,
    isPending,
  };
};
