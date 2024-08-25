import React from 'react'

import { InputWrapper } from './Input.styles'
import { InputProps } from './Input.types'

import { ReactComponent as VisibilityIcon } from 'assets/icons/visibilityIcon.svg'
import { ReactComponent as VisibilityOffIcon } from 'assets/icons/visibilityOffIcon.svg'

const Input: React.FC<InputProps> = (props) => {
  const {
    id,
    label,
    type,
    name,
    placeholder,
    value,
    autoResize = false,
    onChange,
    onChangeVisibility,
    onBlur,
    onFocus,
    error,
    helperText,
    visibility,
    visibilityIcon,
    children,
    disabled,
  } = props

  const textAreaRef = React.useRef<HTMLTextAreaElement | null>(null)

  const resizeTextArea = (): void => {
    if (textAreaRef && textAreaRef.current) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }

  React.useEffect(() => {
    if (type === 'textarea' && autoResize) {
      resizeTextArea()
    }
  }, [value, autoResize, type])

  return (
    <InputWrapper error={error} type={type}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          name={name}
          value={value}
          ref={textAreaRef}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
        />
      )}
      {children}
      {visibilityIcon && (
        <span onClick={onChangeVisibility}>{visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}</span>
      )}
      {error && <p>{helperText}</p>}
    </InputWrapper>
  )
}

export default React.memo(Input)
