import QueryKeys from "@libraries/reactQuery/queryKeys";
import { useSuspenseQuery } from "@tanstack/react-query";

export type Echo = {
  content: string;
  story_id: number;
  age: number;
};

export default function useSuspenseGetEchoList() {
  return useSuspenseQuery<Echo[]>({
    queryKey: [QueryKeys.EchoList],
    // queryFn: () => http.get(`/eco`),
    queryFn: () =>
      new Promise(resolve => {
        setTimeout(() => resolve(echoList), 2000);
      }),
  });
}

const echoList = [
  {
    story_id: 1,
    content:
      "세상에는 다양한 시각이 존재합니다. 때로는 남들과 다른 길을 걷는 것이 두려울 수 있지만, 그 과정에서 스스로에 대한 믿음을 키워가세요. 모든 경험은 결국 당신만의 이야기를 완성해 줄 겁니다.",
    age: 30,
  },
  {
    story_id: 2,
    content:
      "인생은 마치 등산과도 같아요. 목표에 집중하는 것도 중요하지만, 길을 오르면서 주변의 풍경도 즐겨보세요. 그러다 보면 힘들 때마다 새로운 에너지를 얻고, 도착한 정상에서의 기쁨이 더 커질 거예요.",
    age: 50,
  },
  {
    story_id: 3,
    content:
      "가끔은 쉬어가는 것도 필요합니다. 무언가에 지나치게 몰두하다 보면 오히려 중요한 것을 놓칠 수 있어요. 자신에게 휴식을 허락하고, 나아갈 에너지를 충분히 충전해보세요.",
    age: 40,
  },
  {
    story_id: 4,
    content:
      "사람들과 소통하는 것은 관계를 유지하는 데 아주 중요한 요소입니다. 때로는 의견이 다를 수 있지만, 그 또한 서로를 이해하는 기회로 삼아보세요. 다양한 관점은 우리를 더 넓은 세계로 이끌어 줍니다.",
    age: 20,
  },
  {
    story_id: 5,
    content:
      "삶의 길이는 우리의 통제 밖에 있지만, 그 깊이는 우리가 만들어갈 수 있습니다. 하루하루 소중하게, 자신이 의미를 부여할 수 있는 일들을 해나가세요. 그 길 위에서 행복을 찾을 수 있을 겁니다.",
    age: 60,
  },
];
