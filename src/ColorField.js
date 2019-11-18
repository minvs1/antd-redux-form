// @flow

import React from 'react'
import { SketchPicker } from 'react-color'
import { Form } from 'antd'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item

type Props = {} & FormItemProps & FieldProps

const ColorField = (props: Props) => {
  const { formItemProps, inputProps, sharedProps, restProps } = prepareProps(
    props
  )

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
          <SketchPicker
            {...inputProps}
            {...restProps}
            color={inputProps.value}
          />
        )}

        {sharedProps.afterInput}
      </div>
    </FormItem>
  )
}

export default ColorField
