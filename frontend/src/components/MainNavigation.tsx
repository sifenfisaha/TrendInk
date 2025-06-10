import { Home, Search, User, Flame, LogIn } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";

const MainNavigation: React.FC = () => {
  const user = useAppSelector((state) => state.auth.user);
  const navItems = [
    { path: "/", icon: <Home />, label: "Home" },
    { path: "/search", icon: <Search />, label: "Search" },
    { path: "/trending", icon: <Flame />, label: "Trending" },
    // Conditional items
    user
      ? { path: "/profile", icon: <User />, label: "Profile" }
      : { path: "/login", icon: <LogIn />, label: "Login" },
  ];

  return (
    <nav className="fixed bottom-10 left-0 w-full flex items-center justify-center z-50">
      <ul className="flex border-black border justify-center rounded-full gap-20 w-fit items-center h-16 px-6">
        {navItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `transition-all duration-200 ease-in-out p-2 ${
                isActive
                  ? "bg-black  text-white rounded-full"
                  : "text-gray-700  hover:text-gray-500"
              }`
            }
            title={item.label}
          >
            {item.icon}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
