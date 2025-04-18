import { useState } from 'react';
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { Box, Container, CssBaseline } from '@mui/material';

function App() {
  const [selectedLab, setSelectedLab] = useState(3); // По умолчанию 3-я лаба

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <CssBaseline />
      <Header />
      
      <Container sx={{ display: 'flex', flexGrow: 1, gap: 4, my: 4 }}>
        <Box sx={{ width: 250 }}>
          <Menu onSelectLab={setSelectedLab} />
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Content labId={selectedLab} />
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default App;