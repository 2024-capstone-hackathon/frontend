import { letterQueryOptions } from "@hooks/query/useGetLetter";
import { queryClient } from "@libraries/reactQuery/ReactQuerySetting";
import RoutePath from "@routes/routePath";
import { defer } from "lodash";
import { redirect } from "react-router-dom";

export default async function home() {
  try {
    const letter = await queryClient.ensureQueryData(letterQueryOptions());

    return defer(() => ({ user: letter }));
  } catch (error) {
    console.error("home error", error);
    return redirect(RoutePath.Login);
  }
}
