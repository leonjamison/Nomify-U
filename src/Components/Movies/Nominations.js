import React from 'react'
import Navigationbar from '../Nav'
import Movielist from './Movielist'
import searchpage from '../../img/searchpage.jpg'
import { Global, css} from '@emotion/core'
import Icon from '../Icon'

const backend_api = `http://localhost:3001/nominations`

class Nominations extends React.Component {
      state={
         nominations:[]
      }
      


      getNominations=()=>{
         fetch(backend_api)
         .then(resp => resp.json())
         .then(nominations => this.setState({nominations}))
         let nomCount = this.state.nominations
         if (nomCount.length === 5){console.log('YOU HAVE PICKED 5 NOMINATIONS!')}
      }
      

      componentDidMount=()=>{
         this.getNominations()
      }

      deleteNomination=(id)=>{
         fetch(backend_api + `/${id}`, {
            method: 'DELETE'
         })
         this.componentDidMount()
      }


   render(){
      let movies = this.state.nominations

      console.log('nominations state:', this.state.nominations)
         return ( 
            <div> 
               <Global styles={GlobalCSS} />
               <Navigationbar/>

               <div style={{paddingTop: '100px'}} className='container'>
                    <h5 style={{paddingLeft: '600px', paddingBottom: '30px'}}> <Icon type='film' /> Movie Nominations</h5>
                    <div className='row'>
                        <div className='col s12 '>
                            <div className='card-image'>
                            {
                               movies.map((movie)=>{
                                  return(
                                    <div className='col s12 l3' key={movie.id} >
                                       <div className='card' >
                                        <div className='card-image' >
                                        {
                                            movie.Poster == null? <img className="circle responsive-img" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt='' 
                                            style={{width: '100%', height: 360}}/> :
                                            <img className="circle responsive-img"  src={`${movie.Poster}`} alt=''
                                            style={{width: '100%', height: 360}} />
                                        }
                                        </div> 
                                    </div>
                                    <button onClick={()=>this.deleteNomination(movie.id)}> <Icon type='trash'/> DELETE</button>
                                </div>
                                  )
                               })
                            }
                             
                            </div>
                        </div>
                     </div> 
               </div>  
            </div>
          
         )}

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



export default Nominations