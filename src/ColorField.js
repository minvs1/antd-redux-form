// @flow

import React from 'react'
import { SketchPicker } from 'react-color'
import { Form } from 'antd'

const FormItem = Form.Item

import type { FieldProps } from 'redux-form'
import type { FormItemProps } from './types'

type Props = {} & FormItemProps & FieldProps

const ColorField = ({
  colon,
  extra,
  hasFeedback,
  meta,
  help,
  hideError,
  required,
  labelCol,
  wrapperCol,
  input,
  label,
  ...restProps
}: Props) => {
  const hasError = meta.touched && meta.error && !hideError

  const _labelCol =
    labelCol || (label ? { xs: { span: 24 }, sm: { span: 8 } } : { span: 0 })
  const _wrapperCol =
    wrapperCol ||
    (label ? { xs: { span: 24 }, sm: { span: 16 } } : { span: 24 })

  return (
    <FormItem
      colon={colon}
      extra={extra}
      hasFeedback={hasFeedback}
      help={hasError ? meta.error : help}
      label={label}
      labelCol={_labelCol}
      required={required}
      validateStatus={hasError ? 'error' : ''}
      wrapperCol={_wrapperCol}
    >
      <SketchPicker color={input.value} {...input} {...restProps} />
    </FormItem>
  )
}

export default ColorField
