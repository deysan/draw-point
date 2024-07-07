import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';

import { usePointsStore } from '../stores/usePointsStore';

export function PointList() {
  const points = usePointsStore((state) => state.points);
  const updatePoint = usePointsStore((state) => state.updatePoint);
  const deletePoint = usePointsStore((state) => state.deletePoint);

  return (
    <List>
      {points.map((point, index) => (
        <ListItem
          key={point.id}
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <ListItemText
            primary={index + 1}
            sx={{
              mr: 1,
              minWidth: '28px',
              flexShrink: 0,
              textAlign: 'center',
            }}
          />

          <TextField
            id="x"
            label="x"
            type="number"
            size="small"
            defaultValue={point.x}
            onChange={(e) =>
              updatePoint(point.id, Number(e.target.value), point.y)
            }
          />

          <TextField
            id="y"
            label="y"
            type="number"
            size="small"
            defaultValue={point.y}
            onChange={(e) =>
              updatePoint(point.id, point.x, Number(e.target.value))
            }
          />

          <IconButton onClick={() => deletePoint(point.id)}>
            <DeleteIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}
