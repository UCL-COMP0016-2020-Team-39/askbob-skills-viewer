import React, { useState } from "react";
import { Header, Plugins, Categories, Selector } from "./components";
import useFetchData from "./useFetchData";

import { Typography } from "@material-ui/core";

import useStyles from "./styles";

const App = () => {
  const [sortBy, setSortBy] = useState("Plugins");
  const [url, setUrl] = useState("");
  const { plugins, skills, errorText, loading } = useFetchData(url);

  const classes = useStyles();

  if (loading) {
    return (
      <>
        <Header />
        <Selector
          sortBy={sortBy}
          setSortBy={setSortBy}
          url={url}
          setUrl={setUrl}
          errorText={errorText}
        />
        <Typography>Loading...</Typography>
      </>
    );
  }

  return (
    <>
      <Header />
      <Selector
        sortBy={sortBy}
        setSortBy={setSortBy}
        url={url}
        setUrl={setUrl}
        errorText={errorText}
      />

      {sortBy === "Plugins" ? (
        <Plugins plugins={plugins} skills={skills} />
      ) : (
        <Categories skills={skills} />
      )}
      <div className={classes.footer} />
    </>
  );
};

export default App;
