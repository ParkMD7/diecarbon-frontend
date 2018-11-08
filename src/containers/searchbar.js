// dependencies
import React from "react";
import { Input, Button } from 'semantic-ui-react';

const SearchBar = () => {

  const onInputChange = (event) => {
    props.search(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <Input
          placeholder="Filter Goals"
          size='medium'
          onChange={this.onInputChange}
          style={{width: '300px'}}
        />
      </form>
    );
}


export default SearchBar;
