import React from "react";
import BasicRating from "./BasicRating";
import imgMountain from "./mountain.jpg";
import Skill from "./Skill";

const skills = [
    {id: 1, img: "images/monitor.png", h1: "web developement", para: "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet.", rating: 4},
    {id: 2, img: "images/monitor.png", h1: "web developement", para: "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet.", rating: 5},
    {id: 3, img: "images/monitor.png", h1: "web developement", para: "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet.", rating: 5},
    {id: 4, img: "images/monitor.png", h1: "web developement", para: "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet.", rating: 4},
    {id: 5, img: "images/monitor.png", h1: "web developement", para: "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet.", rating: 4},
  ];
export default function Skills(props){

    return(
        <section style={{'backgroundImage':`linear-gradient(to right, #3D0F00,black)`}}>
        <div key={Skill.id} className="grid justify-between w-11/12 grid-cols-1 gap-6 pt-8 m-auto mx-auto text-center align-center max-w-screen-2xl md:w-10/12 xl:w-8/12 sm:grid sm:gap-10 sm:grid-cols-3">
        {
            skills.map(skill => {
            return (<Skill key={skill.id} skill={skill}/>)
            })
        }
        </div>
       
       </section>
    )
}