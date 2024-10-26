import QueryKeys from "@libraries/reactQuery/queryKeys";
import { useSuspenseQuery } from "@tanstack/react-query";

export type Letter = {
  text: string;
  age: number;
  count: number;
  isLiked: boolean;
};

export default function useSuspenseGetLetterList() {
  return useSuspenseQuery<Letter[]>({
    queryKey: [QueryKeys.LetterList],
    // queryFn: () => http.get(`/user?access_token=${token}`),
    queryFn: () => Promise.resolve(letterList),
  });
}

const letterList = [
  {
    text: "요즘 들어 인생의 방향에 대한 고민이 깊어지고 있습니다. 안정적이지만 내 꿈에 맞는지 계속 의문이 들어요.",
    count: 42,
    age: 30,
    isLiked: false,
  },
  {
    text: "새로운 도전을 하고 싶은데, 지금의 안정적인 자리를 포기할 수 있을지 두려워요.",
    count: 35,
    age: 28,
    isLiked: true,
  },
  {
    text: "점점 일을 통해 성장하는 느낌을 받지 못하고 있어요. 진짜 원하는 게 뭔지 알고 싶은데 쉽지 않네요.",
    count: 56,
    age: 25,
    isLiked: true,
  },
  {
    text: "학창 시절에는 목표가 분명했지만, 이제는 방향을 잃은 것 같아 무기력해지곤 해요.",
    count: 48,
    age: 22,
    isLiked: false,
  },
  {
    text: "진정으로 의미 있는 일을 하고 싶은데, 현실적인 이유들 때문에 망설이고 있습니다.",
    count: 60,
    age: 35,
    isLiked: false,
  },
  {
    text: "삶의 방향을 다시 잡아야 할 것 같은데, 어디서부터 시작해야 할지 막막해요.",
    count: 39,
    age: 40,
    isLiked: false,
  },
  {
    text: "현재의 안정적인 직장과 하고 싶은 일 사이에서 갈등이 생기고 있어요.",
    count: 52,
    age: 33,
    isLiked: false,
  },
  {
    text: "시간이 갈수록 새로운 경험을 쌓는 것에 대한 갈증이 커지는데, 막상 실행이 두렵네요.",
    count: 29,
    age: 27,
    isLiked: false,
  },
  {
    text: "내 인생에서 무엇을 진정으로 이루고 싶은지 점점 더 많은 고민이 쌓입니다.",
    count: 47,
    age: 26,
    isLiked: false,
  },
  {
    text: "언제까지 안정적인 일만 추구해야 하는지, 새로운 길을 열어보고 싶어요.",
    count: 44,
    age: 32,
    isLiked: false,
  },
  {
    text: "직업의 안정성보다 내 자신에게 맞는 일을 찾고 싶은데, 사회적 시선이 부담스럽네요.",
    count: 40,
    age: 29,
    isLiked: false,
  },
  {
    text: "나이가 들어가면서 정말로 의미 있는 일을 찾고 싶어요. 어떻게 하면 더 나은 길을 선택할 수 있을까요?",
    count: 53,
    age: 38,
    isLiked: false,
  },
  {
    text: "어렸을 땐 큰 꿈이 있었지만, 점점 현실에 순응하게 되는 제 모습이 낯설게 느껴집니다.",
    count: 34,
    age: 24,
    isLiked: false,
  },
];
