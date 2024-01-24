import { useEffect, useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      { id: 1, title: "Spongebob Squarepants", runTime: 145 },
      { id: 2, title: "Ogry", runTime: 145 },
      { id: 3, title: "Chalk Zone", runTime: 145 },
    ]);
  }, []);

  return (
    <div className="row">
      {movies.map((movie, index) => (
        <div key={index} className="col-sm-4 mb-2">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
