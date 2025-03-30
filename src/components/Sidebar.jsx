import { FaRegImage, FaRegHeart, FaRegClock } from "react-icons/fa";
import { AiOutlineDelete, AiOutlineEyeInvisible } from "react-icons/ai";
import { BsClockHistory } from "react-icons/bs";
import { IoAlbumsOutline } from "react-icons/io5";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { RiLinksLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { GiPhotoCamera } from "react-icons/gi";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-64 h-screen fixed  bg-white text-gray-900 p-4 shadow-lg border-r mt-36 border-gray-200">
      <div className="mb-6">
        <h2 className="text-gray-600 text-sm font-semibold mb-2 uppercase">
          Photos
        </h2>
        <ul>
          <li
            onClick={() => navigate("/library")}
            className="flex items-center p-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer"
          >
            <MdOutlinePhotoLibrary className="mr-2 text-blue-500" /> Library
          </li>
          <li
            onClick={() => navigate("/like")}
            className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <FaRegHeart className="mr-2 text-red-500" /> Favourites
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <BsClockHistory className="mr-2 text-yellow-500" /> Recents
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-gray-600 text-sm font-semibold mb-2 uppercase">
          SMART FILTERS
        </h2>
        <ul>
          <li
            onClick={() => navigate("/people")}
            className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <FaUserFriends className="mr-2 text-green-500" /> People
          </li>
          <li
            onClick={() => navigate("/objects")}
            className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <GiPhotoCamera className="mr-2 text-purple-500" /> Objects
          </li>
        </ul>
      </div>
      <div className="mb-6">
        <h2 className="text-gray-600 text-sm font-semibold mb-2 uppercase">
          Collections
        </h2>
        <ul>
          {/* <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaRegClock className="mr-2 text-green-500" /> Memories
          </li> */}
          <li
            onClick={() => navigate("/albums")}
            className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <IoAlbumsOutline className="mr-2 text-purple-500" /> Albums
          </li>
          {/* <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <FaRegImage className="mr-2 text-indigo-500" /> Media Types
          </li> */}
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <AiOutlineEyeInvisible className="mr-2 text-gray-500" /> Hidden
          </li>
          <li
            onClick={() => navigate("/recently-deleted")}
            className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <AiOutlineDelete className="mr-2 text-red-600" /> Recently Deleted
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-gray-600 text-sm font-semibold mb-2 uppercase">
          Sharing
        </h2>
        <ul>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <IoAlbumsOutline className="mr-2 text-teal-500" /> Shared Albums
          </li>
          <li className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer">
            <RiLinksLine className="mr-2 text-blue-500" /> iCloud Links
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
