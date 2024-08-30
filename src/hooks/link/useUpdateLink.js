import { updateLink } from "@/services/link/updateLink";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateLink = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: callUpdateLinkMutation, isPending: updateLinkIsPending } = useMutation({
    mutationFn: ({ userId, url, customUrl, linkId }) => updateLink({ userId, url, customUrl, linkId }),
    onSuccess: (data) => {
      const userId = data.userId;
      toast.success("Link updated successfully");
      queryClient.invalidateQueries({ queryKey: ["links", userId] });
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  return {
    callUpdateLinkMutation,
    updateLinkIsPending,
  };
};
