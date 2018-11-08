// dependencies
import React, { Component } from "react";
import { Input, Button } from 'semantic-ui-react';

class SearchBar extends Component {
    // state = {
    //   term: ""
    // }


  onInputChange = (event) => {
    this.props.search(event.target.value)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    // this.setState({ term: "" });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <Input
          placeholder="Filter Goals"
          size='medium'
          // value={this.state.term}
          onChange={this.onInputChange}
          style={{width: '300px'}}
        />
      </form>
    );
  }
}


export default SearchBar;
