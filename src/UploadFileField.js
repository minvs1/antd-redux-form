// @flow

import React from 'react'
import { Form, Upload, Button, Icon, Modal } from 'antd'

const FormItem = Form.Item
const ModalConfirm = Modal.confirm

import type { FieldProps } from 'redux-form'
import type { Node } from 'react'
import type { FormItemProps } from './types'

type Props = {
  preview: boolean,
  uploadButton?: Node,
  manualUpload: boolean,
  fileLimit?: number,
  singleFile: boolean,
  listType?: string,
  customRequest?: Function,
} & FormItemProps &
  FieldProps

const UploadFileField = ({
  colon,
  extra,
  hasFeedback,
  meta,
  help,
  hideError,
  required,
  labelCol,
  wrapperCol,
  input,
  label,
  listType,
  fileLimit,
  manualUpload,
  uploadButton,
  singleFile,
  preview,
  ...restProps
}: Props) => {
  const renderUploadButton = () => {
    if (!preview) {
      return uploadButton || <Button icon="upload">{'Click to Upload'}</Button>
    }

    return (
      uploadButton || (
        <div>
          <Icon type="plus" />

          <div className="ant-upload-text">{'Upload'}</div>
        </div>
      )
    )
  }

  const beforeUpload = () => {
    // Disable auto uploading
    if (manualUpload) {
      return false
    }
  }

  const handleChange = (info: { file: File, fileList: File[] }) => {
    let fileList = [...info.fileList]

    if (singleFile) {
      // Don't send array if singleFile enabled
      fileList = info.fileList[info.fileList.length - 1]
    } else if (fileLimit) {
      fileList = fileList.slice(-fileLimit)
    }

    input.onChange(fileList)
    input.onBlur()
  }

  const handlePreview = file => {
    ModalConfirm({
      okButtonProps: { style: { display: 'none' } },
      cancelText: 'Close',
      content: (
        <img src={file.url || file.thumbUrl} style={{ width: '100%' }} />
      ),
      icon: null,
    })
  }

  const hasError = meta.touched && meta.error && !hideError

  const _labelCol =
    labelCol || (label ? { xs: { span: 24 }, sm: { span: 8 } } : { span: 0 })
  const _wrapperCol =
    wrapperCol ||
    (label ? { xs: { span: 24 }, sm: { span: 16 } } : { span: 24 })

  const _listType = listType || (preview ? 'picture-card' : undefined)

  const fileList = input.value
    ? Array.isArray(input.value)
      ? input.value
      : [input.value]
    : []

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
      <Upload
        beforeUpload={beforeUpload}
        fileList={fileList}
        listType={_listType}
        onChange={handleChange}
        onPreview={handlePreview}
        {...restProps}
      >
        {renderUploadButton()}
      </Upload>
    </FormItem>
  )
}

export default UploadFileField
