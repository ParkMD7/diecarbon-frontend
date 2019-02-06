// dependencies
import React, { Component } from 'react';
import { Input, Button, Form } from 'semantic-ui-react';

class SearchBar extends Component {

  // NOTE: this function tracks the users entered text (event.target.value) and then passes that text back up into GoalListContainer through a cbf
  onInputChange = (event) => {
    this.props.search(event.target.value)
  }

  // NOTE: this function prevents the default behavior of a page refresh when a user clicks enter within the searchbar field
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
