import React, { useState, useEffect } from "react";
import { Header, Plugins, Categories, Selector } from "./components";
import useFetchData from "./useFetchData";

import { Typography } from "@material-ui/core";

import useStyles from "./styles";
import { useHistory } from "react-router-dom";

import { decode } from "querystring";

const App = () => {
  const [sortBy, setSortBy] = useState("Plugins");
  const history = useHistory();
  const [url, setUrl] = useState(history?.location?.search || "");
  const { plugins, skills, errorText, loading } = useFetchData(url);

  const classes = useStyles();

  useEffect(() => {
    const search = history?.location?.search || "";
    const searchTerms = decode(search.substring(1));

    let newUrl = searchTerms?.url || "";

    try {
      newUrl = decodeURI(newUrl);
    } catch (err) {
      console.log(err);
    }
    setUrl(newUrl);
  }, [history]);
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
