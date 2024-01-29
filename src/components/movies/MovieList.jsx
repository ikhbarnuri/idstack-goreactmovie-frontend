import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let movies = await axios(`http://localhost:4000/movies`);
        await setMovies(movies.data.movies);
        setLoaded(true);
      } catch (e) {
        setErrorMessage(e.response.data);
      }
    };
    fetchMovies();
  }, []);

  return (
    <>
      {!loaded ? (
        (() => {
          if (errorMessage) {
            return (
              <div className="row">
                <p>Oops... {errorMessage}</p>
              </div>
            );
          } else {
            return (
              <div className="row">
                <p>Loading...</p>
              </div>
            );
          }
        })()
      ) : (
        <div className="row">
          {movies.map((movie, index) => (
            <div key={index} className="col-sm-4 mb-2">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p className="card-text">{movie.description}</p>
                  <Link to={`/movies/${movie.id}`} className="btn btn-primary">
                    Go somewhere
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default MovieList;
