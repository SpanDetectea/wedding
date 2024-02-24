import "./App.scss";
import Calendar from "./components/Calendar/Calendar";
import Contacs from "./components/Contacts/Contacs";
import Details from "./components/Details/Details";
import DressCode from "./components/DressCode/DressCode";
import Header from "./components/Header/Header";
import Invite from "./components/Invite/Invite";
import Location from "./components/Location/Location";
import Photo from "./components/Photo/Photo";
import Plane from "./components/Plane/Plane";
import WorkSheet from "./components/WorkSheet/WorkSheet";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_wrapper">
        <Invite />
        <Calendar />
        <Plane />
        <Location />
        <DressCode />
        <Details />
        <WorkSheet />
        <Contacs />
        <Photo />
      </div>
    </div>
  );
}

export default App;
