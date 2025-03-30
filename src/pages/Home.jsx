import General from "../components/General";
import Header from "../components/Header";
import { useState } from "react";

function Home() {
  const [isGap, setIsGap] = useState(false);

  const toggleForIsGap = () => setIsGap((prev) => !prev);

  return (
    <div className="px-3 transition-all duration-300"> {/* Removed pt-12 */}
      <Header toggleForIsGap={toggleForIsGap} />
      <General isGap={isGap} />
    </div>
  );
}

export default Home;
