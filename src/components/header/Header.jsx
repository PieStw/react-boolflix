import React, { useState } from "react";
import styles from "../../assets/css/Header.module.css";
import { useNetflixContext } from "../../contex/NetflixContext";

export default function Header() {
  const [data, setData] = useState({ nome: "", genere: "Nessuno" });

  const { genre, showFilm, showSerie } = useNetflixContext();

  function handleSubmit(e) {
    e.preventDefault();

    showFilm(data.nome, data.genere);
    showSerie(data.nome, data.genere);
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>BOOLFLIX</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="row g-3 align-items-center">
              <div className="col-auto">
                <select
                  name="state"
                  className="form-select"
                  value={data.genere}
                  onChange={(e) => setData({ ...data, genere: e.target.value })}
                >
                  <option value="Nessuno">Nessuno</option>
                  {genre.map((element) => (
                    <option value={element.id} key={element.id}>
                      {element.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-auto">
                <input
                  name="name"
                  className="form-control"
                  type="text"
                  placeholder="Inserisci il nome"
                  value={data.nome}
                  onChange={(e) => setData({ ...data, nome: e.target.value })}
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
