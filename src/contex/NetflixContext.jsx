import { createContext, useState, useContext, useEffect } from "react";

const NetflixContext = createContext();

export const useNetflixContext = () => useContext(NetflixContext);

export const NetflixProvider = ({ children }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjkyNGRhMzYxYjNlZGVkMzRkNGQ3OWJkMTAwYzUxNSIsIm5iZiI6MTczNDM0Nzg5OS43Niwic3ViIjoiNjc2MDBjN2I2MmY5MGM5OGUzZTI0MDI2Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.3_-hZh8TUj00aDkxejtClG7dpJwUXdvTRA-_ZSa6wg8",
    },
  };

  const [film, setFilm] = useState([]);
  const [serie, setSerie] = useState([]);

  const showFilm = (value) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${value}`, options)
      .then((res) => res.json())
      .then((res) => {
        setFilm(res.results);
      })
      .catch((err) => console.error(err));
  };

  const showSerie = (value) => {
    fetch(`https://api.themoviedb.org/3/search/tv?query=${value}`, options)
      .then((res) => res.json())
      .then((res) => {
        setSerie(res.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <NetflixContext.Provider value={{ film, showFilm, serie, showSerie }}>
      {children}
    </NetflixContext.Provider>
  );
};
