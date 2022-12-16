import { createStyles, Overlay, Title, Button, Text } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import { scrollById } from './scrollById'

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

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.sm
    }
  },

  control: {
    marginTop: `${theme.spacing.xl * 1.5}`,

    [theme.fn.smallerThan('sm')]: {
      width: '80%',
      margin: `${theme.spacing.xl * 1.5} 0 0 0`,
      marginLeft: '10% !important'
    }
  }
}))

export function Hero () {
  const { classes } = useStyles()

  return (
    <section className={classes.hero} id="home">
      <Overlay
        gradient='linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)'
        opacity={1}
        zIndex={0}
      />
      <Carousel slideSize="100%" height={700} withIndicators withControls={false}>
        <Carousel.Slide>
          <video autoPlay loop muted className={classes.video}>
            <source src='https://cdn.discordapp.com/attachments/982500239846027355/1049074801165209700/Video_sin_titulo_Hecho_con_Clipchamp_1.mp4' type='video/mp4' />
          </video>
          <Title style={{ margin: '330px auto 0 auto' }} className={classes.title} ta="center">El mejor lugar para ganar</Title>
          <Text style={{ margin: '10px auto 0 auto' }} className={classes.description} size='xl' mt='xl' ta="center">
            El mejor lugar para ganar dinero, con los mejores juegos y los mejores premios al mejor precio.
          </Text>

          <Button variant='white' color='dark' size='md' style={{ marginLeft: '46.29%' }} className={classes.control} mt="xl" onClick={
            () => scrollById('premios')
          }>
            Saber mas
          </Button>
        </Carousel.Slide>
      </Carousel>
    </section>
  )
}
