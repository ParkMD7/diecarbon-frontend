// dependencies
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { Container, Header, Input, Button, Label } from 'semantic-ui-react';


class SignUp extends Component {

  renderField = (field) => {
    return (
    <div className='form-group'>
      <label>{field.label}</label>
      <input
        className='form-control'
        type='text'
        {...field.input}
      />
      {field.meta.error}
    </div>
    )
  }

  render() {
    return (
        // <form>
        //   <Field>
        //     label='Name'
        //     name='name'
        //     component={this.renderField}
        //   </Field>
        //
        //   <Field>
        //     label='Age'
        //     name='age'
        //     component={this.renderField}
        //   </Field>
        //
        //   <Field>
        //     label='Username'
        //     name='username'
        //     component={this.renderField}
        //   </Field>
        //
        //   <Field>
        //     label='Email'
        //     name='email'
        //     component={this.renderField}
        //   </Field>
        //
        //   <Field>
        //     label='Password'
        //     name='password'
        //     component={this.renderField}
        //   </Field>
        //
        //   <Field>
        //     label='Password'
        //     name='password'
        //     component={this.renderField}
        //   </Field>
        //
        //   <Field>
        //     label='Location'
        //     name='location'
        //     component={this.renderField}
        //   </Field>
        //
        //   <Field>
        //     label='Picture'
        //     name='picture'
        //     component={this.renderField}
        //   </Field>
        //
        //   <Button.Group fluid>
        //     <Button basic color='blue' type='submit'>Sign Up</Button>
        //     <Button basic color='blue'>
        //       <Link to='/login'>Create Account</Link>
        //     </Button>
        //   </Button.Group>
        //
        // </form>
        <div>Hello World</div>
    );
  }

}

// Helper Function To Validate Form. Values will be user entered form input values
// If errors is empty, the form is fine to submit. if not, redux-form will assume the form is invalid & not submit the form
const validate = (values) => {
  const errors = {};

  // validate inputs from 'values'
  if(!values.name || values.name.length < 3){
    errors.name = "Name Field Can't Be Blank And Must Be Greater Than 3 Characters Long"
  }
  if(!values.name){
    errors.name = "Username Can't Be Blank"
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "NewUserForm"
})(SignUp);
