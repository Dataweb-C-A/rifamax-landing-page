import { createStyles, Text, Container, ActionIcon, Group, Image } from '@mantine/core'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons'
import moment from 'moment'

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    // backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    backgroundColor: '#fff',
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center'
    }
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center'
    }
  },

  groups: {
    display: 'flex',
    flexWrap: 'wrap',

    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  wrapper: {
    width: 160
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline'
    }
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column'
    }
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs
    }
  }
}))

// interface FooterLinksProps {
//   data: {
//     title: string;
//     links: { label: string; link: string }[];
//   }[];
// }

const data = [
  {
    title: 'Rifamax',
    links: [
      { label: 'Sobre', link: '#' },
      { label: 'Blog', link: '#' },
      { label: 'Noticias', link: '#' }
    ]
  },
  {
    title: 'Rifas',
    links: [
      { label: 'Premios', link: '#' },
      { label: 'Numeros', link: '#' },
      { label: 'Mas', link: '#' }
    ]
  },
  {
    title: 'Sorteos',
    links: [
      { label: 'Premios', link: '#' },
      { label: 'Numeros', link: '#' },
      { label: 'Mas', link: '#' }
    ]
  }
]

// export function FooterLinks ({ data }: FooterLinksProps) {
export default function Footer () {
  const { classes } = useStyles()

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ))

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    )
  })

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image
            src="https://rifa-max.com/logo-rifamax.png"
            alt="Rifamax"
            width={70}
            height={70}
          /> <Text>Rifamax</Text>
            <Text size="xs" color="dimmed" className={classes.description}>
            Gana premios todos los dias
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="sm">
          © {moment().format('YYYY')} Dataweb C.A. Todos los derechos reservados.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  )
}
