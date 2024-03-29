import { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import axios from 'axios';

function MovieTable() {
   const [movies, setMovies] = useState([]);
   const [loaded, setLoaded] = useState(false);
   const [errorMessage, setErrorMessage] = useState(null);

   useEffect(() => {
      fetchMovies();
   }, []);

   const handleDeleteMovie = async (id) => {
      const payload = {
         id: id.toString(),
      };
      await axios.post('http://localhost:4000/admin/movies/delete', JSON.stringify(payload));
      await fetchMovies();
   };

   const fetchMovies = async () => {
      try {
         let movies = await axios(`http://localhost:4000/movies`);
         await setMovies(movies.data.movies);
         setLoaded(true);
      } catch (e) {
         setErrorMessage(e.response.data);
      }
   };

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
               <div className="row">
                  <div className="col-12">
                     <Link to={'/admin/movies/create'} className="btn btn-sm btn-primary">
                        Add
                     </Link>
                  </div>
               </div>
               <div className="row">
                  <div className="col-12">
                     <table className="table">
                        <thead>
                           <tr>
                              <td>No</td>
                              <td>Name</td>
                              <td></td>
                           </tr>
                        </thead>
                        <tbody>
                           {movies.map((movie, index) => (
                              <tr key={index}>
                                 <td>{index + 1}</td>
                                 <td>
                                    <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
                                 </td>
                                 <td>
                                    <div className="btn-group">
                                       <button
                                          className="btn btn-secondary btn-sm dropdown-toggle"
                                          type="button"
                                          data-bs-toggle={'dropdown'}
                                          aria-expanded={'false'}
                                       >
                                          Action
                                       </button>
                                       <ul className={'dropdown-menu'}>
                                          <li>
                                             <span className={'dropdown-item'}>
                                                <Link to={`/admin/movies/${movie.id}/edit`}>Edit</Link>
                                             </span>
                                          </li>
                                          <li>
                                             <span
                                                className={'dropdown-item'}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => {
                                                   if (window.confirm('Are you sure?')) {
                                                      handleDeleteMovie(movie.id);
                                                   }
                                                }}
                                             >
                                                Delete
                                             </span>
                                          </li>
                                       </ul>
                                    </div>
                                 </td>
                              </tr>
                           ))}
                        </tbody>
                     </table>
                  </div>
               </div>
            </>
         )}
      </>
   );
}

export default MovieTable;
