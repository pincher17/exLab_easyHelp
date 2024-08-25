import userCapture from '../../assets/img/userCapture.jpg'

interface Contacts {
  phone: string
  email: string
}
export interface User {
  avatar: string
  name: string
  surname: string
  city: string
  birthday: string
  description: string
  contacts: Contacts
}
export const userData = {
  avatar: userCapture,
  name: 'Валера',
  surname: 'Петров',
  city: 'Минск',
  birthday: '01.01.2006',
  description:
    '— Робото имеет двойственную природу. Он имеет механический скелет, и его формы в значительной степени геометричны. В то же время шрифт отличается дружелюбными и открытыми изгибами. В то время как некоторые гротески искажают свои формы букв, чтобы придать им жесткий ритм, Roboto не идет на компромисс, позволяя буквам укладываться в свою естественную ширину. Это обеспечивает более естественный ритм чтения, который чаще встречается в гуманистических шрифтах и шрифтах с засечками.',
  contacts: {
    phone: '+375 29 800 00 01',
    email: 'v.petrov@gmail.com',
  },
}
