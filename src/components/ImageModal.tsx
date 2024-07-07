import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { useImageStore } from '../stores';

export function ImageModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const image = useImageStore((state) => state.image);
  const setImage = useImageStore((state) => state.setImage);

  const [url, setUrl] = React.useState(image);

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          p: 4,
          width: 400,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          bgcolor: 'background.paper',
          border: '2px solid currentColor',
          borderRadius: 2,
          boxShadow: 24,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <Typography variant="h6" component="h3">
          Background image for canvas
        </Typography>

        <TextField
          id="ud"
          label="URL"
          variant="standard"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <Box sx={{ display: 'flex', gap: 1 }}>
          <Button
            variant="outlined"
            fullWidth
            color="error"
            onClick={() => {
              setImage(null);
              onClose();
            }}
          >
            Delete
          </Button>

          <Button
            variant="contained"
            fullWidth
            color="success"
            onClick={() => {
              setImage(url);
              onClose();
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
