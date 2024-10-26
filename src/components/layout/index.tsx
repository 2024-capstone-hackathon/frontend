import Logo from "@components/layout/header/Logo";
import { Outlet } from "react-router-dom";
import { Separator } from "@components/ui/separator";
import { Link } from "react-router-dom";
import RoutePath from "@routes/routePath";
import useInitialize from "@hooks/useInitialize";
import SearchButton from "@components/layout/header/SearchButton";
import CreateButton from "@components/layout/header/CreateButton";

export default function Layout() {
  useInitialize();

  return (
    <div className="relative flex h-screen min-w-max flex-col overflow-hidden">
      <div className="sticky top-0 z-50 flex justify-between px-8 py-6 h-14 items-center">
        <Link to={RoutePath.Index} className="w-[150px]">
          <Logo />
        </Link>
        <div className="flex gap-5">
          <SearchButton />
          <Separator orientation="vertical" />
          <CreateButton />
        </div>
        <div className="w-[150px]" />
      </div>
      <Separator className="opacity-40" />
      <main className="flex flex-grow flex-col justify-between overflow-scroll">
        <Outlet />
      </main>
    </div>
  );
}
