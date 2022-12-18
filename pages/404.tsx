import { Text, Paper, Button } from '@mantine/core'

export default function Custom404 () {
  return (
    <div>
      <Paper style={{ margin: '2% 10%' }} shadow='xl' p='xl' withBorder ta='center'>
        <Text color='red'><strong>ERROR 404:</strong> No encontrado</Text>
        <hr style={{ backgroundColor: 'red', height: '1.5px', borderRadius: '5px', border: 'none' }}/>
        <Text> Te recomendamos visitar nuestros articulos RifaMax.</Text>
        <Button size='xs' mt={'10px'} color='red'>
          <a style={{ textDecoration: 'none', color: 'white' }} href='/articulos'>Ver más</a>
        </Button>
      </Paper>
    </div>
  )
}
