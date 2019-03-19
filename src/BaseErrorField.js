// @flow
import React from 'react'
import { Alert } from 'antd'

import type { FormProps } from 'redux-form'

type Props = {
  message: string,
} & FormProps

const BaseErrorField = (props: Props) => {
  if (props.meta.error) {
    return (
      <Alert
        message={props.message}
        description={(() => {
          if (props.meta.error.constructor === Array) {
            return (
              <ul style={{ paddingLeft: 18, margin: 0 }}>
                {props.meta.error.map((error, index) => {
                  return <li key={index}>{error}</li>
                })}
              </ul>
            )
          } else {
            return props.meta.error
          }
        })()}
        type="error"
        showIcon
      />
    )
  }

  return null
}

export default BaseErrorField
