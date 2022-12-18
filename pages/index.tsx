// import { SimpleGrid } from '@mantine/core'
// import { ArticleCard withBorders } from '../components/articleCard withBorders'
import React, { useState, useEffect } from 'react'
import { Text } from '@mantine/core'
import { HeaderMiddle } from '../components/header'
import Hero from '../components/hero'
import Footer from '../components/footer'
import CardsCarousel from '../components/cardsCarousel'

export default function Home () {
  const [carousel, setCarousel] = useState([])
  const [cardsCarousel, setCardsCarousel] = useState([])

  useEffect(() => {
    const responseCarousel = fetch('/api/v2/ui/carousel')
    const responseCardsCarousel = fetch('/api/v2/ui/cardscarousel')

    responseCarousel.then((res) => {
      res.json().then((data) => {
        setCarousel(data)
      })
    })

    responseCardsCarousel.then((res) => {
      res.json().then((data) => {
        setCardsCarousel(data)
      })
    })
  }, [setCarousel, setCardsCarousel])

  return (
    <div style={{ background: '#fafafa' }}>
      <HeaderMiddle />
      <Hero content={carousel} />
      <section style={{ marginBottom: '140px' }} id="premios">
        <Text ta='center'
          style={{
            margin: 0,
            padding: '30px',
            fontSize: '2.5rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
            fontWeight: 400
          }}>
          ¡Excelentes Premios!
        </Text>
        <CardsCarousel content={cardsCarousel}/>
      </section>
      <Footer />
    </div>
  )
}
