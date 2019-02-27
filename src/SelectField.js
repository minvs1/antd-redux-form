// @flow
import React from 'react'
import { Form, Select } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const SelectField = ({
  colon,
  extra,
  hasFeedback,
  meta,
  help,
  hideError,
  required,
  id,
  labelCol,
  wrapperCol,
  input,
  onChange,
  options,
  ...restProps
}: Object) => {
  const hasError = meta.touched && meta.error && !hideError

  const handleChange = value => {
    if (input.onChange) {
      input.onChange(value)
    }

    if (onChange) {
      onChange(value)
    }
  }

  const _labelCol =
    labelCol ||
    (restProps.label ? { xs: { span: 24 }, sm: { span: 8 } } : { span: 0 })
  const _wrapperCol =
    wrapperCol ||
    (restProps.label ? { xs: { span: 24 }, sm: { span: 16 } } : { span: 24 })

  // TODO: Implement OptGroup

  return (
    <FormItem
      colon={colon}
      extra={extra}
      hasFeedback={hasFeedback}
      help={hasError ? meta.error : help}
      label={restProps.label}
      labelCol={_labelCol}
      required={required}
      validateStatus={hasError ? 'error' : ''}
      wrapperCol={_wrapperCol}
    >
      <div id={id}>
        <Select
          onChange={handleChange}
          value={input.value ? input.value : undefined}
          {...restProps}
        >
          {options.map(option => {
            return (
              <Option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
                title={option.title || option.value}
              >
                {option.label}
              </Option>
            )
          })}
        </Select>
      </div>
    </FormItem>
  )
}

export default SelectField
