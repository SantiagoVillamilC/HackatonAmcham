import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/home/home";
import NavMenu from "./components/nav/nav";
import Cabecera from "./components/header/header";
import ComponenteFooter from "./components/footer/footerComponent";

function App() {

  return (
    <>
      <NavMenu />
      <Cabecera />
      <Home />
      <ComponenteFooter/>
    </>
  );
}

export default App;
