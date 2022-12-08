import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import AboutMe from './AboutMe';

import ModalForm from './ModalForm';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const [formSubmit, setFormSubmit] = React.useState(false);
  const [formInputs, setFormInputs] = React.useState({
    'email': '',
    'message': '',
  });
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  
  const handleChange = () => {
    setFormSubmit(true);
  };

  const updateFormInputs = (inputs) => {
    setFormInputs(inputs)
    console.log(inputs)
  }

  let content;

  if(!formSubmit){
    
    content = <ModalForm formInputs={formInputs} updateFormInputs={updateFormInputs} handleChange={handleChange}/>
     
  } else {
    content = <div className='w-[400px] rounded-md flex align-center' >
    <img src='images/okay-sign.png' className='w-[20px] h-[20px]'/>
    <p className='ml-2 text-green-800'>Thank you</p>
    </div>;
    
  }

  return (
    <>
    
    <button  onClick={handleOpen}
    className="text-md sm:text-basis py-1 transition duration-150 ease-out hover:scale-110 md:ease-in leading-normal px-4 sm:px-10  mt-12 bg-red-800 hover:bg-red-700 rounded-[50px] text-[#ffffff]"
    style={{ boxShadow: "1px 1px 30px 2px rgb(121, 18, 18)" }}>
    Hire Me
    </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
      
        <Box id='modal' sx={style} className='rounded-md' style={{ backgroundImage: `linear-gradient    (to top, #3D0F00,black)` }}>
        
        { content } 
       
        </Box>
        
      </Modal>
      
    </>
  );

}