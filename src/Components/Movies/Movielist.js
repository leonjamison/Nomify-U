import React from 'react'
import Moviecard from './Moviecard'


const Movielist=(props)=>{
    console.log('movielist props',props)

        return(
            <div className='container'>
                <div className='row'>
                    <div className='col s12'>     
                        {
                            props.movies.map((movie) => {
                            return(
                            <Moviecard 
                               key={movie.imdbID} 
                               image={movie.Poster}
                               viewMovieDetails={props.movieDetails}
                               movieId={movie.imdbID}
                            //    title={movie.title}
                            //    overview={movie.overview}
                            //    date={movie.release_date}
                        
                            />)
                            })
                        }
                    </div>
                </div> 
            </div>
    )
}

export default Movielist