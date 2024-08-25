import { useState } from 'react'

import { TitleQuestion, TitleQuestionIcon, Contents, Inner, ItemWraper } from './Accordion.styles'

const Accordion = ({ itemName, itemContent }: { itemName: string; itemContent: any }): JSX.Element => {
  const [open, setOpen] = useState<any>(false)

  return (
    <ItemWraper>
      <TitleQuestion isOpen={open}>
        {itemName}
        <TitleQuestionIcon onClick={() => setOpen(!open)} isOpen={open}>
          +
        </TitleQuestionIcon>
      </TitleQuestion>

      <Contents>{open && <Inner> {itemContent}</Inner>}</Contents>
    </ItemWraper>
  )
}

export default Accordion
