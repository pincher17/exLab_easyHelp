import styled from 'styled-components'

export const PhotoInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  position: relative;

  & > button {
    background-color: ${(props) => props.theme.button.palette.white};
    color: ${(props) => props.theme.color.label};
    padding: 5px;
    height: 53px;
    & svg path {
      display: none;
      transition: all 0.4s cubic-bezier(0.39, 0.575, 0.565, 1);
    }

    &:hover {
      border-color: ${(props) => props.theme.button.palette.hover};
      & path {
        stroke: ${(props) => props.theme.button.palette.hover};
      }
    }
    &:active {
      border-color: ${(props) => props.theme.button.palette.active};
      & path {
        stroke: ${(props) => props.theme.button.palette.active};
      }
    }
    @media screen and (max-width: 1024px) {
      position: absolute;
      bottom: 5%;
      right: 5%;
      width: 44px;
      height: 44px;
      & svg path {
        display: block;
      }
      & span {
        display: none;
      }
    }
  }

  & > p {
    display: ${(props) => (!props.hidden ? 'none' : 'block')};
    color: ${(props) => props.theme.color.error};
  }
`

export const PhotoInputStyled = styled.label`
  display: block;
  position: relative;

  width: 328px;
  height: 328px;

  border-radius: 8px;
  border: 1px solid ${(props) => (props.hidden ? props.theme.color.error : props.theme.color.gray)};
  background-color: white;

  & > input {
    position: absolute;

    width: 328px;
    height: 328px;

    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    opacity: 0;

    cursor: pointer;
  }

  &:hover {
    border-color: ${(props) => (props.hidden ? props.theme.color.error : props.theme.color.hover)};
    & h4 {
      color: ${(props) => props.theme.color.hover};
    }
  }
  &:focus {
    box-shadow: 0px 4px 40px rgba(33, 189, 203, 0.1);
    border-color: ${(props) => (props.hidden ? props.theme.color.error : props.theme.color.active)};
    & h4 {
      color: ${(props) => props.theme.color.active};
    }
  }
  &:focus-visible {
    outline: none;
  }
`

export const PhotoInputNoAvatarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  margin-top: 55px;

  font-family: 'Oswald';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  color: ${(props) => props.theme.color.gray};
  background: ${(props) => props.theme.color.white};

  & > h4 {
    font-weight: 300;
    font-size: 22px;
    line-height: 33px;
  }

  & > span {
    width: 262px;
  }
`

export const AvatarPreview = styled.img`
  width: 327px;
  height: 327px;

  border-radius: 8px;
`
