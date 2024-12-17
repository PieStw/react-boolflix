import { useNetflixContext } from "../contex/NetflixContext";
import Card from "../components/card/Card";
import styles from "../assets/css/HomePage.module.css";

export default function HomePage() {
  const { film, serie } = useNetflixContext();

  console.log(film);

  return (
    <>
      <h1 className={styles.filmTitle}>FILM</h1>

      <div className={styles.films}>
        {film.length > 0 ? (
          film.map((element) => (
            <div key={element.id}>
              <Card bool={true} element={element}></Card>
            </div>
          ))
        ) : (
          <p>Nessun film trovato</p>
        )}
      </div>

      <h1 className={styles.serieTitle}>SERIE TV</h1>
      <div className={styles.series}>
        {serie.length > 0 ? (
          serie.map((element) => (
            <div key={element.id}>
              <Card bool={false} element={element}></Card>
            </div>
          ))
        ) : (
          <p>Nessun film trovato</p>
        )}
      </div>
    </>
  );
}
