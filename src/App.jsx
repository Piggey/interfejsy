import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Bar } from "./pages/Bar";
import { Tickets } from "./pages/Tickets";
import { Birthdays } from "./pages/Birthdays";
import { Login } from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Layout>
        <Gallery />
      </Layout>
    ),
  },
  {
    path: "/bar",
    element: (
      <Layout>
        <Bar />
      </Layout>
    ),
  },
  {
    path: "/tickets",
    element: (
      <Layout>
        <Tickets />
      </Layout>
    ),
  },
  {
    path: "/birthdays",
    element: (
      <Layout>
        <Birthdays />
      </Layout>
    ),
  },
  {
    path: "/login",
    element: (
      <Layout>
        <Login />
      </Layout>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
