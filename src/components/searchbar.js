// dependencies
import React, { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';

class SearchBar extends Component {

  onInputChange = (event) => {
    this.props.search(event.target.value)
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render(){
    return (
      <Form onSubmit={this.onFormSubmit} className="input-group">
        <Input
          placeholder="Filter Goals"
          size='medium'
          onChange={this.onInputChange}
          style={{width: '300px'}}
        />
      </Form>
    );
    }
}


export default SearchBar;
