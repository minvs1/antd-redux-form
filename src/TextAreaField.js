// @flow

import React from 'react'
import { Form, Input } from 'antd'
import classNames from 'classnames'

import type { FieldProps } from 'redux-form'

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
}

const TextAreaField = ({
  input,
  meta,
  colon,
  extra,
  help,
  hasFeedback,
  label,
  labelCol,
  wrapperCol,
  required,
  hideError,
  ...props
}: Props & FormItemProps & FieldProps) => {
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
      <TextArea {...input} {...props} />
    </FormItem>
  )
}

export default TextAreaField
