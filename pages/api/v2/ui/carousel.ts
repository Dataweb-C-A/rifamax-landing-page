// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = Array<{
  title: string
  description: string
  image_url: string | null
  image_alt: string | null
  url: string
  has_button: boolean
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
        description: 'Gana siempre con nosotros',
        image_url: 'https://i.imgur.com/1Q2w3X4.png',
        image_alt: 'Gana siempre con nosotros',
        url: 'https://www.google.com',
        has_button: true,
        button: {
          text: 'Gana siempre con nosotros',
          url: 'https://www.google.com',
          reference: 'home'
        }
      },
      {
        title: 'El mejor lugar para ganar',
        description: 'Gana siempre con nosotros',
        image_url: 'https://i.imgur.com/1Q2w3X4.png',
        image_alt: 'Gana siempre con nosotros',
        url: 'https://www.google.com',
        has_button: true,
        button: {
          text: 'Gana siempre con nosotros',
          url: 'https://www.google.com',
          reference: 'blog'
        }
      }
    ]
  )
}
