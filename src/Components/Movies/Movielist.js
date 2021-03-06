import React from 'react'
import Moviecard from './Moviecard'


const Movielist=(props)=>{
    // console.log('movielist props:',props)

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
                               movieDetails={props.movieDetails}
                               movieID={movie.imdbID}
                               nominatedMovies={props.nominatedMovies}
                            
                        
                            />)
                            })
                        }
                    </div>
                </div> 
            </div>
    )
}

export default Movielist