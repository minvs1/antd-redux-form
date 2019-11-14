// @flow

import React from 'react'
import { Form, InputNumber } from 'antd'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item

type Props = {
  options: Array<{
    disabled: boolean,
    value: string,
    title: string,
  }>,
} & FormItemProps &
  FieldProps

const InputNumberField = (props: Props) => {
  const { formItemProps, inputProps, sharedProps, restProps } = prepareProps(
    props
  )

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
            <InputNumber
              {...inputProps}
              {...restProps}
              onChange={sharedProps.handleChange}
            />
          )}

          {sharedProps.afterInput}
        </div>
      </FormItem>
    </div>
  )
}

export default InputNumberField
