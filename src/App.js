import Body from "./Components/Body";
import Header from "./Components/Head";
import "./index.css"
import { Provider } from "react-redux";
import Store from "./utils/Store";



function App() {
  return (
    <Provider store={Store}>
      <div>
        <Header />
        <Body />
      </div>
    </Provider>
  );
}

export default App;
