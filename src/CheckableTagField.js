// @flow

import React from 'react'
import { Form, Tag } from 'antd'
import classNames from 'classnames'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item
const CheckableTag = Tag.CheckableTag

type Props = {
  options: Array<{
    disabled: boolean,
    value: string,
    title: string,
    tagClassName: string,
  }>,
} & FormItemProps &
  FieldProps

const CheckableTagField = (props: Props) => {
  const { formItemProps, inputProps, sharedProps, restProps } = prepareProps(
    props
  )

  const selectedTags = inputProps.value || []

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter(t => t !== tag)

    inputProps.onChange(nextSelectedTags)
    inputProps.onBlur(nextSelectedTags)
  }

  return (
    <FormItem {...formItemProps}>
      <div
        id={sharedProps.inputWrapperID}
        className={sharedProps.inputWrapperClassName}
      >
        {sharedProps.beforeInput}

        {sharedProps.customInput
          ? sharedProps.customInput(props)
          : props.options.map(tag => (
              <CheckableTag
                className={classNames(tag.tagClassName, {
                  disabled: tag.disabled,
                })}
                key={tag.value}
                checked={selectedTags.indexOf(tag.value) > -1}
                onChange={checked =>
                  !tag.disabled && handleChange(tag.value, checked)
                }
              >
                {tag.title}
              </CheckableTag>
            ))}
      </div>
    </FormItem>
  )
}

export default CheckableTagField
