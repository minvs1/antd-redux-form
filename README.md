# antd-redux-form

## Example

Go to https://minvs1.github.io/antd-redux-form/ to check for examples

## Usage

```
import React from 'react'
import { Form } from 'antd'
import { Field, reduxForm } from 'redux-form'
import { InputField } from 'antd-redux-form'

const AddAccount = () => {
  const handleSubmit = values => {}

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        component={InputField}
        label="Username"
        name="account[username]"
        type="text"
      />
    </Form>
  )
}

const AddAccountFormed = reduxForm({
  form: 'form',
})(AddAccount)

ReactDOM.render(
  <AddAccountFormed />,
  document.getElementById('root')
)
```
