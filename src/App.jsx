import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Bar } from "./pages/Bar";
import { Tickets } from "./pages/Tickets";
import { BirthdayReservations } from "./pages/BirthdayReservations";
import { Login } from "./pages/Login";
import { History } from "./pages/History";

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
        <BirthdayReservations />
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
  {
    path: "/history",
    element: (
      <Layout>
        <History />
      </Layout>
    ),
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
