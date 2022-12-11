import React from "react";
import BasicRating from "./BasicRating";

export default function Skill(props) {
  const skill = props.skill
    return (   
    <div className="ml-[25px]">     
        <div key={skill.id} className="border text-center items-center mb-2  md:mb-2 xl:mb-2 text-white h-[240px] pt-3 p-2 rounded-lg">
          <img className="m-auto" src={skill.img}/>
          <h1 className="mb-2">{skill.h1}</h1>
          <p>{skill.para}</p>
          
        </div>
        <BasicRating rating={skill.rating} />
    </div>
      
      );
        }     
    
  