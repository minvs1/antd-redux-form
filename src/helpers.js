// @flow

export const prepareProps = ({
  colon,
  extra,
  hasFeedback,
  help,
  label,
  labelCol,
  required,
  wrapperCol,
  hideError,
  inputWrapperID,
  inputWrapperClassName,
  inputWrapperStyle,
  beforeInput,
  afterInput,
  customInput,
  onChange,
  onValueChange,
  meta,
  input,
  children,
  dataTest,
  ...restProps
}: Object) => {
  const hasError = meta.touched && meta.error && !hideError

  return {
    formItemProps: {
      colon: colon,
      extra: extra,
      hasFeedback: hasFeedback,
      help: hasError ? meta.error : help,
      label: label,
      labelCol:
        labelCol ||
        (label ? { xs: { span: 24 }, sm: { span: 8 } } : { span: 0 }),
      required: required,
      validateStatus: hasError ? 'error' : '',
      wrapperCol:
        wrapperCol ||
        (label ? { xs: { span: 24 }, sm: { span: 16 } } : { span: 24 }),
    },
    metaProps: meta,
    inputProps: input,
    sharedProps: {
      inputWrapperID,
      inputWrapperClassName,
      inputWrapperStyle,
      beforeInput,
      afterInput,
      customInput,
      handleChange: (event: any) => {
        if (input.onChange) {
          input.onChange(event)
        }

        if (onChange) {
          onChange(event)
        }

        if (onValueChange) {
          onValueChange(event)
        }
      },
      dataTest,
    },
    children,
    restProps,
  }
}
