import useDailyAnsweredStorage from "@hooks/storage/useDailyAnsweredStorage";
import useUserStorage from "@hooks/storage/useUserStorage";
import RoutePath from "@routes/routePath";
import { useMutation } from "@tanstack/react-query";

export interface LinkFormData {
  content: string;
  letterId: number;
}

export default function useSendEcho() {
  const [user] = useUserStorage();
  const [, setIsAnswered] = useDailyAnsweredStorage();

  return useMutation({
    // mutationFn: ({ letterId, content }: LinkFormData) =>
    // http.post("/eco", { letterId, content, datetime: new Date(), age: user?.age ?? 30 }),
    mutationFn: ({}: LinkFormData) => Promise.resolve(),
    onSuccess: () => {
      setIsAnswered(true);
      window.location.href = RoutePath.Index;
    },
  });
}
