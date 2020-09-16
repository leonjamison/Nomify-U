import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import nomifyuchair2 from '../img/nomifyuchair2.png'
import ReactPlayer from 'react-player'
import Icon from './Icon'
import Background1 from '../img/Background1.jpg'

const url = `https://www.youtube.com/watch?v=ctbI3RftTNk`




const Homepage=()=>(

      <div css={homepageCSS}>
        <div className='synopsis'>
          <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url={url}
            volume={1}
            muted={true}
            playing= {true}
            controls={true}
            width='100%'
            height='390%'
            loop={true} 
            />
          </div>
          <img src={nomifyuchair2} alt=''/>
            <p> 
                Recognize your favorite film makers by nominating 
                your Top 5 films for The Shoppies Entrepreneur Movie Awards.
                Start by clicking <Icon type='search'/> to search for your favorite films. 
                Here at NOMIFY-U, your voice counts!
            </p>
            {/* <span> 
                By: Leon Jamison - Future Shopify Employee 
            </span> */}
        </div>
     </div> 

)

const homepageCSS = css`
  position: relative;
  background-image: url('${Background1}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 98vh;
  top: 0;

  .synopsis {
    padding-top: 60px;
    padding-left: 90px;
    max-width: 600px;
    font-weight: bold;
    color: white;

    img {
      width: 40%;
    }
    .Icon {
        margin-right: 10.5px;
        font-size: 18px;
      }
    }
    .player-wrapper {
      position: relative;
      padding-top: 15% /* Player ratio: 100 / (1280 / 720) */
  
    }
     
    .react-player {
      position: absolute;
      top: 130%;
      left: 115%;
    }

`




export default Homepage