import { useState } from "react";
import photos from "../data/photos";
import { useNavigate } from "react-router-dom";

function General({ isGap }) {
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);
  const toggleForPhotoClicked = () => setIsPhotoClicked(!isPhotoClicked);
  const navigate = useNavigate();
  function handleClick() {
    navigate("/fullimage");
  }
  return (
    <div
      className={`grid sm:grid-cols-5 lg:grid-cols-5 ${
        isGap ? "gap-[5px]" : "gap-0"
      } justify-center items-center`}
    >
      {photos.map((photo) => (
        <div
          key={photo.id}
          className={isGap ? "rounded-lg p-2  overflow-hidden" : ""}
        >
          <img
            src={photo.url}
            alt={photo.title}
            className={`object-${isGap ? "contain" : "cover"} 
            lg:w-full lg:h-[300px] cursor-pointer
            sm:w-full  sm:h-[${isGap ? "200px " : "150px border border-black border-opacity-80 "}] 
            ${isGap ? "rounded-md" : ""}`}
            onClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
}

export default General;
{
  /* <div className="grid sm:grid-cols-5   justify-center items-center gap-[5px] lg:grid-cols-5 ">
      {photos.map((photo) => (
        <div key={photo.id} className=" rounded-lg p-2 overflow-hidden">
          <img
            src={photo.url}
            alt={photo.title}
            className="lg:w-[300px] lg:h-[300px] sm:w-[500px] sm:h-[200px] object-contain rounded-md rounded-md"
          />
        </div>
      ))}
    </div> */
}
