import React from "react";
import "./App.css";
import {BrowserRouter,Router} from "react-router-dom";
import Dashboard from "./components/View/Dashboard.jsx";

function App() {
  return (
     <BrowserRouter>
    <div className="App">
   <Dashboard/>
    </div>
   
    </BrowserRouter>
  );
}

export default App;

