import React, { type ElementRef } from 'react';

import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PhotoIcon from '@mui/icons-material/Photo';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { CanvasBlock } from '../../components/CanvasBlock';
import { ImageModal } from '../../components/ImageModal';
import { SideBar } from '../../components/SideBar';
import { useTheme } from '../../hooks/useTheme';
import { useImageStore } from '../../stores';

const drawerWidth = 320;

export default function MainPage() {
  const toolbarRef = React.useRef<ElementRef<'div'>>(null);

  const { themeMode, toggleTheme } = useTheme();

  const image = useImageStore((state) => state.image);

  const [imageModalOpen, setImageModalOpen] = React.useState(false);

  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
  });

  React.useEffect(() => {
    if (toolbarRef.current) {
      setDimensions({
        width: window.innerWidth - drawerWidth,
        height: window.innerHeight - toolbarRef.current.offsetHeight,
      });
    }
  }, []);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', gap: 1 }}>
          <Typography variant="h5" noWrap component="h1">
            Draw Point
          </Typography>

          <IconButton onClick={toggleTheme} color="inherit">
            {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      <SideBar width={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundImage: image ? `url(${image})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Toolbar ref={toolbarRef} />

        <CanvasBlock width={dimensions.width} height={dimensions.height} />

        <IconButton
          size="large"
          onClick={() => setImageModalOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            color: 'primary.main',
            backgroundColor: 'primary.contrastText',
          }}
        >
          <PhotoIcon fontSize="large" />
        </IconButton>
      </Box>

      {imageModalOpen && (
        <ImageModal
          isOpen={imageModalOpen}
          onClose={() => setImageModalOpen(false)}
        />
      )}
    </Box>
  );
}
