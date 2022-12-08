import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AboutMe from './AboutMe';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function HireMe() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
    <button onClick={handleOpen}
    className="text-md sm:text-basis py-1 transition duration-150 ease-out hover:scale-110 md:ease-in leading-normal px-4 sm:px-10  mt-12 bg-red-800 hover:bg-red-700 rounded-[50px] text-[#ffffff]"
    style={{ boxShadow: "1px 1px 30px 2px rgb(121, 18, 18)" }}
    >
    Hire Me
  </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Hello
          </Typography>

          <AboutMe />

        </Box>
      </Modal>
    </>
  );
}
