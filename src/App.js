import React, { useState, useEffect } from "react";
import { Header, Plugins, Categories, Selector } from "./components";
import useFetchData from "./useFetchData";

const App = () => {
  const [searchValue, setSearchValue] = useState("Plugins");

  const { plugins, skills, errorText } = useFetchData(
    "http://localhost:8000/skills"
  );

  return (
    <>
      <Header />
      {errorText}
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
