// @flow

import React from 'react'
import { Form, Radio } from 'antd'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

type Props = {} & FormItemProps & FieldProps

const RadioButtonField = (props: Props) => {
  const {
    formItemProps,
    inputProps,
    sharedProps,
    restProps: { options, ...restProps },
  } = prepareProps(props)

  return (
    <div data-test={sharedProps.dataTest || inputProps.name}>
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
            <RadioGroup
              {...inputProps}
              {...restProps}
              onChange={sharedProps.handleChange}
            >
              {options.map(button => (
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
          )}

          {sharedProps.afterInput}
        </div>
      </FormItem>
    </div>
  )
}

export default RadioButtonField
