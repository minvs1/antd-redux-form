// @flow
import React from 'react'
import { Form, Radio } from 'antd'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

const RadioButtonField = (field: Object) => {
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
      <RadioGroup
        defaultValue={field.defaultValue}
        disabled={field.disabled}
        name={field.input.name}
        onChange={handleChange}
        size={field.size}
        value={field.input.value}
      >
        {field.options.map(button => (
          <RadioButton
            autoFocus={button.autoFocus}
            checked={button.checked}
            defaultChecked={button.defaultChecked}
            disabled={button.disabled}
            key={button.value}
            value={button.value}
          >
            {button.label}
          </RadioButton>
        ))}
      </RadioGroup>

      {field.afterRadioGroup}
    </FormItem>
  )
}

export default RadioButtonField
