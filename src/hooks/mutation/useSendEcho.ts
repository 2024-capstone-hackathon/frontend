import useDailyAnsweredStorage from "@hooks/storage/useDailyAnsweredStorage";
import RoutePath from "@routes/routePath";
import { useMutation } from "@tanstack/react-query";

export interface LinkFormData {
  text: string;
}

export default function useSendEcho() {
  const [, setIsAnswered] = useDailyAnsweredStorage();

  return useMutation({
    // mutationFn: (data: LinkFormData) => http.post("/text", data),
    mutationFn: (data: LinkFormData) => Promise.resolve(),
    onSuccess: () => {
      setIsAnswered(true);
      window.location.href = RoutePath.Index;
    },
  });
}
