import React from 'react'



const Moviecard = (props) => {
   
    return(
            <div className='col s12 m6 l3' style={{paddingBottom: '20px'}}>
                <div className='card'>
                    <div className='card-image' onClick={() => {props.movieDetails(props.movieID)}} >
                    {
                        props.image == null? <img className="circle responsive-img" src={`https://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt='' 
                        style={{width: '100%', height: 360}}/> :
                        <img className="circle responsive-img"  src={`${props.image}`} alt=''
                        style={{width: '100%', height: 360}} />
                    }
                    </div>
                </div>
            </div>
            
    
    )
}

export default Moviecard
