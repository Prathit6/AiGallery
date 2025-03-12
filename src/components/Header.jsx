import user from "../assets/profile_img.jpeg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faPlus, faCalendarDays, faCompress } from "@fortawesome/free-solid-svg-icons";

function Header({ toggleForIsGap }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleForIsOpen = () => setIsOpen(!isOpen);

  return (
    <>
    
      <header
        className="
          fixed top-0 bg-white right-0 w-full flex items-center 
          justify-between px-4 sm:px-6 lg:px-10 py-4 shadow-md
          transition-all duration-500 z-50
        "
      >
        <div className="text-lg sm:text-2xl lg:text-4xl font-[opl3] whitespace-nowrap">
          <h2 className="pl-0 font-bold hover:text-indigo-600 hover:tracking-wide transition-all duration-500">
          VisionAI 
          </h2>
        </div>

        <div className="flex items-center align-middle gap-9">
          <div>
            <FontAwesomeIcon icon={faPlus} className="text-xl size-10 text-gray-600 cursor-pointer hover:text-gray-800" />
          </div>
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

  
      <div
        className="
          fixed top-[64px] sm:top-[74px] lg:top-[80px] 
          w-full bg-gray-100 p-4 flex justify-start 
          z-40 shadow-md
        "
      >
        <div className="flex gap-8 align-middle">
          <FontAwesomeIcon icon={faCompress} onClick={toggleForIsGap} className="text-3xl text-blue-600 hover:text-blue-800 cursor-pointer" />
          <FontAwesomeIcon icon={faCalendarDays} className="text-2xl text-blue-600 hover:text-blue-800 size-10 cursor-pointer" />
        </div>
      </div>
    </>
  );
}

export default Header;
