import { useNavigate } from 'react-router-dom'

import { ApplicantCardWrapper, CardTitle, CardCity, CardDate, CardInfo } from './ApplicantCard.styles'
import { ApplicantCardProps } from './ApplicantCard.types'

const ApplicantCard = ({ data: { id, name, surname, date, city, description } }: ApplicantCardProps): JSX.Element => {
  const navigate = useNavigate()

  return (
    <ApplicantCardWrapper onClick={() => navigate(`${id}`)}>
      <CardTitle>
        <h3>{name}</h3>
        <h3>{surname}</h3>
      </CardTitle>
      <CardDate>
        <span>Опубликовано</span>
        <span>{Intl.DateTimeFormat('ru').format(date)}</span>
      </CardDate>
      <CardCity>
        <h4>{city}</h4>
      </CardCity>
      <CardInfo>
        <p>{description}</p>
      </CardInfo>
    </ApplicantCardWrapper>
  )
}

export default ApplicantCard
