import { BASE_URL } from "@constants/environments";
import QueryKeys from "@libraries/reactQuery/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useLikeLetter() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () =>
      fetch(`${BASE_URL}/0df93ec4-0a88-435f-ab7e-f38396cb9f4e`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.LetterList] });
    },
  });
}
