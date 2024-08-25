import styled from 'styled-components'

export const Card = styled('div')`
  max-width: 305px;
  max-height: 270px;
  background: ${(props) => props.theme.color.white};
  box-shadow: 0px 4px 40px rgba(29, 153, 165, 0.1);
  border-radius: 8px;
  padding: 24px 24px;
  position: relative;
  @media screen and (max-width: 900px) {
    max-width: 305px;
  }
`

export const WrapperInfo = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 14px;
`

export const DateVacancy = styled('div')`
  font-family: 'Oswald';
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: ${(props) => props.theme.color.gray};
`

export const NameVacancy = styled('div')`
  font-family: 'Amatic SC';
  font-style: normal;
  font-weight: 700;
  text-transform: uppercase;
  color: ${(props) => props.theme.color.black};
  min-height: 116px;
  font-size: 36px;
  line-height: 40px;
  @media screen and (max-width: 860px) {
    font-size: 24px;
    line-height: 30px;
  }
`
export const NameCompany = styled(DateVacancy)`
  font-size: 16px;
  line-height: 24px;
`

export const WrapperCityAndSalary = styled('div')`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`
export const City = styled(NameCompany)``
export const Salary = styled(NameCompany)`
  font-size: 22px;
  line-height: 33px;
`
