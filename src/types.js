// @flow

import type { Node } from 'react'

export type FormItemProps = {
  colon: boolean,
  color: boolean,
  extra?: string | Node,
  hasFeedback?: boolean,
  help?: string | Node,
  hideError: boolean,
  label?: string | Node,
  labelCol?: any, // todo
  required?: boolean,
  wrapperCol?: any, // todo
}
