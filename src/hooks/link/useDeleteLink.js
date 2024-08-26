import { deleteLink } from "@/services/link/deleteLink";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useDeleteLink = () => {
  const queryClient = useQueryClient();

  const { mutateAsync: callDeleteLinkMutation, isPending: deleteLinkIsPending } = useMutation({
    mutationFn: ({ userId, linkId }) => deleteLink({ userId, linkId }),
    onSuccess: (userId) => {
      toast.success("Link deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["links", userId] });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return {
    callDeleteLinkMutation,
    deleteLinkIsPending
  };
};
