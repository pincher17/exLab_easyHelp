import { FC } from 'react'

import { itemsAccordion } from './data'
import { FaqWrapper, FaqWrapperInner, HeadingWrapper, Title } from './Faq.styles'

import Accordion, { AccordionContainer } from 'components/Accordion'
import { LoginWrapper as WrapperFaq } from 'containers/Login'
import { Container } from 'providers/ThemeProvider'

const Faq: FC = () => {
  return (
    <WrapperFaq>
      <Container>
        <FaqWrapper>
          <FaqWrapperInner>
            <HeadingWrapper>
              <Title>вопрос-ответ</Title>
            </HeadingWrapper>
            <AccordionContainer>
              {itemsAccordion.map(({ itemName, itemContent }) => (
                <Accordion key={itemName} itemName={itemName} itemContent={itemContent} />
              ))}
            </AccordionContainer>
          </FaqWrapperInner>
        </FaqWrapper>
      </Container>
    </WrapperFaq>
  )
}

export default Faq
