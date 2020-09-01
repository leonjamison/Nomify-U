import React from 'react'
import Nav from '../Nav'
import { Global, css} from '@emotion/core'
import searchpage from '../../img/searchpage.jpg'
import Searchform from './Searchform'
import Movielist from './Movielist'
import Moviedetails from './Moviedetails'
import debounce from 'lodash/debounce'
// import throttle from "lodash/throttle"


const api_Key = process.env.REACT_APP_API 
const apiUrl = `http://www.omdbapi.com/?apikey=${api_Key}`



class Searchpage extends React.Component {
    state={
        movies: [],
        currentMovie: null,
        nominations: [],
        searchTerms: '',
        message: '',
        isDisabled: false
       
        
    }

    // Fetch movies from api upon user search query
    fetchMovies=(searchTerms)=>{

        fetch(`${apiUrl}&s=${searchTerms}&type=movie`)
        .then(resp => resp.json())
        .then(movies => this.setState({movies: [...movies.Search], message: ''}))
        .catch((error)=>{
            if ((error)){
                this.setState({message: error})
            }})
        // console.log('error:',this.state.message)
    }

    handleSearchChange=(e)=>{
        e.persist()
        // let searchTerms = e.target.value
        // this.setState({searchTerms, loading: true })
        if(!this.debounce){
            this.debounce = debounce(()=>{
                let searchTerms = e.target.value
                this.fetchMovies(searchTerms)
            }, 1000)
        }
        this.debounce()

    }
    
    //TEST viewMovieDetails Function
    viewMovieDetails=(movieID)=>{
      console.log(movieID)
        fetch(`${apiUrl}&i=${movieID}`)
        .then(resp => resp.json())
        .then(details => this.setState({currentMovie: details}))
        const filteredMovie = this.state.movies.filter(movie => movie.imdbID === movieID)
        const newCurrentMovie = filteredMovie.length > 0 ? filteredMovie[0] : null
        this.setState({currentMovie: newCurrentMovie }) 
    }

    nominateMovie=()=>{
      let newNomination = this.state.currentMovie
      let currentNominations = this.state.nominations
        // set conditional > then 3 because on 4th click, it'll alert and add in that 5th object to movie array
        if(currentNominations.length === 5 ){
        this.setState({nominations: [...this.state.nominations, newNomination]})
        // render banner here
         alert('YOU HAVE SELECTED 5 NOMINATIONS')
        // console.log(this.state.nominations)
        }
    
      // console.log('movie just nominated:', this.state.nominations)
       if(currentNominations.includes(newNomination)){
        console.log('Already Nominated!')
        }else{ this.setState({nominations: [...this.state.nominations, newNomination]})
        // console.log('Nomination Recieved:', this.state.nominations)
        }
        // console.log("heres your nominations:", this.state.nominations)
      // console.log('id:', imdbID, 'nomination:', newNomination)
     
      // this.refs.btn.setAttribute('disabled', 'disabled')
      
    }

    closeMovieInfo=()=>{
        this.setState({currentMovie: null})
    }


    


    
    render(){
     //  console.log(this.state.movies)
       return( 

            <div> 
                <Global styles={GlobalCSS} />
                <Nav/>

                {this.state.currentMovie === null ?  <div><Searchform handleChange={this.handleSearchChange} fetchMovies={this.fetchMovies}/> <Movielist movieDetails={this.viewMovieDetails} movies={this.state.movies} /> </div> :
                 <Moviedetails nominateMovie={this.nominateMovie} currentMovie={this.state.currentMovie} closeMovieInfo={this.closeMovieInfo}/> 
                }  

            </div>

       )
    }
}


const GlobalCSS = css`
  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html,
  body,
  .app {
    margin: 0;
    min-height: 100%;
    width: 100%;
  }
  body {
    background-image: url('${searchpage}');
    color: white;
  }
  a {
    text-decoration: none;
    color: white;
  }
  p,h1 {
    font-size: 20px;
    color: white;
  }
  ul {
    margin: 0;
    list-style: none;
    padding: 0;
  }
  button {
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid white;
    padding: 0.75em 2.3em;
    border-radius: 0.2vw;
    box-shadow: none;
    font-size: 1.1vw;
    color: white;
    margin-right: 15px;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.4px;
  }
  .Icon {
    font-size: 18.5px;
    cursor: pointer;
    color: white;
  }

  .input-field [type=text] {
    color: white;
}
  
  .row .input-field input:focus {
   
    border-bottom: 3px solid red !important;
    box-shadow: 0 1px 0 0 #b71c1c !important
  }

  body {
    background-color: black;
    color: white;
  }
  @media screen and (prefers-color-scheme: dark) {
    body {
      background-color: black;
      color: white;
    }
    img {
      opacity: 120;
      transition: opacity .5s ease-in-out;
    }
    img:hover {
      opacity: .75;
      // transition: opacity .5s ease-in-out;
    }
    
    html[data-theme='dark'] {
      --text-color-normal: hsl(210, 10%, 62%);
      --text-color-light: hsl(210, 15%, 35%);
      --text-color-richer: hsl(210, 50%, 72%);
      --text-color-highlight: hsl(25, 70%, 45%);
    }
  }
  }

   h5 {
    animation-duration: 2s;
    animation-name: slidein;
    animation-iteration-count: 1;

  }

  @keyframes slidein {
    from {
      margin-left: 100%;
      width: 300%; 
    }
  
    to {
      margin-left: 0%;
      width: 100%;
    }
  }

  .particle {
    position: absolute;
    border-radius: 50%;
}

.player-wrapper {
  position: relative;
  padding-top: 56.6% /* Player ratio: 100 / (1280 / 720) */

  
}
 
.react-player {
  position: absolute;
  top: 5%;
  left: 0%;
}






`

export default Searchpage