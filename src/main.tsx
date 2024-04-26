import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Navbar from "./components/navbar.tsx";
import Header from "./components/header.tsx";
import IndexPage from "./pages/index.tsx";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex w-full min-h-[calc(100vh-80px)]">
        <Navbar />

        <div className="flex flex-col gap-2 max-w-[1440px] w-full p-2 sm:p-4 md:p-10 h-fit">
          {children}
        </div>
      </main>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <IndexPage />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
