import { BASE_URL } from "@constants/environments";
import useUserStorage from "@hooks/storage/useUserStorage";
import QueryKeys from "@libraries/reactQuery/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface LinkFormData {
  text: string;
}

export default function useSendLetter() {
  const queryClient = useQueryClient();
  const [user] = useUserStorage();
  return useMutation({
    mutationFn: ({ text }: LinkFormData) =>
      fetch(`${BASE_URL}/0df93ec4-0a88-435f-ab7e-f38396cb9f4e`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: text, datetime: new Date(), age: user?.age ?? 30 }),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.LetterList] });
    },
  });
}
