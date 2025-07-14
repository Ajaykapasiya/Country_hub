import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";

import "./App.css";

import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "country",
        element: <Country />,
      },

      {
        path: "contact",
        element: <Contact />,
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
