import React from "react";
import BasicRating from "./BasicRating";

export default function Skill(props) {
  const skill = props.skill
    return (   
    <div>     
        <div key={skill.id} className="border text-center items-center mb-2 hover:animate-[slowMove-2s-easy-in-out-infinite] md:mb-2 xl:mb-2 h-[240px] pt-3 p-2 rounded-lg">
          <img className="m-auto" src={skill.img}/>
          <h1 className="mb-2 font-bold">{skill.h1}</h1>
          <p className="font-thin">{skill.para}</p>
          
        </div>
        <BasicRating rating={skill.rating} />
    </div>
      
      );
        }     
    
  