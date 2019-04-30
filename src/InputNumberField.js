// @flow

import React from 'react'
import { Form, InputNumber } from 'antd'
import classNames from 'classnames'

import type { FieldProps } from 'redux-form'

import type { FormItemProps } from './types'

const FormItem = Form.Item

type Props = {
  options: Array<{
    disabled: boolean,
    value: string,
    title: string,
  }>,
}

const InputNumberField = ({
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
  label,
  ...restProps
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
      <InputNumber {...input} {...restProps} />
    </FormItem>
  )
}

export default InputNumberField
