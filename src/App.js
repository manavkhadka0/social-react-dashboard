import Header from "./components/Header";
import Topcard from "./components/Topcard";
import "./css/global.css";

function App() {
  return (
    <div className="app">
      <div className="appBackground"></div>
      <div className="container">
        <div className="headerContainer">
          <Header />
        </div>
        <div className="topCardContainer">
          <Topcard
            username={"@manavkhadka0"}
            followers={"1234"}
            text={"followers"}
          />
          <Topcard
            username={"@manavkhadka0"}
            followers={"1234"}
            text={"followers"}
          />
          <Topcard
            username={"@manavkhadka0"}
            followers={"1234"}
            text={"followers"}
          />
          <Topcard
            username={"@manavkhadka0"}
            followers={"1234"}
            text={"subscribers"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
