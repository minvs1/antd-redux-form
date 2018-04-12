import React from 'react'
import { Form, Switch } from 'antd'

const FormItem = Form.Item

const SwitchField = field => {
  const hasError = field.meta.touched && field.meta.error && !field.hideError

  const handleChange = value => {
    if (field.onValueChange) {
      field.onValueChange(value)
    }

    if (field.input.onChange) {
      field.input.onChange(value)
    }

    if (field.onChange) {
      field.onChange(value)
    }
  }

  return (
    <FormItem
      help={hasError ? field.meta.error : field.help}
      label={field.label}
      validateStatus={hasError ? 'error' : ''}
    >
      <Switch onChange={handleChange} checked={!!field.input.value} />
    </FormItem>
  )
}

export default SwitchField
