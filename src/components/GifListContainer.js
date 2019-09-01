import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

export default class GifListContainer extends React.Component {

  state = {
    gifs: [],
    query: ''
  }

  componentDidMount(){
    this.makeFetch(this.state.query)
    .then(gifsData =>{
      this.setState({
        gifs: gifsData.data
      })
    })
  }

  makeFetch = (query) => {
    return fetch(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(res => res.json())
  }

  handleQueryChange = (query) => {
    this.setState({
      query: query
    })
  }

  handleFormSubmit = () => {
    this.makeFetch(this.state.query)
    .then(gifsData =>{
      this.setState({
        gifs: gifsData.data
      })
    })
  }

  render(){

    return(
      <div>
      <GifSearch
        handleQueryChange={this.handleQueryChange} 
        query={this.state.query}
        handleFormSubmit={this.handleFormSubmit}
      />
      {this.state.gifs.map(gifObj => {
        return <GifList key={gifObj.id} gif={gifObj} />
      })}
      </div>
    )
  }

}
