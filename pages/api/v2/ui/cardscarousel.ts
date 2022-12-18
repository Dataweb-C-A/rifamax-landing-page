import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
  image: string
  title: string
  description: string
  hasButton: boolean
  button: {
    text: string
    url: string
    reference: string | null
  }
}>

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(
    [
      {
        image: 'https://upload.wikimedia.org/wikipedia/commons/4/41/2009_Zenvo_ST1.jpg',
        title: 'premio 1',
        description: 'El mejor lugar para ganar dinero, con los mejores juegos y los mejores premios al mejor precio.',
        hasButton: true,
        button: {
          text: 'Saber mas',
          url: 'https://www.google.com',
          reference: 'premios'
        }
      },
      {
        image: 'https://s1.1zoom.me/b5050/145/Money_Banknotes_Dollars_472979_2560x1440.jpg',
        title: 'premio 2',
        description: 'Gana siempre con nosotros',
        hasButton: true,
        button: {
          text: 'Gana siempre con nosotros',
          url: 'https://www.google.com',
          reference: 'blog'
        }
      },
      {
        image: 'https://s1.1zoom.me/b5050/145/Money_Banknotes_Dollars_472979_2560x1440.jpg',
        title: 'premio 2',
        description: 'Gana siempre con nosotros',
        hasButton: true,
        button: {
          text: 'Gana siempre con nosotros',
          url: 'https://www.google.com',
          reference: 'blog'
        }
      },
      {
        image: 'https://s1.1zoom.me/b5050/145/Money_Banknotes_Dollars_472979_2560x1440.jpg',
        title: 'premio 2',
        description: 'Gana siempre con nosotros',
        hasButton: true,
        button: {
          text: 'Gana siempre con nosotros',
          url: 'https://www.google.com',
          reference: 'blog'
        }
      },
      {
        image: 'https://s1.1zoom.me/b5050/145/Money_Banknotes_Dollars_472979_2560x1440.jpg',
        title: 'premio 2',
        description: 'Gana siempre con nosotros',
        hasButton: true,
        button: {
          text: 'Gana siempre con nosotros',
          url: 'https://www.google.com',
          reference: 'blog'
        }
      },
      {
        image: 'https://s1.1zoom.me/b5050/145/Money_Banknotes_Dollars_472979_2560x1440.jpg',
        title: 'premio 2',
        description: 'Gana siempre con nosotros',
        hasButton: true,
        button: {
          text: 'Gana siempre con nosotros',
          url: 'https://www.google.com',
          reference: 'blog'
        }
      },
      {
        image: 'https://s1.1zoom.me/b5050/145/Money_Banknotes_Dollars_472979_2560x1440.jpg',
        title: 'premio 2',
        description: 'Gana siempre con nosotros',
        hasButton: true,
        button: {
          text: 'Gana siempre con nosotros',
          url: 'https://www.google.com',
          reference: 'blog'
        }
      }
    ]
  )
}
