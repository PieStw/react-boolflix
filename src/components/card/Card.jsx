import React from "react";

export default function Card({ bool, element }) {
  return (
    <>
      {bool && (
        <div className="card">
          <div className="card-body">
            <img
              src={`https://image.tmdb.org/t/p/w342${element.backdrop_path}`}
            ></img>
            <h4 className="card-title">{element.title}</h4>
            <h5 className="card-title">{element.original_title}</h5>
            <p className="card-text">
              {element.original_language}
              <img
                src={`https://flagsapi.com/${element.original_language.toUpperCase()}/flat/64.png`}
              />
            </p>
            <p className="card-text">{element.vote_average}</p>
          </div>
        </div>
      )}
      {!bool && (
        <div className="card">
          <div className="card-body">
            <img
              src={`https://image.tmdb.org/t/p/w342${element.backdrop_path}`}
            ></img>
            <h4 className="card-title">{element.name}</h4>
            <h5 className="card-title">{element.original_name}</h5>
            <p className="card-text">
              {element.original_language}
              <img
                src={`https://flagsapi.com/${element.original_language.toUpperCase()}/flat/64.png`}
              />
            </p>
            <p className="card-text">{element.vote_average}</p>
          </div>
        </div>
      )}
    </>
  );
}
