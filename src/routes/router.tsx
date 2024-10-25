import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import RoutePath from "@routes/routePath";
import AuthProvider from "@/context/auth";
import ErrorPage from "@pages/error/ErrorPage";
import { Suspense } from "react";
import GlobalFallback from "@components/layout/pending/GlobalFallback";
import Layout from "@components/layout/index";
import NotFoundErrorPage from "@pages/error/NotFoundErrorPage";
import root from "@routes/loader/root";
import HomePage from "@pages/HomePage";
import home from "@routes/loader/home";

const routes: RouteObject[] = [
  {
    path: RoutePath.Index,
    loader: root,
    errorElement: <ErrorPage message="알 수 없는 오류가 발생했어요!" />,
    element: (
      <Suspense fallback={<GlobalFallback />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        element: (
          <AuthProvider>
            <Layout />
          </AuthProvider>
        ),
        children: [
          {
            index: true,
            loader: home,
            errorElement: <ErrorPage message="알 수 없는 오류가 발생했어요!" />,
            element: <HomePage />,
          },
        ],
      },
    ],
  },
  {
    path: RoutePath.Login,
    element: <div>login</div>,
  },
  {
    path: "*",
    element: <NotFoundErrorPage />,
  },
];

const Router = createBrowserRouter(routes);

export default Router;
