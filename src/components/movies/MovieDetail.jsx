import { Link, useParams } from 'react-router-dom';
import React from 'react';

function MovieDetail({ movie }) {
  return (
    <>
      <h2>
        Movie: {movie.title} ({movie.year})
      </h2>
      <div className="float-start">
        <small>Rating: {movie.mppaa_rating}</small>
      </div>
      <div className="float-end">
        {Object.entries(movie.genres).map((genre, index) => {
          console.log(genre);
          return (
            <Link className={'badge bg-secondary'} key={index} to={''}>
              {genre[1]}
            </Link>
          );
        })}
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
  );
}

export default React.memo(MovieDetail);
