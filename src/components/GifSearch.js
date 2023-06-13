import React, { Component } from 'react';

export default class GifSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }

  handleInputChange = (event) => {
    // this.state = {...this.state,
    //   [event.target.name]: event.target.value,
    // };
    // this.setState({...this.state,
    //   search: event.target.value,
    // });

    this.setState({
      search: event.target.value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log('state', this.state)
    this.props.handleSearch(this.state.search)
  }

  render() {
    // console.log('props', this.props)
    return (
      <form onSubmit={(event) => this.handleSubmit(event)}> 
        
          <label>
            Enter a Search Term:
            <input id="search" name="search" type="text" onChange={this.handleInputChange} value={this.state.search} />
          </label>
  
          <button type="submit">Find Gifs</button>

      </form>
    );
  }
}

