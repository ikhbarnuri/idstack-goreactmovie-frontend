import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

function MovieForm() {
   const { id } = useParams();
   const { register, handleSubmit, setValue } = useForm();
   const isAddMode = !id;
   const fields = ['id', 'title', 'description', 'runtime', 'release_date', 'rating', 'mppaa_rating', 'genres'];

   const fetchMovie = async (id) => {
      try {
         const result = await axios(`http://localhost:4000/movies/${id}`);
         result.data.movie.id = result.data.movie.id.toString();
         result.data.movie.runtime = result.data.movie.runtime.toString();
         result.data.movie.rating = result.data.movie.rating.toString();
         result.data.movie.release_date = new Date(result.data.movie.release_date).toISOString().split('T')[0];
         fields.forEach((field) => setValue(field, result.data.movie[field]));
      } catch (e) {
         console.log(e.response.data);
      }
   };

   useEffect(() => {
      if (!isAddMode) {
         fetchMovie(id);
      }
   }, [isAddMode]);

   const onSubmit = async (data) => {
      if (isAddMode) {
         const result = await axios.post('http://localhost:4000/admin/movies/add', JSON.stringify(data));
      } else {
         const result = await axios.post('http://localhost:4000/admin/movies/edit', JSON.stringify(data));
      }
   };

   return (
      <>
         <h2>Movie Form</h2>
         <hr />
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
               <label htmlFor="title" className={'form-label'}>
                  Title
               </label>
               <input
                  type="text"
                  className={'form-control'}
                  id={'title'}
                  name={'title'}
                  {...register('title', { required: true })}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="release_date" className={'form-label'}>
                  Release Data
               </label>
               <input
                  type="date"
                  className={'form-control'}
                  id={'release_date'}
                  name={'release_date'}
                  {...register('release_date', { required: true })}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="runtime" className={'form-label'}>
                  Runtime
               </label>
               <input
                  type="number"
                  className={'form-control'}
                  id={'runtime'}
                  name={'runtime'}
                  {...register('runtime', { required: true })}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="mppaa_rating" className={'form-label'}>
                  MPPAA Rating
               </label>
               <select
                  name="mppaa_rating"
                  id="mppaa_rating"
                  className={'form-control'}
                  {...register('mppaa_rating', { required: true })}
               >
                  <option value="G" className={'form-control'}>
                     G
                  </option>
                  <option value="PG" className={'form-control'}>
                     PG
                  </option>
                  <option value="PG13" className={'form-control'}>
                     PG13
                  </option>
                  <option value="R" className={'form-control'}>
                     R
                  </option>
                  <option value="NC17" className={'form-control'}>
                     NC17
                  </option>
               </select>
            </div>
            <div className="mb-3">
               <label htmlFor="rating" className={'form-label'}>
                  Rating
               </label>
               <input
                  type="number"
                  className={'form-control'}
                  id={'rating'}
                  name={'rating'}
                  {...register('rating', { required: true })}
               />
            </div>
            <div className="mb-3">
               <label htmlFor="description" className={'form-label'}>
                  Description
               </label>
               <textarea
                  className={'form-control'}
                  id={'description'}
                  name={'description'}
                  {...register('description', { required: true })}
               />
            </div>
            <hr />
            <button type={'submit'} className={'btn btn-primary mb-4'}>
               Save
            </button>
         </form>
      </>
   );
}

export default MovieForm;
