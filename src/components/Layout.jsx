import { useState } from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const commonPaddingTop = "pt-20";

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);  // Toggle sidebar visibility
  };

  return (
    <div className="flex h-screen">
      <div
        className={`fixed left-0 top-0 h-full bg-white shadow-lg transition-all duration-300 z-40 
          ${isSidebarOpen ? "w-64" : "w-0 overflow-hidden"}`}
      >
        {isSidebarOpen && <Sidebar />}
      </div>

      <div className={`flex-1 flex flex-col transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}>
        <Header toggleSidebar={toggleSidebar} />  {/* Pass toggleSidebar here */}

        <div className={`flex-1 px-6 ${commonPaddingTop} transition-all duration-300`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;



