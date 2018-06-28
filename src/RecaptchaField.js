// @flow
import React from 'react'
import { Form, Input } from 'antd'
import Recaptcha from 'react-recaptcha'

const FormItem = Form.Item

const RecaptchaField = (field: Object) => {
  const hasError = field.meta.touched && field.meta.error && !field.hideError

  const verifyCallback = response => {
    if (field.verifyCallback) {
      field.verifyCallback(response)
    }

    if (field.input.onChange) {
      field.input.onChange(response)
    }

    if (field.onChange) {
      field.onChange(response)
    }
  }
  
  const onloadCallback = response => {
    if (field.onloadCallback) {
      field.onloadCallback(response)
    }
  }

  const labelCol =
    field.labelCol ||
    (field.label ? { xs: { span: 24 }, sm: { span: 8 } } : { span: 0 })
  const wrapperCol =
    field.wrapperCol ||
    (field.label ? { xs: { span: 24 }, sm: { span: 16 } } : { span: 24 })

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
      <Recaptcha
        className={field.className}
        onloadCallbackName={field.onloadCallbackName}
        elementID={field.elementID}
        expiredCallback={field.expiredCallback}
        render={field.render}
        sitekey={field.sitekey}
        theme={field.theme}
        type={field.type}
        verifyCallbackName={field.verifyCallbackName}
        expiredCallbackName={field.expiredCallbackName}
        size={field.size}
        tabindex={field.tabindex}
        hl={field.hl}
        badge={field.badge}
        onloadCallback={onloadCallback}
        sitekey={this.state.showRecaptcha}
        verifyCallback={verifyCallback}
      />
    </FormItem>
  )
}

export default RecaptchaField
