import { createLink } from "@/services/link/createLink";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useCreateLink = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: callCreateLinkMutation, isPending: createLinkIsPending } = useMutation({
    mutationFn: ({ userId, url, customUrl, customFaviconUrl }) => createLink({ userId, url, customUrl, customFaviconUrl }),
    onSuccess: (data) => {
      const userId = data.userId;
      toast.success("Link created successfully");
      queryClient.invalidateQueries({ queryKey: ["links", userId] });
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  return {
    callCreateLinkMutation,
    createLinkIsPending,
  };
};
