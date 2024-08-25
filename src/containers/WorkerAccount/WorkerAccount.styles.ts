import styled from 'styled-components'

import { FirstColumnWrapper } from 'containers/EmployerAccount'

export const ColumnWrapper = styled(FirstColumnWrapper)``

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media screen and (max-width: 640px) {
    margin-top: 40px;
    flex-direction: column;
    & > button {
      width: 100%;
    }
  }
`
