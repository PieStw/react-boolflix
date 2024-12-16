import { createContext, useState, useContext } from "react";

const NetflixContext = createContext();

export const useNetflixContext = () => useContext(NetflixContext);

export const NetflixProvider = ({ children }) => {
  const [data, setData] = useState({});

  return (
    <NetflixContext.Provider value={data}>{children}</NetflixContext.Provider>
  );
};
