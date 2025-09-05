import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const dataContext = createContext();

const Context = (props) => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    const apiCall = async () => {
      const getData = await axios.get(
        "https://mocki.io/v1/2db2df71-6074-4e1c-8459-f9a74b971b9b"
      );
      setdata(getData.data);
    };
    apiCall();
  }, []);

  return (
    <dataContext.Provider value={{ data, setdata }}>
      {props.children}
    </dataContext.Provider>
  );
};

export default Context;
