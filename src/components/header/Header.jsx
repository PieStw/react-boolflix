import React, { useState } from "react";
import styles from "../../assets/css/Header.module.css";
import { useNetflixContext } from "../../contex/NetflixContext";

export default function Header() {
  const [data, setData] = useState("");

  const { showFilm, showSerie } = useNetflixContext();

  function handleSubmit(e) {
    e.preventDefault();
    showFilm(data);
    showSerie(data);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>BOOLFLIX</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Inserisci il nome"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-danger">
                  Cerca
                </button>
              </div>
            </div>
          </form>
        </div>
      </header>
    </>
  );
}
