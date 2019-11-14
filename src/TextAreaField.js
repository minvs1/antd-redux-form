// @flow

import React from 'react'
import { Form, Input } from 'antd'
import classNames from 'classnames'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item
const { TextArea } = Input

type Props = {
  options: Array<{
    disabled: boolean,
    value: string,
    title: string,
  }>,
  hideError: boolean,
} & FormItemProps &
  FieldProps

const TextAreaField = (props: Props) => {
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
            <TextArea {...inputProps} {...restProps} />
          )}

          {sharedProps.afterInput}
        </div>
      </FormItem>
    </div>
  )
}

export default TextAreaField
