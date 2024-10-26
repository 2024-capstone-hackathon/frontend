import QueryKeys from "@libraries/reactQuery/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useLikeLetter() {
  const queryClient = useQueryClient();

  return useMutation({
    // mutationFn: (id: number) => http.post("/like", { id }),
    mutationFn: (id: number) => Promise.resolve(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.LetterList] });
    },
  });
}
