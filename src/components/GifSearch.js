import React from 'react';

export default class GifSearch extends React.Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleFormSubmit()
  }


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
          //change state in list container
            onChange={(e) => this.props.handleQueryChange(e.target.value)}
            //controlled form has onChange and value
            value={this.props.query}
          />
          <input type='submit'/>
        </form>
      </div>
    )
  }

}
