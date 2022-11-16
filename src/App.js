import './App.css';
import React from "react";
import Skills from './component/Skills';

function App() {
  return (
    <div className="App">

      <section className="bg-black flex h-[800px] sm:h-[100vh]">
        <div className="w-11/12 m-auto mx-auto max-w-screen-2xl md:w-10/12 xl:w-8/12">
          <div className="flex flex-wrap justify-center m-auto sm:flex-nowrap">
              <img src="images/zaifa.jpg" alt='just-pic' className="h-[230px] sm:w-[250px] rounded-lg w-[200px] m-auto"/>
              <div className="flex justify-betwen">
                <div className=" px-5 max-w-[600px] lg:max-w-full">
                    <h1 className="text-white  text-[30px]">Huzaifa Hammad
                    </h1>
                    <h2 className="py-1 text-red-600">Front End Web Developer</h2>
                    <p className="text-white  py-1 text-[14px]">
                    A Frontend developer with more than 1 year of
                    work experience in softerware house.I really like make new designs and develope it . Hands-on experience in HTML, Css, Tailwind Css, React.js, Javascript .
                    </p>
                        <div>
                        <button className="text-md sm:text-basis py-1 transition duration-150 ease-out hover:scale-110 md:ease-in leading-normal px-4 sm:px-10  mt-12 bg-red-600 hover:bg-red-400 rounded-[50px] text-[#ffffff]" style={{ boxShadow:"1px 1px 30px 2px rgb(121, 18, 18)" }}>Hire Me</button>
                        <button className="text-sm sm:text-basis leading-normal py-1 px-4 transition duration-150 ease-out hover:scale-110 sm:px-10 mt-12 sm:ml-5 bg-white rounded-[50px] text-red-600">About Me</button>
                    </div>
                    
                </div>

                <div className="shrink-0">

                    <img src="images/sparrow.png" alt='just-pic' className="transition duration-150 ease-out cursor-pointer hover:scale-150 w-7"/>
                    <img src="images/insta.png" alt='just-pic' className="mt-8 transition duration-150 ease-out cursor-pointer hover:scale-150 w-7" />
                    <img src="images/in.png" alt='just-pic' className="mt-8 transition duration-150 ease-out cursor-pointer hover:scale-150 w-7" />
                    <img src="images/facebook.png" alt='just-pic' className="mt-8 transition duration-150 ease-out cursor-pointer hover:scale-150 w-7" />

                </div>

            </div>
          </div>
        </div>
      </section>

      <Skills/>
    </div>
    
  );
}

export default App;
