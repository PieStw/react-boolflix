import { createContext, useState, useContext, useEffect } from "react";

const NetflixContext = createContext();

export const useNetflixContext = () => useContext(NetflixContext);

export const NetflixProvider = ({ children }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: import.meta.env.VITE_API_KEY,
    },
  };

  const [data, setData] = useState([]);

  const showFilm = (value) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}`, options)
      .then((res) => res.json())
      .then((res) => {
        setData(res.results);
      })
      .catch((err) => console.error(err));
  };

  const showSeries = (value) => {
    fetch(`https://api.themoviedb.org/3/search/tv?query=${value}`, options)
      .then((res) => res.json())
      .then((res) => {
        const film = res.results;
        const data2 = { ...data, film };
        setData(data2);
      })
      .catch((err) => console.error(err));
  };

  return (
    <NetflixContext.Provider value={{ data, showFilm, showSeries }}>
      {children}
    </NetflixContext.Provider>
  );
};
