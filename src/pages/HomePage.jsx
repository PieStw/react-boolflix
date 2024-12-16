import { useNetflixContext } from "../contex/NetflixContext";
import Card from "../components/card/Card";

export default function HomePage() {
  const { film, serie } = useNetflixContext();

  console.log(film);
  console.log(serie);

  return (
    <>
      <h1>FILM</h1>

      {film.length > 0 ? (
        film.map((element) => (
          <div key={element.id}>
            <Card bool={true} element={element}></Card>
          </div>
        ))
      ) : (
        <p>Nessun film trovato</p>
      )}

      <hr />
      <h1>SERIE TV</h1>

      {serie.length > 0 ? (
        serie.map((element) => (
          <div key={element.id}>
            <Card bool={false} element={element}></Card>
          </div>
        ))
      ) : (
        <p>Nessun film trovato</p>
      )}
    </>
  );
}
