import React from 'react'
import Icon from '../Icon'

const Moviedetails = (props) => {
    // console.log('moviedetails props:', props)



    return(

        <div className='container' style={{paddingTop: '70px'}}>
          <div className='row' onClick={props.closeMovieInfo} style={{cursor: "pointer", paddingTop: 80}}>
            <Icon type='arrow-left'/>
            <span style={{marginLeft: 10}}>Go Back</span>
          </div>
          <div className='row'>
            <div className='col s12 m4'>
                {/* <div className='card'> */}
                <div className='card-image'>
              {
                props.currentMovie.Poster == null? <img className="circle responsive-img" src={'https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg'} alt='' style={{width: '100%', height: 360}}/> :
                <img   src={`${props.currentMovie.Poster}`} alt=''style={{width: '60%', height: 360}} />
              }
                {/* </div> */}
                </div>
                <br/>
              <button  onClick={()=>props.nominateMovie()}> Nominate Film <Icon type='heart' /></button>
              
            </div> 
              <div className='col s12 m8'>
                  <div className='info-container'>
                    <h5 style={{fontWeight: "bolder"}}> <Icon type='film'/>  {props.currentMovie.Title}</h5>
                    <span>{props.currentMovie.Production}</span>
                    <br/>
                    <hr/>

                    <span>Release Date: {props.currentMovie.Released}</span>
                    <br/>
                    <span> RunTime: {props.currentMovie.Runtime} </span>
                    <br/>
                    <br/>
                    <span> <Icon type='star'/> Film Director: {props.currentMovie.Director}</span>
                    <br/>
                    <span> <Icon type='star'/> Film Cast: {props.currentMovie.Actors}</span>
                    <br/>
                    <br/>
                    <span> <Icon type='trophy'/> Previous Awards: {props.currentMovie.Awards} </span>
                    <hr/>

                    <p>PLOT</p>
                    <p>{props.currentMovie.Plot}</p>
                    <span style={{paddingLeft: '0px'}}> <Icon type='thumbs-up'/> Likes: {props.currentMovie.imdbVotes}  </span>
        
                  </div>

                      </div>

                    </div>
                   
                </div>
              
    
    
    )

}

export default Moviedetails