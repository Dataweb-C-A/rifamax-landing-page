// import { SimpleGrid } from '@mantine/core'
// import { ArticleCard withBorders } from '../components/articleCard withBorders'
import React, { useState, useEffect } from 'react'
import { Text, Grid, Image } from '@mantine/core'
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
      <section id="premios">
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
      <section id="conocenos" style={{ marginBottom: '140px' }}>
      <Text ta='center' mb={'30px'}
          style={{
            margin: 0,
            padding: '30px',
            fontSize: '2.5rem',
            fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
            fontWeight: 400
          }}>
          Conócenos
        </Text>
        <Grid>
          <Grid.Col sm={12} md={6}>
            <Image
              src='https://i.imgur.com/hpq6qcv.jpg'
              alt='Rifa con nosotros'
              width={'100%'}
              height={'100%'}
              radius={'sm'}
              px={40}
              style={{
                userSelect: 'none'
              }}
            />
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <Text
              ta='center'
              style={{
                marginTop: '-7px',
                marginBottom: '10px',
                fontSize: '1.5rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
                fontWeight: 600
              }}>
              Rifa con nosotros
            </Text>
            <div>
              <Text mx={50} ta='justify'>
                Rifamax es una aplicación web y móvil que te permite realizar rifas de forma segura y automática. Con Rifamax, siempre ganas tú. 
              </Text><br/>
              <Text mx={50} ta='justify'>
                Con Rifamax no tienes que preocuparte por la realizacion de las rifas. Todo se realiza fácil y rápido a través de nuestra plataforma.
              </Text>
            </div>
          </Grid.Col>
        </Grid>
      </section>
      <Footer />
    </div>
  )
}
