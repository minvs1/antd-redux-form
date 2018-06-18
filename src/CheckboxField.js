// @flow
import React from 'react'
import { Form, Checkbox } from 'antd'

const FormItem = Form.Item

const CheckboxField = (field: Object) => {
  const hasError = field.meta.touched && field.meta.error && !field.hideError

  const handleChange = event => {
    if (field.onValueChange) {
      field.onValueChange(event)
    }

    if (field.input.onChange) {
      field.input.onChange(event)
    }

    if (field.onChange) {
      field.onChange(event)
    }
  }

  const labelCol =
    field.labelCol ||
    (field.label ? { xs: { span: 24 }, sm: { span: 8 } } : { span: 0 })
  const wrapperCol =
    field.wrapperCol ||
    (field.label ? { xs: { span: 24 }, sm: { span: 16 } } : { span: 24 })

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
      <Checkbox
        {...field.input}
        autoFocus={field.autoFocus}
        checked={!!field.input.value}
        defaultChecked={field.defaultChecked}
        disabled={field.disabled}
        indeterminate={field.indeterminate}
        onChange={handleChange}
      >
        {field.children}
      </Checkbox>
    </FormItem>
  )
}

export default CheckboxField
