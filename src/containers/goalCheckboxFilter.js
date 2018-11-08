import React, { Component } from 'react'
import { Form, Checkbox } from 'semantic-ui-react'

export default class GoalCheckboxFilter extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          <h4>Filter Goals By Difficulty</h4>
        </Form.Field>
        <Form.Group >
          <Form.Field>
            <Checkbox radio label='Easy' name='checkboxRadioGroup' value='Easy'
              checked={this.state.value === 'Easy'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Medium' name='checkboxRadioGroup' value='Medium'
              checked={this.state.value === 'Medium'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Hard' name='checkboxRadioGroup' value='Hard'
              checked={this.state.value === 'Hard'}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox radio label='Impossible' name='checkboxRadioGroup' value='Impossible'
              checked={this.state.value === 'Impossible'}
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form.Group>
      </Form>
    )
  }
}
