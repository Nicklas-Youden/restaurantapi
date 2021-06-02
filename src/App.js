import './App.css';
import Home from "./views/Home/Home";
import Details from "./views/Details";
import { Router } from "@reach/router";
import CategoryContext from "./contexts/CategoryContext";
import { useState } from "react";

function App() {
  var categoryState = useState(null);
  return (
    <>
    	<CategoryContext.Provider value={categoryState}>
        <Router>
          <Home path="/"/>
          <Details path="/details" />
        </Router>
      </CategoryContext.Provider>  
    </>
  );
}

export default App;
