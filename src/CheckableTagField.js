// @flow

import React from 'react'
import { Form, Tag } from 'antd'
import classNames from 'classnames'

import type { FieldProps } from 'redux-form'

import type { FormItemProps } from './types'

const FormItem = Form.Item
const CheckableTag = Tag.CheckableTag

type Props = {
  options: Array<{
    disabled: boolean,
    value: string,
    title: string,
  }>,
}

const CheckableTagField = ({
  input,
  meta,
  ...props
}: Props & FormItemProps & FieldProps) => {
  const selectedTags = input.value || []

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag)

    input.onChange(nextSelectedTags)
    input.onBlur(nextSelectedTags)
  }

  const hasError = meta.touched && meta.error && !props.hideError

  const _labelCol =
    props.labelCol ||
    (props.label ? { xs: { span: 24 }, sm: { span: 8 } } : { span: 0 })
  const _wrapperCol =
    props.wrapperCol ||
    (props.label ? { xs: { span: 24 }, sm: { span: 16 } } : { span: 24 })

  return (
    <FormItem
      colon={props.colon}
      extra={props.extra}
      hasFeedback={props.hasFeedback}
      help={hasError ? meta.error : props.help}
      label={props.label}
      labelCol={_labelCol}
      required={props.required}
      validateStatus={hasError ? 'error' : ''}
      wrapperCol={_wrapperCol}
    >
      {props.options.map(tag => (
        <CheckableTag
          className={classNames(tag.tagClassName, { disabled: tag.disabled })}
          key={tag.value}
          checked={selectedTags.indexOf(tag.value) > -1}
          onChange={checked =>
            !tag.disabled && handleChange(tag.value, checked)
          }
        >
          {tag.title}
        </CheckableTag>
      ))}
    </FormItem>
  )
}

export default CheckableTagField
