import React from 'react'
import Icon from '../Icon'

const backend_api = `http://localhost:3001/nominations`

class  Moviedetails extends React.Component {
  
      state={
        disabled: false,
        allNominatedMovies: []
      }

      //disables button after nomination and invokes nominateMovie function
      handleclick=()=>{
        this.setState({disabled:true})
        this.props.nominateMovie()
      }

      getDataBaseMovies=()=>{
        fetch(backend_api)
        .then(resp => resp.json())
        .then(nominatedMovies => this.setState({allNominatedMovies: nominatedMovies}))
     }

     componentDidMount=()=>{
       this.getDataBaseMovies()
     }


    render(){

      let {closeMovieInfo, currentMovie} = this.props

    return(
        <div className='container' style={{paddingTop: '70px'}}>
          <div className='row' onClick={closeMovieInfo} style={{cursor: "pointer", paddingTop: 80}}>
            <Icon type='arrow-left'/>
            <span style={{marginLeft: 10}}>Go Back</span>
          </div>
          <div className='row'>
            <div className='col s12 m4'>
                <div className='card-image'>
              {
                currentMovie.Poster == null? <img className="circle responsive-img" src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} alt='' style={{width: '100%', height: 360}}/> :
                <img src={`${currentMovie.Poster}`} alt=''style={{width: '60%', height: 360}} />
              }
                </div>
                <br/>
              <button disabled={this.state.disabled} onClick={this.handleclick}> Nominate Film <Icon type='heart' /></button>
              
            </div> 
              <div className='col s12 m8'>
                  <div className='info-container'>
                    <h5 style={{fontWeight: "bolder"}}> <Icon type='film'/>  {currentMovie.Title}</h5>
                    <span>{currentMovie.Production}</span>
                    <br/>
                    <hr/>

                    <span>Release Date: {currentMovie.Released}</span>
                    <br/>
                    <span> RunTime: {currentMovie.Runtime} </span>
                    <br/>
                    <br/>
                    <span> <Icon type='star'/> Film Director: {currentMovie.Director}</span>
                    <br/>
                    <span> <Icon type='star'/> Film Cast: {currentMovie.Actors}</span>
                    <br/>
                    <br/>
                    <span> <Icon type='trophy'/> Previous Awards: {currentMovie.Awards} </span>
                    <hr/>

                    <p>PLOT</p>
                    <p>{currentMovie.Plot}</p>
                    <span style={{paddingLeft: '0px'}}> <Icon type='thumbs-up'/> Likes: {currentMovie.imdbVotes}  </span>
        
                  </div>

                      </div>

                    </div>
                   
                </div>
              
    
    
    )}

}

export default Moviedetails