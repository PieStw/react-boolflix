import { useNetflixContext } from "../contex/NetflixContext";

export default function HomePage() {
  const { film, serie } = useNetflixContext();

  console.log(film);
  console.log(serie);

  return (
    <>
      {film.map((film) => (
        <div key={film.id}>
          <h1>{film.title}</h1>
          <p>{film.original_title}</p>
          <p>
            {film.original_language}
            <img
              src={`https://flagsapi.com/${film.original_language.toUpperCase()}/flat/64.png`}
            />
          </p>
          <p>{film.vote_average}</p>
        </div>
      ))}

      <hr />

      {serie.map((serie) => (
        <div key={serie.id}>
          <h1>{serie.name}</h1>
          <p>{serie.original_name}</p>
          <p>
            {serie.original_language}
            <img
              src={`https://flagsapi.com/${serie.original_language.toUpperCase()}/flat/64.png`}
            />
          </p>
          <p>{serie.vote_average}</p>
        </div>
      ))}
    </>
  );
}
