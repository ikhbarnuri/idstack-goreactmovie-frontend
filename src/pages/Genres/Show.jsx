import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ShowMoviesGenre() {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let movies = await axios(`http://localhost:4000/genres/` + id + '/movies');
        await setMovies(movies.data.genres);
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
        <ul>
          {Array.isArray(movies) ? (
            movies.map((movie, index) => (
              <li key={index}>
                <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
              </li>
            ))
          ) : (
            <p>Oops... There's no movies data.</p>
          )}
        </ul>
      )}
    </>
  );
}

export default ShowMoviesGenre;
