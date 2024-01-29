import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
        <>
          <h2>
            Movie: {movie.title} ({movie.year})
          </h2>
          <div className="float-start">
            <small>Rating: {movie.mppaa_rating}</small>
          </div>
          <div className="float-end">
            <span className="badge bg-secondary me-1">Action</span>
          </div>
          <div className="clearfix"></div>
          <hr />
          <table className="table table-striped table-sm mt-4">
            <thead>
              <tr>
                <td>Title:</td>
                <td>{movie.title}</td>
              </tr>
              <tr>
                <td>Description:</td>
                <td>{movie.description}</td>
              </tr>
              <tr>
                <td>Runtime:</td>
                <td>{movie.runtime} minute</td>
              </tr>
            </thead>
          </table>
        </>
      )}
    </>
  );
}

export default ShowMovie;
