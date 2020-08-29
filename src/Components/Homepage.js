import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import NomifyBG from '../img/NomifyBG.gif'
import Icon from './Icon'
import nomifyuchair2 from '../img/nomifyuchair2.png'



const Homepage=()=>(

      <div css={homepageCSS}>
        <div className='synopsis'>
            <img src={nomifyuchair2} alt=''/>
            <p> 
                A single page application allowing a user to search movies and nominate 
                their top 5 films for The Shoppies Entrepreneur Movie Awards. 
            </p>
            <span> 
                By: Leon Jamison - Future Shopify Employee 
            </span>
        </div>
     </div> 

)

const homepageCSS = css`
  position: relative;
  background-image: url('${NomifyBG}');
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 98vh;
  top: 0;

  .synopsis {
    padding-top: 80px;
    padding-left: 80px;
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
      top: 0;
      left: 115%;
    }

`




export default Homepage