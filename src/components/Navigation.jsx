export function Navigation() {
    return (
      <nav style={{ 
        background: '#333', 
        padding: '10px',
        color: 'white'
      }}>
        <a href="/" style={{ color: 'white', marginRight: '15px' }}>Главная</a>
        <a href="/about" style={{ color: 'white' }}>О нас</a>
      </nav>
    )
  }