import { useState, useEffect } from "react";

const useFetchData = url => {
  const [skills, setSkills] = useState([]);
  const [plugins, setPlugins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    const fetchData = async url => {
      try {
        setLoading(true);
        setErrorText("");
        const request = new Request(url);
        const response = await fetch(request);

        const data = await response.json();

        setSkills(data.skills);
        setPlugins(data.plugins);
      } catch (err) {
        setErrorText(err.message);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData(url);
  }, [url]);

  return { skills, plugins, loading, errorText };
};

export default useFetchData;
