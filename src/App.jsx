import { useState } from "react";
import "./App.css";
import { PokeList } from "./components/PokeList";
import Search from "./components/Search";
import Filter from "./components/Filter";
function App() {
  return (
    <div>
      <Search/>
      <PokeList/>
      
    </div>
  );
}

export default App;
