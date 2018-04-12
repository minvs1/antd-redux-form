import React from 'react'
import { Form, Slider } from 'antd'

const FormItem = Form.Item

const SliderField = field => {
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
      colon={field.colon}
      extra={field.extra}
      hasFeedback={field.hasFeedback}
      help={hasError ? field.meta.error : field.help}
      label={field.label}
      labelCol={field.labelCol}
      required={field.required}
      validateStatus={hasError ? 'error' : ''}
      wrapperCol={field.wrapperCol}
    >
      <Slider
        disabled={field.disabled}
        marks={field.marks}
        max={field.max}
        min={field.min}
        onChange={handleChange}
        step={field.step}
        value={field.input.value || field.min || 0}
      />
    </FormItem>
  )
}

export default SliderField
