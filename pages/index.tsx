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
          <Grid.Col xs={12} sm={6}>
            <Image
              src='https://i.imgur.com/hpq6qcv.jpg'
              alt='Rifa con nosotros'
              width={500}
              height={500}
              m={'auto auto'}
              radius={'sm'}
            />
          </Grid.Col>
          <Grid.Col xs={12} sm={6}>
            <Text
              ta='center'
              style={{
                marginTop: '-7px',
                fontSize: '1.5rem',
                fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
                fontWeight: 600
              }}>
              Rifa con nosotros
            </Text>
            <div>
              <Text mx={100} ta='justify'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultrices, neque et auctor posuere, erat dolor convallis tortor, euismod fringilla magna urna et ligula. Nunc pretium, mi at suscipit rhoncus, est orci facilisis purus, sed faucibus eros erat id elit. Duis condimentum massa sit amet fermentum iaculis. Sed pulvinar sollicitudin sem, vitae cursus purus vestibulum quis. Pellentesque sit amet risus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi porta nibh non tristique consectetur. Praesent diam ipsum, varius et suscipit id, tincidunt non nisi. Integer non purus ut metus interdum maximus at sed risus. Etiam maximus scelerisque diam ultricies maximus. Nulla dignissim eros vitae metus fringilla lacinia. Sed condimentum elit porttitor enim pretium, eget vestibulum arcu pretium. Praesent sit amet scelerisque mi, nec feugiat ipsum. Curabitur tincidunt nisl eget magna pellentesque volutpat. Aenean sit amet risus quis nulla egestas viverra luctus a tortor.
              </Text>
            </div>
          </Grid.Col>
        </Grid>
      </section>
      <Footer />
    </div>
  )
}
