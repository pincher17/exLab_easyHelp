import styled from 'styled-components'

import { InputWrapper, WorkerBlankWrapper, WorkerFormFieldsWrapper, Text } from 'containers/WorkerBlank'

export const WorkerAccountWrapper = styled(WorkerBlankWrapper)``

export const WorkerAccountFormFieldsWrapper = styled(WorkerFormFieldsWrapper)``

export const FirstColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: flex-start;
  justify-content: flex-start;

  max-width: 630px;
  width: 100%;

  @media screen and (max-width: 1024px) {
    max-width: 100%;
  }
  @media screen and (max-width: 640px) {
    gap: 24px;
  }
`

export const SecondColumnWrapper = styled.div`
  display: flex;

  align-items: flex-start;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`

export const InputAccountWrapper = styled(InputWrapper)`
  justify-content: flex-start;

  & > div {
    width: 328px;
    & input {
      margin-top: 0;
      width: 328px;
      @media screen and (max-width: 1024px) {
        width: 100%;
      }
    }
  }

  & span {
    top: 31%;
    right: 10%;
  }

  @media screen and (max-width: 1024px) {
    & > div {
      width: 100%;
    }
  }

  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
    gap: 14px;
  }
`

export const EmailWrapper = styled(InputAccountWrapper)`
  @media screen and (max-width: 640px) {
    & > span {
      &:first-child {
        max-width: min-content;
        min-width: min-content;
      }
    }
  }
`

// ------------------------------------Text----------------------------------------------------
export const TextValue = styled(Text)`
  text-transform: none;
  font-weight: 300;
  font-size: 20px;
  line-height: 24px;
  @media screen and (max-width: 640px) {
    width: auto;
  }
`
