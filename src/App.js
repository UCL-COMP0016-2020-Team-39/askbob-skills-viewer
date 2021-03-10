import React from "react";
import { Header, Skills, Plugins } from "./components";
import data from "./data";

const App = () => {
  const { plugins, skills } = data;
  return (
    <>
      <Header />
      <Plugins plugins={plugins} skills={skills} />
    </>
  );
};

export default App;
