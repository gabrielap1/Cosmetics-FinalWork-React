import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Makeup from "./pages/Makeup";
import Hair from "./pages/Hair";
import Skin from "./pages/Skin";
import Body from "./pages/Body";
import Gifts from "./pages/Gifts";
import backgroundImage from "./1440x600_Header_Desktop_MoFa_F2_2024.jpg";

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Ensure the background covers the entire viewport height
  };

  return (
    <div className="App" style={backgroundStyle}>
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/makeup" component={Makeup} />
            <Route path="/hair" component={Hair} />
            <Route path="/skin" component={Skin} />
            <Route path="/body" component={Body} />
            <Route path="/gifts" component={Gifts} />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
