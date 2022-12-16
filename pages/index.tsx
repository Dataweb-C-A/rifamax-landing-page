// import { SimpleGrid } from '@mantine/core'
// import { ArticleCard withBorders } from '../components/articleCard withBorders'
import { SimpleGrid, Image, Text, Card, Group } from '@mantine/core'
import { HeaderMiddle } from '../components/header'
import { Hero } from '../components/hero'
import Footer from '../components/footer'

export default function Home () {
  return (
    <div style={{ background: '#fafafa' }}>
      <HeaderMiddle />
      <Hero />
      <section style={{ marginBottom: '140px' }} id="premios">
        <Text ta='center' style={{ margin: 0, padding: '30px', fontSize: '2.5rem' }}>
          ¡Excelentes Premios!
        </Text>
        <SimpleGrid cols={4} spacing="xs">
          <Group position="apart" m="auto">
            <Card withBorder>
              <Image style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://i.pinimg.com/originals/d3/7c/02/d37c028eb99dec05f7b11a1c8c940005.jpg" alt="cocoyita" width={215} height={215} mt={'xl'} radius={'xl'} />
              <Text ta='center' style={{ padding: '30px', fontSize: '1.1rem', margin: 'auto', maxWidth: '320px' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem laborum reprehenderit aspernatur saepe ea quos maiores sed consequuntur voluptates nostrum dolor perferendis quas tempora, quae et id minus. In!
              </Text>
            </Card>
          </Group>
          <Group position="apart" m="auto">
            <Card withBorder>
              <Image style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://i.pinimg.com/originals/d3/7c/02/d37c028eb99dec05f7b11a1c8c940005.jpg" alt="cocoyita" width={215} height={215} mt={'xl'} radius={'xl'} />
              <Text ta='center' style={{ padding: '30px', fontSize: '1.1rem', margin: 'auto', maxWidth: '320px' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem laborum reprehenderit aspernatur saepe ea quos maiores sed consequuntur voluptates nostrum dolor perferendis quas tempora, quae et id minus. In!
              </Text>
            </Card>
          </Group>
          <Group position="apart" m="auto">
            <Card withBorder>
              <Image style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://i.pinimg.com/originals/87/3b/16/873b16e65374a28bedb9f18ff27a5502.jpg" alt="cocoyita" width={215} height={215} mt={'xl'} radius={'xl'} />
              <Text ta='center' style={{ padding: '30px', fontSize: '1.1rem', margin: 'auto', maxWidth: '320px' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem laborum reprehenderit aspernatur saepe ea quos maiores sed consequuntur voluptates nostrum dolor perferendis quas tempora, quae et id minus. In!
              </Text>
            </Card>
          </Group>
          <Group position="apart" m="auto">
            <Card withBorder>
              <Image style={{ marginLeft: 'auto', marginRight: 'auto' }} src="https://ca-times.brightspotcdn.com/dims4/default/00717c4/2147483647/strip/true/crop/6500x4565+0+0/resize/1200x843!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F69%2F42%2Fa9b2b3db43e58426f0002322f65c%2Fla-tr-travel-flyguy-20191222-04.jpg" alt="cocoyita" width={215} height={215} mt={'xl'} radius={'xl'} />
              <Text ta='center' style={{ padding: '30px', fontSize: '1.1rem', margin: 'auto', maxWidth: '320px' }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem quidem laborum reprehenderit aspernatur saepe ea quos maiores sed consequuntur voluptates nostrum dolor perferendis quas tempora, quae et id minus. In!
              </Text>
            </Card>
          </Group>
        </SimpleGrid>
      </section>
      <Footer />
    </div>
  )
}
