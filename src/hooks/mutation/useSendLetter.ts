import useUserStorage from "@hooks/storage/useUserStorage";
import QueryKeys from "@libraries/reactQuery/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export interface LetterFormData {
  text: string;
}

export default function useSendLetter() {
  const queryClient = useQueryClient();
  const [user] = useUserStorage();

  return useMutation({
    mutationFn: ({ text }: LetterFormData) => Promise.resolve(),
    // http.post("/letter", {
    //   title: text,
    //   datetime: new Date(),
    //   age: user?.age ?? 30,
    // }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeys.LetterList] });
    },
  });
}
