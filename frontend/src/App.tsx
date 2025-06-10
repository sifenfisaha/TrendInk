import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostDetail from "./pages/PostDetail";
import Trending from "./pages/Trending";
import Search from "./pages/Search";
import MyProfile from "./pages/profile/MyProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "signup", element: <Signup /> },
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
