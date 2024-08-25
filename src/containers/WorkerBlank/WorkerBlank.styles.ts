import styled from 'styled-components'

export const WorkerBlankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  padding: 80px 0;

  @media screen and (max-width: 640px) {
    gap: 24px;
    padding: 40px 0;
  }
`

export const WorkerFormFieldsWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`

export const FirstColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  @media screen and (max-width: 640px) {
    justify-content: center;
  }
`

export const InputWrapper = styled.div`
  display: flex;
  min-height: 56px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  & > div {
    width: 100%;
    & > input {
      margin-top: 0;
      width: 328px;
    }
  }

  @media screen and (max-width: 640px) {
    flex-wrap: wrap;
    gap: 14px;
    & > div {
      width: auto;
    }
  }
`

export const NamesInputWrapper = styled(InputWrapper)`
  display: none;
  @media screen and (max-width: 640px) {
    display: flex;
  }
`
export const NameInputWrapper = styled(InputWrapper)`
  @media screen and (max-width: 640px) {
    display: none;
  }
`
export const TextareaWrapper = styled(InputWrapper)`
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  & > div {
    width: 100%;
    & > textarea {
      margin-top: 0;
      min-height: 281px;
      padding: 24px 34px;
      resize: none;
      overflow-y: hidden;
    }
  }
`

export const TextareaLabelWrapper = styled.div`
  @media screen and (max-width: 640px) {
    display: flex;
    align-items: center;
    & > span {
      min-width: min-content;
      max-width: min-content;
    }
    /* ***/ //**Tooltip */
    & > div {
      & > div {
        left: 95px;
        top: 228px;
        &::after,
        &::before {
          left: 19%;
          top: -16%;
          transform: translateX(-50%) rotate(90deg);
        }
        &::after {
          top: calc(-16% + 1px);
          left: 19%;
        }
      }
    }
  }

  & > div {
    display: none;
    @media screen and (max-width: 640px) {
      display: block;
    }
  }
`

export const EmailWrapper = styled(InputWrapper)`
  justify-content: flex-start;

  @media screen and (max-width: 640px) {
    & > span {
      &:first-child {
        max-width: min-content;
        min-width: min-content;
      }
    }
  }
`

export const ButtonWrapper = styled.div`
  margin-top: 80px;
  display: flex;
  flex-direction: row;
  gap: 24px;

  @media screen and (max-width: 1024px) {
    margin-top: 40px;
    flex-direction: column;
    & > button {
      width: 328px;
    }
  }
  @media screen and (max-width: 640px) {
    & > button {
      width: 100%;
    }
  }
`

export const Description = styled.p`
  display: block;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 30px;
  color: ${(props) => props.theme.color.gray};

  @media screen and (max-width: 640px) {
    display: none;
  }
`
// ------------------------------------Text----------------------------------------------------
export const Text = styled.span`
  display: block;
  width: 100%;
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;

  color: ${(props) => props.theme.color.black};

  text-transform: capitalize;

  @media screen and (max-width: 640px) {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
  }
`
export const EmailText = styled(Text)`
  text-transform: none;
  @media screen and (max-width: 640px) {
    width: auto;
  }
`

export const LabelText = styled(Text)`
  text-transform: none;

  min-width: 197px;
  max-width: 197px;
  width: 100%;

  white-space: nowrap;

  display: block;

  color: ${(props) => props.theme.color.black};

  @media screen and (max-width: 640px) {
    min-width: 132px;
    max-width: 132px;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    color: ${(props) => props.theme.color.label};
  }
`
