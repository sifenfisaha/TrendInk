import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import MyProfile from "./pages/profile/MyProfile";
import Authentication from "./pages/Authentication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "auth", element: <Authentication /> },
      { path: "post/:postId", element: <PostDetail /> },
      { path: "trending", element: <Trending /> },
      { path: "search", element: <Search /> },
      { path: "profile", element: <MyProfile /> },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
