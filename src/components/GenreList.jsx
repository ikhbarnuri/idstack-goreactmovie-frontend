import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    setGenres([
      { id: 1, name: "Action" },
      { id: 2, name: "Comedy" },
      { id: 3, name: "Crime" },
    ]);
  }, []);

  return (
    <div className="row">
      {genres.map((genre, index) => (
        <div key={index} className="col-sm-2 mb-2">
          <div className="card">
            <div className="card-body text-center">
              <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GenreList;
