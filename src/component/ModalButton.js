import React from "react";
import childModal from "./childModal";

    function ShowMassege()
    {
            document.getElementById('modal').innerHTML = [<childModal/>];
    }

export default function ModalButton(){
    return(
        <button id="msgbtn" onClick={ShowMassege} className='px-6 bg-red-600 py-2 rounded-full mt-3 hover:bg-red-800 hover:scale-110 ml-2 text-[white] border-1 '> Send it</button>
    )
}