import React, {useEffect, useState} from "react";
import CharacterList from "./js/component/CharacterList.jsx";
import NavBar from "./js/component/NavBar.jsx";
import SearchBar from "./js/component/SearchBar.jsx";


function App() {

  return (
    <div className="text-center bg-dark text-white">
      <h1 className="mb-4 display-1">Rick and Morty Rolodex</h1>

      <CharacterList /> 
  
    </div>
  );
}

export default App;
