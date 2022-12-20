import React/*, { useRef } */ from 'react'
// import Autoplay from 'embla-carousel-react'
import { Carousel } from '@mantine/carousel'
import { Card, Image, Text, Badge, Button, Group/*, createStyles */ } from '@mantine/core'

// const useStyles = createStyles((_theme, _params, getRef) => ({
//   controls: {
//     ref: getRef('controls'),
//     transition: 'opacity 150ms ease',
//     opacity: 0
//   },

//   root: {
//     '&:hover': {
//       [`& .${getRef('controls')}`]: {
//         opacity: 1
//       }
//     }
//   }
// }))

interface Items {
  content: {
    [x: string]: any
  }[]
}

const CardsCarousel: React.FC<Items> = ({ content }: Items) => {
  // const autoplay = useRef(Autoplay({ delay: 5000 }))
  return (
    <Carousel
      withIndicators={false}
      withControls
      height='100%'
      slideSize='25%'
      slideGap='md'
      align='start'
      mx={35}
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 }
      ]}
      draggable={false}
      // styles={{
      //   control: {
      //     '&[data-inactive]': {
      //       opacity: 0,
      //       cursor: 'default'
      //     }
      //   }
      // }}
      // plugins={[autoplay.current]}
      // onMouseEnter={autoplay.current.stop}
      // onMouseLeave={autoplay.current.reset}
    >
      {
        content.map((slide, index) => {
          return (
            <Carousel.Slide key={index}>
              <Card shadow='sm' p='lg' radius='sm' withBorder>
                <Card.Section>
                  <Image
                    src={slide.image}
                    height='200px'
                    alt='Premios'
                  />
                </Card.Section>
                <Group position='apart' mt='md' mb='xs'>
                  <Text weight={500}>{slide.title}</Text>
                  <Badge color='green' variant='light'>
                    Activo
                  </Badge>
                </Group>

                <Text size='sm' color='dimmed'>
                  Prueba prueba prueba prueba prueba prueba prueba prueba prueba
                  prueba prueba prueba prueba prueba prueba prueba prueba prueba
                  prueba prueba prueba prueba prueba prueba prueba prueba prueba
                </Text>

                <Button variant='light' color='blue' fullWidth mt='md' radius='md'>
                  Ver más
                </Button>
              </Card>
            </Carousel.Slide>
          )
        })
      }
    </Carousel>
  )
}

export default CardsCarousel
