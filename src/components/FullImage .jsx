import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
import linkedinLogo from "../assets/linkedin.png";
import xLogo from "../assets/twitter.png";
import waLogo from "../assets/whatsapp.png";
import mediumLogo from "../assets/medium.png";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const FullImage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const photo = location.state?.photo;

  if (!photo) {
    return <p>First Upload an image then open!</p>;
  }
  const [isShare, setIsShare] = useState(false);
  const toggle = () => setIsShare(!isShare);
  return (
    <div className="full-image-container ">
      <FontAwesomeIcon
        onClick={() => navigate(-1)}
        icon={faBackward}
        className="text-2xl pl-11 text-blue-500"
      />
      <FontAwesomeIcon
        icon={faArrowUpFromBracket}
        onClick={toggle}
        className="text-2xl ml-6 text-blue-500"
      />
      {isShare && (
  <div className="fixed flex inset-0 items-center justify-center bg-black bg-opacity-50">
  <div className="relative bg-white shadow-lg rounded-lg p-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 w-0 sm:w-96">
    
    
    <FontAwesomeIcon 
      icon={faXmark}  
      onClick={toggle}
      className="absolute top-2 left-2 text-xl cursor-pointer"
    />

  
    <div className="flex flex-col pt-5 items-center">
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" className="w-12 h-12" />
      </a>
      <p className="text-sm font-medium">LinkedIn</p>
    </div>

    
    <div className="flex flex-col pt-5 items-center">
      <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
        <img src={xLogo} alt="X" className="w-12 max-w-none h-12 " />
      </a>
      <p className="text-sm font-medium">X</p>
    </div>

    
    <div className="flex flex-col pt-5 items-center">
      <a href="https://www.medium.com" target="_blank" rel="noopener noreferrer">
        <img src={mediumLogo} alt="Medium" className="w-12 h-12" />
      </a>
      <p className="text-sm font-medium">Medium</p>
    </div>

    
    <div className="flex flex-col pt-5 items-center">
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
        <img src={waLogo} alt="WhatsApp" className="w-12 h-12" />
      </a>
      <p className="text-sm font-medium">WhatsApp</p>
    </div>
  



    </div>
  </div>
)}

     

      <div className="flex justify-center  mb-8">
        <h1 className="font-bold text-4xl font-[opl3]">{photo.dateAdded}</h1>
      </div>

      <div className="flex justify-center  ">
        <img
          src={photo.url}
          alt={photo.title}
          className="h-[530px] flex justify-center flex-row"
        />
        {/* <p>{photo.title}</p> */}
      </div>
    </div>
  );
};

export default FullImage;
