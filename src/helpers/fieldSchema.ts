import * as yup from 'yup'
import { AnyObject } from 'yup/lib/types'

import { FIELDS_HELPER_TEXT, FIELDS_REG } from 'constants/formFields'

interface FieldOption {
  type?: 'password' | 'email' | 'text'
  minLength: number
  maxLength: number
  required?: boolean
  matches?: RegExp
}

export const fieldSchema = ({
  required = false,
  minLength: minLengthText,
  maxLength: maxLengthText,
  matches,
  type = 'text',
}: FieldOption): yup.StringSchema<string | undefined, AnyObject, string | undefined> => {
  const schema = yup
    .string()
    .min(minLengthText, FIELDS_HELPER_TEXT.matches)
    .max(maxLengthText, FIELDS_HELPER_TEXT.matches)

  switch (type) {
    case 'text':
      // eslint-disable-next-line no-case-declarations
      const textSchema = schema.matches(matches || FIELDS_REG.text, FIELDS_HELPER_TEXT.matches)

      return required ? textSchema.required(FIELDS_HELPER_TEXT.required) : textSchema
    case 'email':
      return schema
        .required(FIELDS_HELPER_TEXT.required)
        .matches(matches || FIELDS_REG.email, FIELDS_HELPER_TEXT.matches)
    case 'password':
      return schema
        .required(FIELDS_HELPER_TEXT.required)
        .matches(matches || FIELDS_REG.password, FIELDS_HELPER_TEXT.matches)
    default:
      throw new Error('Проблема с валидацией поля')
  }
}
