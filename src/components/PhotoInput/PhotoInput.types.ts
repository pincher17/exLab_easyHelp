import { WorkerBlankFormValues } from 'containers/WorkerBlank/WorkerBlank.types'
import { FormikErrors } from 'formik/dist/types'
import { ReactNode } from 'react'

export interface PhotoInputProps {
  id: string
  name: string
  value: File | null
  disabled?: boolean
  add?: string
  description?: ReactNode
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void> | Promise<FormikErrors<WorkerBlankFormValues>>
}

export interface PhotoInputState {
  file: null | File
  imagePreviewUrl: string | ArrayBuffer | null
  isBig: boolean
}
