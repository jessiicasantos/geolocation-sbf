import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import News from "./components/News/News";
import Offers from "./components/Offers/Offers";
import Stores from "./components/Stores/Stores";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Offers />
        <Stores />
        <News />
      </div>
      <Footer />
    </div>
  );
}

export default App;
