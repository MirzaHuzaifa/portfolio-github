import React from "react";
import AboutMe from "./AboutMe";
import { Button } from '@mui/material';



    export default function ModalForm({formInputs, updateFormInputs ,handleChange}) {
        return(
            <div>
            <AboutMe formInputs={formInputs} updateFormInputs={updateFormInputs} />
         
             <Button onClick={() => { handleChange() }} variant="outlined" color="error">
                Submit
             </Button>
  
            </div>
            )
    }