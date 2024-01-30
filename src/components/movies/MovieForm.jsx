function MovieForm(props) {
   return (
      <>
         <h2>Movie Form</h2>
         <hr />
         <form action="">
            <div className="mb-3">
               <label htmlFor="title" className={'form-label'}>
                  Title
               </label>
               <input type="text" className={'form-control'} id={'title'} name={'title'} />
            </div>
            <div className="mb-3">
               <label htmlFor="release_date" className={'form-label'}>
                  Release Data
               </label>
               <input type="date" className={'form-control'} id={'release_date'} name={'release_date'} />
            </div>
            <div className="mb-3">
               <label htmlFor="release_date" className={'form-label'}>
                  Runtime
               </label>
               <input type="number" className={'form-control'} id={'release_date'} name={'release_date'} />
            </div>
            <div className="mb-3">
               <label htmlFor="mppaa_rating" className={'form-label'}>
                  MPPAA Rating
               </label>
               <select name="mppaa_rating" id="mppaa_rating" className={'form-control'}>
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
               <input type="number" className={'form-control'} id={'rating'} name={'rating'} />
            </div>
            <div className="mb-3">
               <label htmlFor="description" className={'form-label'}>
                  Description
               </label>
               <textarea className={'form-control'} id={'description'} name={'description'} />
            </div>
            <hr />
            <button className={'btn btn-primary mb-4'}>Save</button>
         </form>
      </>
   );
}

export default MovieForm;
