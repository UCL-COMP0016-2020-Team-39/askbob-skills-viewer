import React, { useState, useEffect } from "react";
import { Header, Plugins, Categories, Selector } from "./components";
import data from "./data";

const App = () => {
  const [searchValue, setSearchValue] = useState("Plugins");

  const { plugins, skills } = data;
  return (
    <>
      <Header />
      <Selector searchValue={searchValue} setSearchValue={setSearchValue} />
      {searchValue === "Plugins" ? (
        <Plugins plugins={plugins} skills={skills} />
      ) : (
        <Categories skills={skills} />
      )}
    </>
  );
};

export default App;
