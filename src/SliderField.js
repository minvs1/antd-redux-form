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
      help={hasError ? field.meta.error : field.help}
      label={field.label}
      validateStatus={hasError ? 'error' : ''}
    >
      <Slider
        disabled={field.disabled}
        marks={field.marks}
        max={field.max}
        min={field.min}
        onChange={handleChange}
        step={field.step}
        value={field.input.value}
      />
    </FormItem>
  )
}

export default SliderField
