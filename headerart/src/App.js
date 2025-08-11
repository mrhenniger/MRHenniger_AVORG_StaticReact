//import logo from "./logo.svg";
import "./App.css";
import HeaderArtAbout from "./HeaderArtAbout";
import HeaderArtAirframeDossier from "./HeaderArtAirframeDossier";
import HeaderArtAirframeSearch from "./HeaderArtAirframeSearch";
import HeaderArtBase from "./HeaderArtBase";
import HeaderArtCalendar from "./HeaderArtCalendar";
import HeaderArtContact from "./HeaderArtContact";
import HeaderArtFaqs from "./HeaderArtLocationSearch";
import HeaderArtHome from "./HeaderArtHome";
import HeaderArtLocationDossier from "./HeaderArtLocationDossier";
import HeaderArtLocationSearch from "./HeaderArtLocationSearch";
import ReactDOMServer from "react-dom/server";

function App() {
  const containerStytle = { width: "600px", height: "338px" };
  return (
    <div className="App">
      <div style={{ ...containerStytle }}>
        <HeaderArtAbout></HeaderArtAbout>
        <HeaderArtAirframeDossier></HeaderArtAirframeDossier>
        <HeaderArtAirframeSearch></HeaderArtAirframeSearch>
        <HeaderArtCalendar></HeaderArtCalendar>
        <HeaderArtContact></HeaderArtContact>
        <HeaderArtFaqs></HeaderArtFaqs>
        <HeaderArtHome></HeaderArtHome>
        <HeaderArtLocationDossier></HeaderArtLocationDossier>
        <HeaderArtLocationSearch></HeaderArtLocationSearch>
      </div>
    </div>
  );
}

export default App;
