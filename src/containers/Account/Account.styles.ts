import styled from 'styled-components'

import { Title } from 'containers/Applicants'
import { WorkerBlankWrapper } from 'containers/WorkerBlank'

export const AccountWrapper = styled(WorkerBlankWrapper)``

export const AccountTitle = styled(Title)`
  color: ${(props) => props.theme.color.black};
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
`
