import { Navigation } from './components/Navigation'
import { Container } from './components/Container'
import { Button } from './components/Button'

function App() {
  return (
    <>
      <Navigation />
      <Container>
        <h1>Hello World!</h1>
        <Button onClick={() => alert('Привет!')}>
          Нажми меня
        </Button>
      </Container>
    </>
  )
}

export default App