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
  const [genre, setGenre] = useState([]);

  const showFilm = (nome, genere) => {
    fetch(`https://api.themoviedb.org/3/search/movie?query=${nome}`, options)
      .then((res) => res.json())
      .then((res) => {
        console.log(genere);
        if (genere === "Nessuno") setFilm(res.results);
        else
          setFilm(
            res.results.filter((element) =>
              element.genre_ids.includes(parseInt(genere))
            )
          );
      })
      .catch((err) => console.error(err));
  };

  const showSerie = (nome, genere) => {
    fetch(`https://api.themoviedb.org/3/search/tv?query=${nome}`, options)
      .then((res) => res.json())
      .then((res) => {
        if (genere === "Nessuno") setSerie(res.results);
        else
          setSerie(
            res.results.filter((element) =>
              element.genre_ids.includes(parseInt(genere))
            )
          );
      })
      .catch((err) => console.error(err));
  };

  const fetchGenres = () => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((res) => res.json())
      .then((res) => {
        setGenre(res.genres);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  return (
    <NetflixContext.Provider
      value={{ film, showFilm, serie, showSerie, fetchGenres, genre }}
    >
      {children}
    </NetflixContext.Provider>
  );
};
