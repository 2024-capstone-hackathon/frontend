import QueryKeys from "@libraries/reactQuery/queryKeys";
import { UseQueryOptions, useSuspenseQuery } from "@tanstack/react-query";

export default function useSuspenseGetLetter() {
  return useSuspenseQuery<{ text: string }>(letterQueryOptions());
}

const text =
  "요즘 들어 인생의 방향에 대한 고민이 점점 깊어지고 있습니다. 지금 하고 있는 일이 과연 나에게 맞는지, 그리고 앞으로 어떤 길을 걸어야 할지 막막하게 느껴질 때가 많아요. 학창 시절에는 목표가 분명했지만, 이제는 일상 속에서 그 목표가 조금씩 흐려지는 것 같아요. 시간이 지날수록 단순히 안정적인 직업이 중요한 게 아니라, 내가 진정으로 좋아하고 의미 있는 일을 하고 싶은 마음이 커지고 있어요. 하지만 내게 맞는 일이 무엇인지, 어떻게 하면 후회 없이 살아갈 수 있을지에 대한 답을 찾기가 쉽지 않네요. 새로운 도전을 하고 싶지만, 익숙한 환경을 벗어나기 두렵기도 하고, 주변에서는 안전한 길을 선택하라는 조언도 많습니다. 이런 고민을 풀어나가기 위해 어떻게 해야 할까요? 다양한 경험이 쌓일수록 나를 더 잘 알게 될까요, 아니면 더욱 더 많은 질문이 생겨날까요?";

export const letterQueryOptions = (): UseQueryOptions<{ text: string }> => ({
  queryKey: [QueryKeys.Letter],
  // queryFn: () => http.get(`/user?access_token=${token}`),
  queryFn: () => Promise.resolve({ text }),
});
