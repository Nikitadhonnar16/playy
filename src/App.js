import "./App.css";
import "./assets/css/Contact.css";
import { HiDotsHorizontal } from "react-icons/hi";
import playy from "../src/assets/playy.webp";
import office1 from "./assets/office1.webp";
import { useState } from "react";
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="App ">
      {/* Header */}

      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-64 items-center m-20">
        <div className="flex items-center">
          <svg
            width="70%"
            x="0px"
            y="0px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 244.8 49.97"
            className="ml-4"
          >
            <path d="M42.26,17.35q0,17.35-20.59,17.35H13.61V50H0V0H21.67Q42.27,0,42.26,17.35ZM26.32,22.64q1.83-1.62,1.83-5.29t-1.83-5.29c-1.23-1.08-3.23-1.62-6-1.62H13.61V24.26H20.3C23.09,24.26,25.09,23.72,26.32,22.64Z"></path>
            <path d="M45.65,50V0H59.26V38.23h24V50Z"></path>
            <path
              d="M122.69,50l-2.52-8.07H100.8L98.28,50h-14L101.66,0h17.93l17.35,50Zm-12.17-39-6.34,20.24h12.6Z"
              className=""
            ></path>
            <path
              d="M144.72,50V32l-20-32h15.91l11.24,18.43L163.15,0h15.34L158.33,32.11V50Z"
              className=""
            ></path>
            <path
              d="M193.89,50V32l-20-32h15.91L201,18.43,212.32,0h15.34L207.5,32.11V50Z"
              className=""
            ></path>
            <path d="M229.42,15.58a8.66,8.66,0,0,1-2.62-6.36,8.68,8.68,0,0,1,2.64-6.38,9,9,0,0,1,12.72,0,8.68,8.68,0,0,1,2.64,6.38,8.64,8.64,0,0,1-2.64,6.34,9,9,0,0,1-12.74,0ZM230.66,4a7.19,7.19,0,0,0-2.13,5.24,7.21,7.21,0,0,0,2.13,5.24,7.2,7.2,0,0,0,10.28,0,7.21,7.21,0,0,0,2.13-5.24A7.19,7.19,0,0,0,240.94,4a7.17,7.17,0,0,0-10.28,0Zm1.06,9.69V4.33h5q3.62,0,3.62,3.08a2.93,2.93,0,0,1-.49,1.65,2.66,2.66,0,0,1-1.36,1.06l2.24,3.55h-2.6l-2-3.15h-2v3.15Zm6.15-6.22c0-.82-.47-1.23-1.42-1.23h-2.32V8.71h2.32C237.4,8.71,237.87,8.29,237.87,7.45Z"></path>
          </svg>
        </div>
        <ul className="hidden lg:flex space-x-16 text-base">
          {["WORK", "ABOUT", "NEWS", "MOVES", "CAREERS", "CONTACT"].map(
            (item) => (
              <li key={item} className="relative cursor-pointer group">
                <a href={`#${item.toLowerCase()}`} className="relative">
                  {item}
                </a>
                <span className="absolute left-0 bottom-0 h-[2px] w-full bg-transparent transition-all duration-300 group-hover:bg-black group-focus:bg-black"></span>
              </li>
            )
          )}
        </ul>
        <div>
          <HiDotsHorizontal size={26} />
        </div>
      </div>

      {/* Mainsection */}
      <div className="flex flex-col md:flex-row mt-20 mx-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <img src={playy} alt="" className="animate-slide-up w-full" />
          {/* Apply animation here */}
        </div>
        <div className="my-4 md:my-24 md:ml-4">
          <div className="text-[50px] md:text-[90px] font-extrabold leading-tight text-[#1f1f21]">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight animate-slide-up">
              {/* Apply animation here */}
              PLAYY®/<div>CONNECT</div>
            </h1>
          </div>

          <div className="tracking-tight">
            <p className="text-lg md:text-xl">NEXT STORY, </p>
            <p className="text-lg md:text-xl">STARTS HERE.™</p>
            <p className="text-sm md:text-base">PLAYY®, INC 18 - 22©</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div className="w-[70px] h-[70px] bg-gray-950 rounded-full"></div>
            <div className="p-4 md:p-6 rounded-lg">
              <p className="text-lg font-bold mb-3">NEW BUSINESS</p>
              <p className="text-sm">biz@playy.co</p>
            </div>

            <div className="p-4 md:p-6 rounded-lg">
              <p className="text-lg font-bold mb-3">GENERAL</p>
              <p className="text-sm">hi@playy.co</p>
            </div>

            <div></div>
            <div className="p-4 md:p-6 rounded-lg">
              <p className="text-lg font-bold mb-3">PRESS</p>
              <p className="text-sm">press@playy.co</p>
            </div>
            <div className="p-4 md:p-5 rounded-lg">
              <p className="text-lg font-bold mb-3">JOIN US</p>
              <p className="text-sm mb-3">recruitment@playy.co</p>
              <p className="text-base font-bold mb-3">(Various Openings)</p>
              <button className="mt-2">APPLY NOW</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="flex flex-col items-center sm:mx-5 lg:mx-20">
          {/* Line */}
          <div className="flex items-center justify-between w-full py-4">
            <div className="flex-1 border-t border-1 border-black"></div>
          </div>

          {/* Text Row */}
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-gray-600 ml-4">SEC.</span>

            {/* Middle Text */}
            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-600">/A</span>
            </div>

            {/* Right Dot */}
            <div className="w-2 h-2 bg-black rounded-full "></div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 min-h-screen flex items-center justify-center relative pt-16">
        {/* Date in the top right corner */}
        <div className="absolute top-4 right-14 text-sm font-light">
          07:56:15 IST
        </div>
        <div className="absolute sm:top-[700px] right-14 text-sm font-light">
          09:16:30 IST
        </div>
        <div className="max-w-7xl w-full px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}
          <div className="flex flex-col justify-start items-start mb-4 md:mb-0">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 ">OFFICES</h1>
          </div>

          {/* Center Section with Vertical and Horizontal Lines */}
          <div className="flex flex-col items-center relative mb-4 md:mb-0">
            {/* Vertical Line */}
            <div className="hidden md:block absolute left-[-40px] top-[-2px] h-[1190px] border-l-[1px] border-black"></div>

            <div className="relative mb-4">
              <img
                src={office1}
                alt="Office"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gray-100 text-sm flex justify-between w-full p-2">
                <span>01</span>
                <span>/02</span>
              </div>
            </div>

            {/* Long Horizontal Line starting just below the first image */}
            <div
              className="hidden md:block w-full border-b-[1px] border-black mb-4"
              style={{
                width: "calc(100% + 500px)",
                marginLeft: "500px",
                marginTop: "-10px",
              }}
            ></div>

            <div className="relative">
              <img
                src={office1}
                alt="Office 2"
                className="w-full h-[400px] md:h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-gray-100 text-sm flex justify-between w-full p-2">
                <span>02</span>
                <span>/02</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col justify-between text-left mb-4 md:mb-0">
            <div className="mb-4">
              <h2 className="text-lg md:text-[22px] font-bold mb-2">
                MUMBAI IN
              </h2>
              <p className="text-sm md:text-[12px] font-light font-play leading-normal">
                III FLOOR, KRISHNA BHAVAN, <br />
                TALMIKI ROAD, <br />
                SANTACRUZ(WEST),
              </p>
            </div>
            <div className="mb-4 text-left">
              <p className="font-mono sm:ml-2 lg:ml-16">
                19°04'51.0"N, 72°49'52.2"E
              </p>
            </div>

            <div className="mb-4">
              <h2 className="text-lg md:text-[22px] font-bold mb-2 mt-7">
                DELHI IN
              </h2>
              <p className="text-sm md:text-[12px] font-light font-play leading-normal">
                IInd FLOOR, OXFORD BUILDING, <br />
                JANPATH LANE, <br />
                CONNAUGHT PLACE,
              </p>
            </div>
            <div className="mb-4 text-left">
              <p className="font-mono sm:ml-2 lg:ml-16">
                28°37'47.1"N, 77°13'57.6"E
              </p>
            </div>

            <div className="text-sm font-light text-right sm:text-left"></div>
          </div>
        </div>
      </section>

      {/* Follow  */}
      <div className="bg-gray-50 pt-4">
        <div className="flex flex-col items-center sm:mx-5 lg:mx-20">
          {/* Line */}
          <div className="flex items-center justify-between w-full py-4">
            <div className="flex-1 border-t border-1 border-black"></div>
          </div>

          {/* Text Row */}
          <div className="flex items-center justify-between w-full">
            <span className="text-sm text-gray-600 ml-4">SEC.</span>

            {/* Middle Text */}
            <div className="flex items-center justify-center">
              <span className="text-sm text-gray-600">/A</span>
            </div>

            {/* Right Dot */}
            <div className="w-2 h-2 bg-black rounded-full "></div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 text-black py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Section */}

          <div className="mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mt-6">Follow</h2>
          </div>

          {/* Center Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold my-10">Social</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="underline">
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h3 className="text-xl font-semibold">Stay Connected</h3>
            <div className="mt-4 flex items-center border-b border-black pb-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none text-gray-700 flex-grow"
              />
              <button className="text-xl ml-2">→</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <footer className="bg-[#1f1f21] text-white py-4 pt-8 px-2">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8">
          {/* Stay Connected - span 2 columns */}
          <div className="md:col-span-2 flex flex-col space-y-2">
            <div className="text-3xl font-bold">P®</div>
            <div className="space-y-2">
              <p className="font-semibold">● STAY CONNECTED</p>
              <div className="flex items-center border-b border-gray-500 py-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent border-none outline-none placeholder-gray-400 w-full"
                />
                <button className="text-xl">→</button>
              </div>
            </div>
          </div>

          {/* Social Share */}
          <div className="space-y-2">
            <p className="font-semibold">● SOCIAL SHARE</p>
            <ul className="space-y-2 text-gray-400">
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Facebook</li>
              <li>LinkedIn</li>
              <li>Pinterest</li>
            </ul>
          </div>

          {/* Initiatives */}
          <div className="space-y-2">
            <p className="font-semibold">● INITIATIVES</p>
            <ul className="space-y-2 text-gray-400">
              <li>Pulse</li>
              <li>Notion</li>
              <li>Playground</li>
              <li>Innovation Lab</li>
            </ul>
          </div>

          {/* Offices */}
          <div className="space-y-2">
            <p className="font-semibold">● OFFICES</p>
            <ul className="space-y-2 text-gray-400">
              <li>Mumbai - IN</li>
              <li>Pune - IN</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>PLAYY® - CO18 - 22©</p>
          <p className="mt-4 md:mt-0">NEXT STORY, STARTS HERE™</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:underline">
              TERMS
            </a>
            <a href="#" className="hover:underline">
              PRIVACY POLICY
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
