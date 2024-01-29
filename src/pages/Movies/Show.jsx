import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieDetail from '../../components/movies/MovieDetail.jsx';

function ShowMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let movie = await axios(`http://localhost:4000/movies/` + id);
        await setMovie(movie.data.movie);
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
        <MovieDetail movie={movie} />
      )}
    </>
  );
}

export default ShowMovie;
