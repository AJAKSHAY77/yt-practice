import Body from "./Components/Body";
import Header from "./Components/Head";
import "./index.css"
import { Provider } from "react-redux";
import Store from "./utils/Store";
import {createBrowserRouter,  RouterProvider } from "react-router-dom"
import Maincontainer from "./Components/Maincontainer";
import Watchpage from "./Components/Watchpage";

const approuter = createBrowserRouter([
  {
    path:"/",
    element: <Body/>,
    children: [
      {
      path:"/",
     element:<Maincontainer/>

      },
      {
        path:"watch",
        element:<Watchpage/>
      }
    ],
  },
]);

function App() {
  

  return (
    <Provider store={Store}>
      <div>
        <Header />
       <RouterProvider router={approuter}/>
      </div>
    </Provider>
  );
}

export default App;
