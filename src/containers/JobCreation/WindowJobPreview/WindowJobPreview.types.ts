import { JobCreationFormValues } from '../JobCreation.types'

export interface WindowJobPreviewProps extends JobCreationFormValues {
  closeJobPreview: (e: React.MouseEvent<HTMLElement>) => void
}
