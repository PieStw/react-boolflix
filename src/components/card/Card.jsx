import React from "react";
import styles from "../../assets/css/Card.module.css";

export default function Card({ bool, element }) {
  const updateVoto = element.vote_average / 2;

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) stars.push("piena");
      else stars.push("vuota");
    }
    return stars;
  };

  return (
    <>
      {bool && (
        <div className={styles.card}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          ></img>
          <div className={styles.overlay}>
            <div className={styles.overlayContainer}>
              <h4 className="card-title">Titolo: {element.title}</h4>
              <h6 className="card-title">
                {" "}
                {element.original_title === element.title
                  ? ""
                  : `Titolo originale: ${element.original_title}`}
              </h6>
              <p className={styles.voto}>
                Voto:
                {renderStars(updateVoto).map((valore) => {
                  if (valore === "piena")
                    return <i class="fa-solid fa-star"></i>;
                  else return <i class="fa-regular fa-star"></i>;
                })}
              </p>

              <p className="card-text">
                Nazionalità:{" "}
                <p>
                  {element.original_language}{" "}
                  <img
                    src={`https://flagsapi.com/${element.original_language.toUpperCase()}/flat/64.png`}
                  />
                </p>
              </p>
              <p className="card-text">
                Sinossi:{" "}
                {element.overview.length > 0
                  ? element.overview
                  : "Sinossi non disponibile"}
              </p>
            </div>
          </div>
        </div>
      )}
      {!bool && (
        <div className={styles.card}>
          <img
            className={styles.img}
            src={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          ></img>
          <div className={styles.overlay}>
            <div className={styles.overlayContainer}>
              <h4 className="card-title">Titolo: {element.name}</h4>
              <h6 className="card-title">
                {" "}
                {element.original_name === element.name
                  ? ""
                  : `Titolo originale: ${element.original_name}`}
              </h6>
              <p className={styles.voto}>
                Voto:
                {renderStars(updateVoto).map((valore) => {
                  if (valore === "piena")
                    return <i class="fa-solid fa-star"></i>;
                  else return <i class="fa-regular fa-star"></i>;
                })}
              </p>

              <p className="card-text">
                Nazionalità:{" "}
                <p>
                  {element.original_language}{" "}
                  <img
                    src={`https://flagsapi.com/${element.original_language.toUpperCase()}/flat/64.png`}
                  />
                </p>
              </p>
              <p className="card-text">
                Sinossi:{" "}
                {element.overview.length > 0
                  ? element.overview
                  : "Sinossi non disponibile"}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
