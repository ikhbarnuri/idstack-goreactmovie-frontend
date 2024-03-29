// third party
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// internal source
import Menu from './components/Menu.jsx';
import Home from './pages/Home/index.jsx';
import Movies from './pages/Movies/index.jsx';
import Genres from './pages/Genres/index.jsx';
import Admin from './pages/Admin/index.jsx';
import MovieDetail from './components/movies/MovieDetail.jsx';
import ShowMovie from './pages/Movies/Show.jsx';

// style
import './App.css';
import ShowMoviesGenre from './pages/Genres/Show.jsx';
import MovieForm from './components/movies/MovieForm.jsx';

function App() {
  return (
    <Router>
      <div className={'container'}>
        <div className="row">
          <h1 className="mt-3">Go React Movie Project!</h1>
          <hr className="mb-3" />
        </div>
        <div className="row">
          <div className="col-2">
            <Menu />
          </div>
          <div className="col-10">
            <Routes>
              <Route path={'/'} element={<Home />} />
              <Route exact path={'/movies/:id'} element={<ShowMovie />} />
              <Route path={'/movies'} element={<Movies />} />
              <Route exact path={'/genres/:id/movies'} element={<ShowMoviesGenre />} />
              <Route path={'/genres'} element={<Genres />} />
              <Route exact path={'/admin/movies/create'} element={<MovieForm />} />
              <Route exact path={'/admin/movies/:id/edit'} element={<MovieForm />} />
              <Route path={'/admin'} element={<Admin />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
