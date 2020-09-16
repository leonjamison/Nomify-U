/** @jsx jsx */
 // eslint-disable-next-line 
 import { React, useState, useEffect, forwardRef } from 'react'
 import { css, jsx } from '@emotion/core'
 import { Link } from 'react-router-dom'
 import Icon from './Icon.js'
 import nomifyuchair2 from '../img/nomifyuchair2.png'

 
 const Navigationbar = forwardRef((props,ref) => {
   const [scrolled, setScrolled] = useState(false)

 
   useEffect(() => {
     const handleScroll = () =>
       window.pageYOffset > 75 ? setScrolled(true) : setScrolled(false)
 
     const onScroll = window.addEventListener('scroll', handleScroll)
 
     return () => {
       window.removeEventListener('scroll', onScroll)
     }
   }, [])

   const questionClick=()=>{
    alert('Please select 5 films to be nominated for The Shoppies Entrepreneur Movie Awards. Current nominations may be viewed by clicking on the NOMINATIONS tab.')
  }

 
   return (
     
     <nav
     ref={ref}
     css={[
       NavigationbarCSS,
       scrolled
         ? css`
             background-color: rgb(20, 20, 20);
             background-image: linear-gradient(
               to bottom,
               rgba(0, 0, 0, 0.7) 10%,
               rgba(0, 0, 0, 0)
             );
           `
         : css`
             background: transparent;
           `
         ]}
      >
    
     <ul>
       <li>
          <img style={{paddingTop: "20px", paddingBottom: '10px', paddingLeft: '10px'}} alt='' height="115" src={nomifyuchair2} />
       </li>
       <li>
         <a href='/nomify-u'> <Icon type='home'/>Home</a>
       </li>
       <li>
         <a href='/nominations'> <Icon type='trophy'/> Nominations</a>
       </li>

     </ul>
 
     <ul className="right">
       <li>
        <Link to='/Search'> <Icon type="search" /> </Link> 
       </li>
       <li onClick={() => questionClick()}>
         <Icon type="question-circle" />
       </li>
     </ul>
    
   </nav>
   
 )
 })
 

 
 
 const NavigationbarCSS = css`
   position: fixed;
   height: 68px;
   z-index: 99;
   width: 100%;
   padding: 5 15px;
   display: flex;
   align-items: center;
   justify-content: space-between;
 
   ul {
     display: flex;
     align-items: center;
   }
 
   li {
     margin-right: 20px;
   }
 
   a {
     font-size: 15px;
     letter-spacing: 0.5px;
     color: #e5e5e5;
   }
 
   a.active {
     color: white;
     font-weight: 500;
   }
 
   ul.right {
     i {
       font-size: 22px;
     }
   }
 `
 
 export default Navigationbar