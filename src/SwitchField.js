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

  const labelCol = field.labelCol || { xs: { span: 24 }, sm: { span: 8 } }
  const wrapperCol = field.wrapperCol || { xs: { span: 24 }, sm: { span: 16 } }

  return (
    <FormItem
      colon={field.colon}
      extra={field.extra}
      hasFeedback={field.hasFeedback}
      help={hasError ? field.meta.error : field.help}
      label={field.label}
      labelCol={labelCol}
      required={field.required}
      validateStatus={hasError ? 'error' : ''}
      wrapperCol={wrapperCol}
    >
      <Switch onChange={handleChange} checked={!!field.input.value} />
    </FormItem>
  )
}

export default SwitchField
