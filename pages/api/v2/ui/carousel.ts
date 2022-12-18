// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
  title: string
  description: string
  resource: {
    isImage: boolean
    url: string
    alt: string
  }
  url: string
  hasButton: boolean
  button : {
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
        title: 'El mejor lugar para ganar',
        description: 'El mejor lugar para ganar dinero, con los mejores juegos y los mejores premios al mejor precio.',
        resource: {
          isImage: false,
          url: 'https://cdn.discordapp.com/attachments/982500239846027355/1049074801165209700/Video_sin_titulo_Hecho_con_Clipchamp_1.mp4',
          alt: 'Gana siempre con nosotros'
        },
        url: 'https://www.google.com',
        hasButton: true,
        button: {
          text: 'Saber mas',
          url: 'https://www.google.com',
          reference: 'premios'
        }
      },
      {
        title: 'Prueba',
        description: 'Gana siempre con nosotros',
        resource: {
          isImage: true,
          url: 'https://s1.1zoom.me/b5050/145/Money_Banknotes_Dollars_472979_2560x1440.jpg',
          alt: 'Gana siempre con nosotros'
        },
        url: 'https://www.google.com',
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
