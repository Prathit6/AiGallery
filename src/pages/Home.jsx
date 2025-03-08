import General from "../components/General";
import Header from "../components/Header";
import { useState } from "react";
function Home() {
  const [isGap, setIsGap] = useState(false);
  const [isPhotoClicked, setIsPhotoClicked] = useState(false);
  const toggleForPhotoClicked = () => setIsPhotoClicked(!isPhotoClicked);

  const toggleForIsGap = () => setIsGap((prev) => !prev);
  return (
    <div>
      <Header toggleForIsGap={toggleForIsGap} />
      <div className="m-5 pt-36">
        <General isGap={isGap} />
      </div>
    </div>
  );
}

export default Home;
