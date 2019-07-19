// @flow

import React from 'react'
import { Form, Input, Spin } from 'antd'
import Recaptcha from 'react-recaptcha'
import type { FieldProps } from 'redux-form'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item

type Props = {} & FormItemProps & FieldProps
type State = {
  loading: boolean,
}

class RecaptchaField extends React.Component<Props, State> {
  state = {
    loading: true,
  }

  render() {
    const {
      formItemProps,
      inputProps,
      sharedProps,
      restProps: { verifyCallback, onLoadCallback, ...restProps },
    } = prepareProps(this.props)

    const handleVerifyCallback = response => {
      if (verifyCallback) {
        verifyCallback(response)
      }

      sharedProps.handleChange(response)
    }

    const handleLoadCallback = () => {
      if (onLoadCallback) {
        onLoadCallback()
      }

      this.setState({ loading: false })
    }

    return (
      <FormItem {...formItemProps}>
        <div
          id={sharedProps.inputWrapperID}
          className={sharedProps.inputWrapperClassName}
        >
          {sharedProps.beforeInput}

          {sharedProps.customInput ? (
            sharedProps.customInput(this.props, this.state)
          ) : (
            <div>
              {this.state.loading && (
                <div style={{ textAlign: 'center' }}>
                  <Spin tip="Loading reCAPTCHA..." />
                </div>
              )}

              <div style={{ display: this.state.loading ? 'none' : 'block' }}>
                <Recaptcha
                  {...restProps}
                  onloadCallback={handleLoadCallback}
                  verifyCallback={handleVerifyCallback}
                />
              </div>
            </div>
          )}

          {sharedProps.afterInput}
        </div>
      </FormItem>
    )
  }
}

export default RecaptchaField
