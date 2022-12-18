import { createStyles, Overlay, Title, Button, Text } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { scrollById } from './scrollById'
import React from 'react'

const useStyles = createStyles((theme) => ({
  hero: {
    position: 'relative',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%'
  },

  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: -1
  },

  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100wv',
    height: '100vh',
    zIndex: -1,
    imageRendering: 'pixelated'
  },

  container: {
    height: 700,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: theme.spacing.xl * 6,
    zIndex: 1,
    position: 'relative',

    [theme.fn.smallerThan('sm')]: {
      height: 500,
      paddingBottom: theme.spacing.xl * 3
    }
  },

  title: {
    color: theme.white,
    fontSize: 60,
    fontWeight: 900,
    lineHeight: 1.1,
    zIndex: 1,
    userSelect: 'none',

    [theme.fn.smallerThan('sm')]: {
      fontSize: 40,
      lineHeight: 1.2
    },

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      lineHeight: 1.3
    }
  },

  description: {
    color: theme.white,
    maxWidth: 600,
    zIndex: 1,
    userSelect: 'none',

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm
    }
  },

  control: {
    marginTop: `${theme.spacing.xl * 1.5}`,
    zIndex: 1,
    userSelect: 'none',

    [theme.fn.smallerThan('sm')]: {
      width: '80%',
      margin: `${theme.spacing.xl * 1.5} 0 0 0`
    }
  }
}))

interface HeroProps {
  content: {
    [x: string]: any
  }[]
}

const Hero: React.FC<HeroProps> = ({ content }: HeroProps) => {
  const { classes } = useStyles()

  return (
    <section className={classes.hero} id="home">
      <Overlay
        gradient='linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)'
        opacity={1}
        zIndex={0}
      />
      <Carousel slideSize="100%" height={'100vh'} withIndicators withControls={false}>
        {
          content.map((item, index) => (
            <Carousel.Slide key={index}>
              {
                !item.resource.isImage
                  ? (
                      <video autoPlay loop muted className={classes.video}>
                        <source src='https://cdn.discordapp.com/attachments/982500239846027355/1049074801165209700/Video_sin_titulo_Hecho_con_Clipchamp_1.mp4' type='video/mp4' />
                      </video>
                    )
                  : (
                      <div
                        className={classes.image}
                        style={{
                          backgroundImage: `url(${item.resource.url})`,
                          height: '100vh',
                          width: '100vw',
                          objectFit: 'cover',
                          zIndex: -1,
                          backgroundSize: 'cover'
                        }}
                      ></div>
                    )
              }
              <Title style={{ margin: '40vh auto 0 auto' }} className={classes.title} ta="center">{item.title}</Title>
              <Text style={{ margin: '10px auto 0 auto' }} className={classes.description} size='xl' mt='xl' ta="center">
                {item.description}
              </Text>

              {
                item.hasButton && (
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button variant='white' color='dark' size='md' className={classes.control} mt="xl" onClick={
                      () => scrollById(item.button.reference)
                    }>
                      {item.button.text}
                    </Button>
                  </div>
                )
              }
            </Carousel.Slide>
          ))
        }
      </Carousel>
    </section>
  )
}

export default Hero
