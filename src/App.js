import React, { useState, useEffect } from "react";
import { Header, Plugins, Categories, Selector } from "./components";
import useFetchData from "./useFetchData";
import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const App = () => {
  const [sortBy, setSortBy] = useState("Plugins");
  const [url, setUrl] = useState("");
  const { plugins, skills, errorText } = useFetchData(url);

  const classes = useStyles();

  return (
    <>
      <Header />
      <Typography className={classes.errorText}>{errorText}</Typography>
      <Selector
        sortBy={sortBy}
        setSortBy={setSortBy}
        url={url}
        setUrl={setUrl}
      />
      {sortBy === "Plugins" ? (
        <Plugins plugins={plugins} skills={skills} />
      ) : (
        <Categories skills={skills} />
      )}
    </>
  );
};

export default App;
