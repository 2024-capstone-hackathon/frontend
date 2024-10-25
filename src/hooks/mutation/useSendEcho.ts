import { BASE_URL } from "@constants/environments";
import useDailyAnsweredStorage from "@hooks/storage/useDailyAnsweredStorage";
import useUserStorage from "@hooks/storage/useUserStorage";
import { useMutation } from "@tanstack/react-query";

export interface LinkFormData {
  text: string;
}

export default function useSendEcho() {
  const [user] = useUserStorage();
  const [, setIsAnswered] = useDailyAnsweredStorage();

  return useMutation({
    mutationFn: ({ text }: LinkFormData) =>
      // http.post("/prediction/0df93ec4-0a88-435f-ab7e-f38396cb9f4e", {
      //   question: { title: text, datetime: "2024-04-27T10:30:00", age: user?.age ?? 30 },
      // }),
      fetch(`${BASE_URL}/0df93ec4-0a88-435f-ab7e-f38396cb9f4e`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: text, datetime: new Date(), age: user?.age ?? 30 }),
      }),
    onSuccess: () => {
      setIsAnswered(true);
      // window.location.href = RoutePath.Index;
    },
  });
}
