// @flow

import React from 'react'
import { Form, Slider } from 'antd'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item

type Props = {} & FormItemProps & FieldProps

const SliderField = (props: Props) => {
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
            <Slider
              {...inputProps}
              {...restProps}
              onChange={sharedProps.handleChange}
              value={inputProps.value || restProps.min || 0}
            />
          )}

          {sharedProps.afterInput}
        </div>
      </FormItem>
    </div>
  )
}

export default SliderField
