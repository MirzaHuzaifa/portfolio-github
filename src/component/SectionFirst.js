import React from "react";
import HireMe from "./HireMe";
import HireMeModal from "./HireMeModal"


    function toggleWidth() {
      if (document.getElementById("myBtn").style.width == "100%") {
        document.getElementById("myBtn").style.width = "40px";
      } else {
        document.getElementById("myBtn").style.width = "100%";
      }
    }

export default function SectionFirst(){

    return(

        <section
        className="bg-black flex h-[800px] sm:h-[100vh]"
        style={{ backgroundImage: `linear-gradient(to top, #3D0F00,black)` }}
        >
      
        
        <div className="relative w-11/12 m-auto mx-auto max-w-screen-2xl md:w-10/12 xl:w-8/12">
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
                
                  <button className="text-sm sm:text-basis leading-normal py-1 px-4 transition duration-150 ease-out hover:scale-110 sm:px-10 mt-12 sm:ml-5 bg-white rounded-[50px] text-red-600">
                    About Me
                  </button>
                  
                  
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

       

        <div className="wave-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".25"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
              opacity=".5"
              className="shape-fill"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>

        <div
          id="myBtn"
          className="z-40 h-[634px] sm:h-[634px] m-auto mx-auto fixed sm:fixed bg-gradient-to-t from-[#3D0F00]  to-black float-right hover:w-[100px] hover:ease-in-out"
          onClick={toggleWidth}
          style={{ transition: "width 3s", width: "100%" }}></div>
          
      </section>
    )
}