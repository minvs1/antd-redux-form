// @flow

import React from 'react'
import { Form, Upload, Button, Icon, Modal } from 'antd'
import type { FieldProps } from 'redux-form'
import type { Node } from 'react'

import { prepareProps } from './helpers'
import type { FormItemProps } from './types'

const FormItem = Form.Item
const ModalConfirm = Modal.confirm

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

const UploadFileField = (props: Props) => {
  const {
    formItemProps,
    inputProps,
    sharedProps,
    restProps: {
      uploadButton,
      preview,
      manualUpload,
      fileLimit,
      listType,
      ...restProps
    },
    children,
  } = prepareProps(props)

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

    if (fileLimit) {
      fileList = fileList.slice(-fileLimit)
    }

    inputProps.onChange(fileList)
    inputProps.onBlur()
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

  const _listType = listType || (preview ? 'picture-card' : undefined)

  return (
    <FormItem {...formItemProps}>
      <div
        id={sharedProps.inputWrapperID}
        className={sharedProps.inputWrapperClassName}
        style={sharedProps.inputWrapperStyle}
      >
        {sharedProps.beforeInput}

        {sharedProps.customInput ? (
          sharedProps.customInput(props)
        ) : (
          <Upload
            beforeUpload={beforeUpload}
            fileList={inputProps.value}
            listType={_listType}
            onChange={handleChange}
            onPreview={handlePreview}
            {...restProps}
          >
            {renderUploadButton()}
          </Upload>
        )}

        {sharedProps.afterInput}
      </div>
    </FormItem>
  )
}

export default UploadFileField
