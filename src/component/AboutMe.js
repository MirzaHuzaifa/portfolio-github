import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function AboutMe({formInputs, updateFormInputs}) {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="E-mail" variant="outlined" value={formInputs.email} onChange={e => updateFormInputs({...formInputs, 'email': e.target.value})} />
      <TextField id="filled-basic" label="Message" variant="filled" value={formInputs.message} onChange={e => updateFormInputs({...formInputs, 'message': e.target.value})} />
    </Box>
  );
}