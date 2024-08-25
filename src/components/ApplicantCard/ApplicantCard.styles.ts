import styled from 'styled-components'

export const ApplicantCardWrapper = styled.div`
  padding: 24px;
  display: grid;
  grid-template-areas:
    'title title title date'
    'city city city city'
    'info info info info';
  row-gap: 17px;

  background-color: ${(props) => props.theme.bgColor.white};

  font-family: 'Oswald';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;

  @media screen and (max-width: 390px) {
    grid-template-areas:
      'title'
      'date'
      'city'
      'info';
  }
`

export const CardTitle = styled.div`
  grid-area: title;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 6px;

  & > h3 {
    font-family: 'Amatic SC';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    line-height: 40px;

    text-transform: uppercase;

    color: ${(props) => props.theme.color.black};
  }
`

export const CardDate = styled.div`
  grid-area: date;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 6px;

  color: ${(props) => props.theme.color.gray};

  line-height: 24px;
  text-transform: capitalize;
  @media screen and (max-width: 390px) {
    justify-content: flex-start;
  }
`

export const CardCity = styled.div`
  grid-area: city;
  & > h4 {
    text-align: start;
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 30px;
    text-transform: capitalize;

    color: ${(props) => props.theme.color.black};
  }
`
export const CardInfo = styled.div`
  grid-area: info;
  & > p {
    color: ${(props) => props.theme.color.gray};
  }
`
