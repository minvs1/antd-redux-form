// @flow

import React from 'react'
import { Form, Select } from 'antd'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item
const Option = Select.Option

type Props = Object & FormItemProps & FieldProps

const SelectField = (props: Props) => {
  const {
    formItemProps,
    inputProps,
    sharedProps,
    restProps: { options, ...restProps },
    children,
  } = prepareProps(props)

  const handleChange = value => {
    if (inputProps.onChange) {
      inputProps.onChange(value)
    }
  }

  return (
    <FormItem {...formItemProps}>
      <div
        id={sharedProps.inputWrapperID}
        className={sharedProps.inputWrapperClassName}
        style={sharedProps.inputWrapperStyle}
      >
        {sharedProps.beforeInput}

        {sharedProps.customInput ? (
          sharedProps.customInput(props)
        ) : (
          <Select
            {...inputProps}
            onChange={handleChange}
            onBlur={event => inputProps.onBlur(event)}
            onFocus={event => inputProps.onFocus(event)}
            value={inputProps.value ? inputProps.value : undefined}
            {...restProps}
          >
            {children
              ? children
              : options.map(option => {
                  return (
                    <Option
                      disabled={option.disabled}
                      key={option.value}
                      value={option.value}
                      title={option.title}
                    >
                      {option.label}
                    </Option>
                  )
                })}
          </Select>
        )}

        {sharedProps.afterInput}
      </div>
    </FormItem>
  )
}

export default SelectField
