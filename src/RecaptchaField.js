// @flow
import React from 'react'
import { Form, Input, Spin } from 'antd'
import Recaptcha from 'react-recaptcha'

const FormItem = Form.Item

type Props = Object
type State = Object

class RecaptchaField extends React.Component<Props, State> {
  state = {
    loading: true
  }
  
  render() {
    const field = this.props
    
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
    
    const onLoadCallback = () => {
      if (field.onLoadCallback) {
        field.onLoadCallback()
      }
      
      this.setState({loading: false})
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
        {this.state.loading && (
          <div style={{textAlign: 'center'}}>
            <Spin tip="Loading reCAPTCHA..." />
          </div>
        )}
      
        <div style={{display: this.state.loading ? 'none' : 'block'}}>
          <Recaptcha
            className={field.className}
            elementID={field.elementID}
            expiredCallback={field.expiredCallback}
            render={field.render}
            sitekey={field.siteKey}
            theme={field.theme}
            type={field.type}
            size={field.size}
            tabindex={field.tabIndex}
            hl={field.hl}
            badge={field.badge}
            onloadCallback={onLoadCallback}
            verifyCallback={verifyCallback}
          />
        </div>
      </FormItem>
    )
  }
}

export default RecaptchaField
