import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const extraPadding = location.pathname === "/fullimage"
    ? "pt-48" // Extra padding for FullImage
    : location.pathname === "/recently-deleted"
    ? "pt-40"
    : location.pathname === "/albums" || location.pathname === "/objects"
    ? "pt-36"
    : "pt-24";

  return (
    <div className="flex h-screen">
      <div
        className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-40 
          ${isSidebarOpen ? "w-64" : "w-0 overflow-hidden"}`}
      >
        {isSidebarOpen && <Sidebar />}
      </div>

      <div className="flex-1 flex flex-col transition-all duration-300">
        <Header toggleSidebar={() => setIsSidebarOpen((prev) => !prev)} />

        <div className={`flex-1 px-6 ${extraPadding} transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;


