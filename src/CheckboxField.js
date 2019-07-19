// @flow

import React from 'react'
import { Form, Checkbox } from 'antd'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item

type Props = {} & FormItemProps & FieldProps

const CheckboxField = (props: Props) => {
  const {
    formItemProps,
    inputProps,
    sharedProps,
    children,
    restProps,
  } = prepareProps(props)

  return (
    <FormItem {...formItemProps}>
      <div
        id={sharedProps.inputWrapperID}
        className={sharedProps.inputWrapperClassName}
      >
        {sharedProps.beforeInput}

        {sharedProps.customInput ? (
          sharedProps.customInput(props)
        ) : (
          <Checkbox
            {...inputProps}
            checked={!!inputProps.value}
            {...restProps}
            onChange={sharedProps.handleChange}
          >
            {children}
          </Checkbox>
        )}

        {sharedProps.afterInput}
      </div>
    </FormItem>
  )
}

export default CheckboxField
