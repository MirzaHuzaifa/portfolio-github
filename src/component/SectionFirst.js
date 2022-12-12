import React from "react";
import HireMe from "./HireMe";
import HireMeModal from "./HireMeModal"
import "./SectionFirst.css";

    function toggleWidth() {
      if (document.getElementById("myBtn").style.width == "100%") {
        document.getElementsByClassName('container')[0].style.display = "none";
        document.getElementById("myBtn").style.width = "40px";
      } else {
        document.getElementById("myBtn").style.width = "100%";
        document.getElementsByClassName('container')[0].style.display = "block";
      }
    }

export default function SectionFirst(){

    return(

        <section
        className="bg-black flex h-[800px] sm:h-[100vh]"
        style={{ backgroundImage: `linear-gradient(to top, #3D0F00,black,#3D0F00)` }}
        >
      
        
        <div className="relative w-11/12 ml-[25px] sm:mx-auto sm:m-auto max-w-screen-2xl md:w-10/12 xl:w-8/12">
          <div className="flex flex-wrap justify-center m-auto sm:flex-nowrap">
            <img
              src="images/zaifa.jpg"
              alt="just-pic"
              className="h-[230px] sm:w-[250px] rounded-lg w-[200px] m-auto"
            />
            <div className="flex justify-betwen">
              <div className=" px-5 max-w-[600px] lg:max-w-full">
                <h1 className="text-white  text-[30px]">
                  Huzaifa Hammad 
                </h1>
                <h2 className="py-1 text-red-600">Front End Web Developer</h2>
                <p className="text-white  py-1 text-[14px]">
                  A Frontend developer with more than 1 year of work experience
                  in software house.I really like to make new designs and
                  develop it . Hands-on experience in HTML, Css, Tailwind Css,
                  React.js, Javascript .
                </p>
                <div>
                 
                  <HireMeModal />
                  
                </div>
              </div>

              <div className="shrink-0">
                <img
                  src="images/sparrow.png"
                  alt="just-pic"
                  className="transition duration-150 ease-out cursor-pointer hover:scale-110 w-7"
                />
                <img
                  src="images/insta.png"
                  alt="just-pic"
                  className="mt-10 transition duration-150 ease-out cursor-pointer hover:scale-110 w-7"
                />
                <img
                  src="images/in.png"
                  alt="just-pic"
                  className="mt-10 transition duration-150 ease-out cursor-pointer hover:scale-110 w-7"
                />
                <img
                  src="images/facebook.png"
                  alt="just-pic"
                  className="mt-10 transition duration-150 ease-out cursor-pointer hover:scale-110 w-7"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          id="myBtn"
          className="z-40 h-[100vh] sm:h-[100vh] m-auto mx-auto overflow-x-hidden fixed sm:fixed bg-gradient-to-t from-[#3D0F00]  to-black float-right hover:w-[100px] hover:ease-in-out"
          onClick={toggleWidth}
          style={{ transition: "width 3s", width: "100%" }}>
          <div className="container">
          <div className="upper">WellCome Here</div>
          <div className="lower">WellCome Here</div>
          <div className="inside">Hope You Have A Nice Day</div>
        </div></div>
          
      </section>
    )
}