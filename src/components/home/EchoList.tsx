import useSuspenseGetEchoList from "@hooks/query/useGetEchoList";

export default function EchoList() {
  const { data: echoList } = useSuspenseGetEchoList();

  return (
    <div className="flex flex-col gap-10">
      {echoList.map(echo => (
        <div key={echo.content} className="w-[500px] p-5 rounded-3 border border-[#8A5A5A80]">
          <p className="text-detail-1">{echo.content}</p>
          <p className="text-detail-3 text-[#4B3F3B70] text-end">
            - {echo.age}대가 전하는 메아리 -
          </p>
        </div>
      ))}
    </div>
  );
}
