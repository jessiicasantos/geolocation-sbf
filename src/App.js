import "./App.css";
import Header from "./components/Header/Header";
import Offers from "./components/Offers/Offers";
import Stores from "./components/Stores/Stores";

function App() {
  return (
    <div className="App container">
      <Header />
      <Offers />
      <Stores />
    </div>
  );
}

export default App;
