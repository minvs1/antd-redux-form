// @flow
import React from 'react'
import { Form, Select } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const SelectField = (field: Object) => {
  const hasError = field.meta.touched && field.meta.error && !field.hideError

  const handleChange = (value, option) => {
    if (field.input.onChange) {
      field.input.onChange(value)
    }

    if (field.onChange) {
      field.onChange(value)
    }
  }

  const labelCol =
    field.labelCol ||
    (field.label ? { xs: { span: 24 }, sm: { span: 8 } } : { span: 0 })
  const wrapperCol =
    field.wrapperCol ||
    (field.label ? { xs: { span: 24 }, sm: { span: 16 } } : { span: 24 })

  // TODO: Implement OptGroup

  return (
    <FormItem
      colon={field.colon}
      extra={field.extra}
      hasFeedback={field.hasFeedback}
      help={hasError ? field.meta.error : field.help}
      label={field.label}
      labelCol={labelCol}
      required={field.required}
      validateStatus={hasError ? 'error' : ''}
      wrapperCol={wrapperCol}
    >
      <div id={field.id}>
        <Select
          allowClear={field.allowClear}
          autoFocus={field.autoFocus}
          defaultActiveFirstOption={field.defaultActiveFirstOption}
          defaultValue={field.defaultValue}
          disabled={field.disabled}
          dropdownClassName={field.dropdownClassName}
          dropdownMatchSelectWidth={field.dropdownMatchSelectWidth}
          dropdownStyle={field.dropdownStyle}
          filterOption={field.filterOption}
          firstActiveValue={field.firstActiveValue}
          getPopupContainer={field.getPopupContainer}
          labelInValue={field.labelInValue}
          maxTagCount={field.maxTagCount}
          maxTagPlaceholder={field.maxTagPlaceholder}
          mode={field.mode}
          notFoundContent={field.notFoundContent}
          optionFilterProp={field.optionFilterProp}
          optionLabelProp={field.optionLabelProp}
          placeholder={field.placeholder}
          showSearch={field.showSearch}
          showArrow={field.showArrow}
          size={field.size}
          tokenSeparators={field.tokenSeparators}
          value={field.input.value ? field.input.value : undefined}
          onBlur={field.onBlur}
          onChange={handleChange}
          onDeselect={field.onDeselect}
          onFocus={field.onFocus}
          onInputKeyDown={field.onInputKeyDown}
          onMouseEnter={field.onMouseEnter}
          onMouseLeave={field.onMouseLeave}
          onPopupScroll={field.onPopupScroll}
          onSearch={field.onSearch}
          onSelect={field.onSelect}
        >
          {field.options.map((option, index) => {
            return (
              <Option
                disabled={option.disabled}
                key={option.value}
                value={option.value}
                title={option.title || option.value}
              >
                {option.label}
              </Option>
            )
          })}
        </Select>
      </div>
    </FormItem>
  )
}

export default SelectField
