import React, { Component } from 'react';
import { Form, Checkbox } from 'semantic-ui-react';

export default class GoalCheckboxFilter extends Component {


  handleChange = (event) => {
    const difficulty = event.target.innerText
    return this.props.filterInput(difficulty)
  }

  render() {
    return (
      <Form centered="true">
        <Form.Field>
          <h4>Filter Goals By Difficulty</h4>
        </Form.Field>
        <Form.Group >
          <Form.Field>
            <Checkbox control='input' label='All' name='checkbox' value='All'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox control='input' label='Easy' name='checkbox' value='Easy'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox control='input' label='Medium' name='checkbox' value='Medium'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox control='input' label='Hard' name='checkbox' value='Hard'
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox control='input' label='Impossible' name='checkbox' value='Impossible'
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
      </Form>
    )
  }
}
