import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Blog from "./Blog/Blog";
import Main from "./layouts/Main";
import Statistics from "./Statistics/Statistics";
import Topics from "./Topics/Topics";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: () => fetch("https://openapi.programming-hero.com/api/quiz"),
          element: <Topics></Topics>,
        },
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/blogs",
          element: <Blog></Blog>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
