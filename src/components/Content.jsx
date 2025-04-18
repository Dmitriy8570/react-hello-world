import { Box, Typography } from '@mui/material';

export const Content = ({ labId }) => {
  const labContent = {
    1: "Содержимое лабораторной 1...",
    2: "Содержимое лабораторной 2...",
    3: "Содержимое лабораторной 3..."
  };

  return (
    <Box p={3}>
      <Typography variant="h5">Лабораторная {labId}</Typography>
      <Typography>{labContent[labId] || "Выберите лабораторную работу"}</Typography>
    </Box>
  );
};