import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"; 
import Header from "./Header";
import FullImage from "./FullImage ";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/fullimage",
    element: (
      <div>
        <Header />
        <div className="mt-[178px]"> 
          <FullImage />
        </div>
      </div>
    ),
  },
]);

export default Routes;


