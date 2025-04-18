import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

export const Menu = ({ onSelectLab }) => {
  const labs = [
    { id: 1, title: "Лабораторная 1" },
    { id: 2, title: "Лабораторная 2" },
    { id: 3, title: "Лабораторная 3" }
  ];

  return (
    <List>
      {labs.map((lab) => (
        <ListItem key={lab.id} disablePadding>
          <ListItemButton onClick={() => onSelectLab(lab.id)}>
            <ListItemText primary={lab.title} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};