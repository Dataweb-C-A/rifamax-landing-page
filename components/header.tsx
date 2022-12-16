import { useState } from 'react'
import { createStyles, Header, Group, ActionIcon, Container, Burger, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons'
import { scrollById } from './scrollById'
import Link from 'next/link'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    backgroundColor: 'white',
    maxWidth: '100%',

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start'
    }
  },

  links: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      display: 'none'
    }
  },

  social: {
    width: 260,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto'
    }
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none'
    }
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[2],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[9]
    }
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'transparent', color: theme.primaryColor }).background,
      // color: theme.fn.variant({ variant: 'white', color: theme.primaryColor }).color
      color: theme.colors.gray[6]
    }
  }
}))

const links = [
  { link: '#', label: 'Inicio', navto: 'home' },
  { link: '#', label: 'Rifas', navto: 'premios' },
  { link: '#', label: 'Sobre Nosotros', navto: 'about' }
]

export function HeaderMiddle () {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
        scrollById(link.navto)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header height={56} mb={0} color={'black'} fixed={true}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} color={'white'} />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
        <Link href="/">
          <Image
            src="https://rifa-max.com/logo-rifamax.png"
            alt="Rifamax"
            width={90}
            height={50}
          />
        </Link>

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
    </Header>
  )
}
