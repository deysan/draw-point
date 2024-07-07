import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { usePointsStore } from '../stores/usePointsStore';
import { PointList } from './PointList';

export function SideBar({ width }: { width: number }) {
  const points = usePointsStore((state) => state.points);
  const addPoint = usePointsStore((state) => state.addPoint);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />

      <Box sx={{ overflow: 'auto' }}>
        <Typography
          variant="h6"
          noWrap
          component="h2"
          sx={{
            position: 'sticky',
            top: 0,
            p: 2,
            bgcolor: 'background.paper',
            borderBottom: 1,
            borderColor: 'divider',
            zIndex: 9,
          }}
        >
          List of points:
        </Typography>

        {points.length > 0 ? (
          <PointList />
        ) : (
          <Typography color="text.secondary" sx={{ p: 2 }}>
            No points yet...
          </Typography>
        )}

        <Box
          sx={{
            position: 'sticky',
            bottom: 0,
            p: 2,
            bgcolor: 'background.paper',
            borderTop: 1,
            borderColor: 'divider',
            zIndex: 9,
          }}
        >
          <Button variant="contained" fullWidth onClick={addPoint}>
            <AddIcon />
            Add point
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
