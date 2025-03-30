import { useState } from "react";
import user from "../assets/profile_img.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlus, faCalendarDays, faCompress, faBars } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleForIsGap,toggleSidebar }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 shadow-md transition-all duration-500 z-50">
        <div className="text-lg sm:text-2xl lg:text-4xl font-[opl3] whitespace-nowrap">
          <h2 className="pl-0 font-bold hover:text-indigo-600 hover:tracking-wide transition-all duration-500">
            VisionAI
          </h2>
        </div>

        <div className="flex items-center align-middle gap-9">
          <FontAwesomeIcon icon={faPlus} className="text-xl size-10 text-gray-600 cursor-pointer hover:text-gray-800" />
          <img
            className="rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-cover"
            src={user}
            alt="User Profile"
            onClick={toggleForIsOpen}
          />
        </div>

        {isOpen && (
          <div className="fixed top-20 right-5 bg-white shadow-lg shadow-gray-300 sm:w-74 lg:w-80 sm:h-40 lg:h-40 rounded-lg">
            <div className="bg-gray-200 p-4 w-full">
              <p className="font-semibold">Prathit Dode</p>
              <p className="font-thin text-gray-500">prathitdode@gmail.com</p>
            </div>
            <div>
              <p className="p-4 w-full font-bold text-red-600 hover:text-red-800 transition-all flex items-center space-x-2">
                <FontAwesomeIcon icon={faCircleXmark} className="text-red-600 text-2xl" />
                <span>Sign Out</span>
              </p>
            </div>
          </div>
        )}
      </header>

      
      <div className="fixed top-[64px] sm:top-[74px] lg:top-[80px] left-0 right-0 w-full bg-gray-100 p-4 flex justify-start z-40 shadow-md">
        <div className="flex gap-4 align-middle">
         
          <FontAwesomeIcon
            icon={faBars}
            onClick={toggleSidebar}
            className="text-xl text-blue-600 hover:text-blue-800 cursor-pointer bg-gray-100 p-2 rounded-md shadow-sm transition-transform hover:scale-105 active:scale-95"
          />

          <FontAwesomeIcon
            icon={faCompress}
            onClick={toggleForIsGap}
            className="text-xl text-blue-600 hover:text-blue-800 cursor-pointer bg-gray-100 p-2 rounded-md shadow-sm transition-transform hover:scale-105 active:scale-95"
          />

          <FontAwesomeIcon
            icon={faCalendarDays}
            className="text-lg text-blue-600 hover:text-blue-800 cursor-pointer bg-gray-100 p-2 rounded-md shadow-sm transition-transform hover:scale-105 active:scale-95"
          />
        </div>
      </div>
    </>
  );
}

export default Header;
