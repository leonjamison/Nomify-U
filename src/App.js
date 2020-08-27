import React, { Component } from 'react'

let omdbApiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=93d3b263`

export default class App extends Component {

  api_Key = process.env.REACT_APP_API


  render() {
    return (
      <div>
        <h1> LETS BUILD NOMIFY-U!!! </h1>
        <p> A single page application allowing a user to search movies and nominate 
            their top 5 films for The Shoppies Entrepreneur Movie Awards. 
        </p>
        <span> By: Leon Jamison - Future Shopify Employee </span>
      </div>
    )
  }
}
