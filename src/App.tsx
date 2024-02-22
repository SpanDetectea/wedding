import "./App.scss";
import Calendar from "./components/Calendar/Calendar";
import Contacs from "./components/Contacts/Contacs";
import Header from "./components/Header/Header";
import Invite from "./components/Invite/Invite";
import Location from "./components/Location/Location";
import Plane from "./components/Plane/Plane";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_wrapper">
        <Invite />
        <Calendar />
        <Plane />
        <Contacs />
        <Location />
      </div>
    </div>
  );
}

export default App;
