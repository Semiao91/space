import React from "react";
import 'tailwindcss/tailwind.css'; // Tailwind CSS
import './index.css'
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import NavBar from "./components/navbar.jsx";
import { useState } from "react";
import crossIcon from "./assets/shared/icon-close.svg";
import moonImage from './assets/destination/image-moon.png';
import marsImage from './assets/destination/image-mars.png';
import europaImage from './assets/destination/image-europa.png';
import titanImage from './assets/destination/image-titan.png';
import douglasImage from './assets/crew/image-douglas-hurley.png'
import markImage from './assets/crew/image-mark-shuttleworth.png'
import victorImage from './assets/crew/image-victor-glover.png'
import anoushImage from './assets/crew/image-anousheh-ansari.png'
import vehicleImage from './assets/technology/image-launch-vehicle-portrait.jpg'
import spaceportImage from './assets/technology/image-spaceport-portrait.jpg'
import capsuleImage from './assets/technology/image-space-capsule-portrait.jpg'
import burguer from './assets/shared/icon-hamburger.svg'

const Home = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <div className="bg-desktop bg-center bg-cover bg-no-repeat min-h-screen">
      <div className="flex justify-between sm:justify-between items-center">
        <button className="lg:mt-10 lg:p-10 mt-10 p-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g>
          </svg>
        </button>
        <img className="md:hidden p-10 mt-10 cursor-pointer" src={burguer} alt="burger.png" onClick={toggleMenu} />
        {isMenuOpen && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#274564] to-blue-500 z-10 text-black gap-20 font-barlow-condensed">
            <img
              src={crossIcon}
              alt="close menu"
              className="cursor-pointer w-10 h-10 absolute top-4 right-4"
              onClick={toggleMenu}
            />
            <Link to="/" className=" text-6xl hover:bg-gray-200 transition-all">HOME</Link>
            <Link to="/destination" className=" text-6xl hover:bg-gray-200 transition-all">DESTINATION</Link>
            <Link to="/crew" className=" text-6xl hover:bg-gray-200 transition-all">CREW</Link>
            <Link to="/technology" className=" text-6xl hover:bg-gray-200 transition-all">TECHNOLOGY</Link>
          </div>
        )}
        <div className="lg:flex-grow sm:flex-grow flex-grow h-1 mt-10 bg-gradient-to-r from-white hidden lg:block"></div>
        <NavBar />
      </div>
      <div className="flex lg:flex-row flex-col justify-between sm:items-center items-center text-center lg:text-left sm:text-center lg:mt-56 lg:px-56 sm:mt-20">
        <div className="flex flex-col text-white gap-6 h-[382px] w-[445px]">
          <h2 className="text-[28px] text-[#D0D6F9] font-barlow-condensed tracking-[4.725px]">SO, YOU WANT TO TRAVEL TO</h2>
          <h1 className="text-[100px] sm:text-[150px] font-bellefair-regular">SPACE</h1>
          <h4 className="text-[18px] text-[#D0D6F9] font-barlow-condensed leading-8">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this world experience!</h4>
        </div>
        <Link to="/destination" className="flex rounded-full bg-white items-center justify-center h-[274px] w-[274px] text-[32px] mt-[150px] tracking-[2px] font-bellefair-regular transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-white duration-75">EXPLORE</Link>
      </div>
    </div>
  )
}

const Destination = () => {

  const [selectedDestination, setSelectedDestination] = useState("moon");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const destinations = [
    {
      name: "MOON",
      image: moonImage,
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      avgDistance: "384,400 KM",
      estTravel: "3 Days"
    },
    {
      name: "MARS",
      image: marsImage,
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      avgDistance: "225 MIL. KM",
      estTravel: "9 MONTHS"
    },
    {
      name: "EUROPA",
      image: europaImage,
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      avgDistance: "628 MIL. KM",
      estTravel: "3 YEARS"
    },
    {
      name: "TITAN",
      image: titanImage,
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      avgDistance: "1.6 BIL. KM",
      estTravel: "7 YEARS"
    },
  ];

  const destination = destinations.find(dest => dest.name.toLowerCase() === selectedDestination);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (

    <div className="bg-destination-desktop bg-center bg-cover bg-no-repeat min-h-screen">
      <div className="flex justify-between sm:justify-between items-center">
        <button className="lg:mt-10 lg:p-10 mt-4 p-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g>
          </svg>
        </button>
        <img className="md:hidden mt-4 p-4 cursor-pointer" src={burguer} alt="burger.png" onClick={toggleMenu} />
        {isMenuOpen && (
          <div className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-[#274564] to-blue-500 z-10 text-black gap-20 font-barlow-condensed">
            <img
              src={crossIcon}
              alt="close menu"
              className="cursor-pointer w-10 h-10 absolute top-4 right-4"
              onClick={toggleMenu}
            />
            <Link to="/" className=" text-6xl hover:bg-gray-200 transition-all">HOME</Link>
            <Link to="/destination" className=" text-6xl hover:bg-gray-200 transition-all">DESTINATION</Link>
            <Link to="/crew" className=" text-6xl hover:bg-gray-200 transition-all">CREW</Link>
            <Link to="/technology" className=" text-6xl hover:bg-gray-200 transition-all">TECHNOLOGY</Link>
          </div>
        )}
        <div className="lg:flex-grow sm:flex-grow flex-grow h-1 mt-10 bg-gradient-to-r from-white hidden lg:block"></div>
        <NavBar />
      </div>
      <div className="flex md:pl-14 justify-center md:justify-start pb-10">
        <h2 className="text-[28px] text-[#707070] font-barlow-condensed tracking-[4.725px]">01</h2>
        <h2 className="text-[28px] text-[#D0D6F9] font-barlow-condensed tracking-[4.725px]">PICK YOUR DESTINATION</h2>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between lg:content-normal lg:items-start content-center items-center lg:px-56">
        <div className="flex flex-col text-white gap-6">
          <img className="lg:w-[640px] lg:h-[640px] md:w-[280px] md:h-[280px] w-[200px] h-[200px]" src={destination.image} alt="moon.png" />
        </div>
        <div className="flex flex-col h-[274px] w-[470px] text-[32px] tracking-[2px] font-bellefair-regular lg:justify-normal lg:place-items-start lg:mt-0 mt-44 gap-4 md:gap-2 lg:gap-12 justify-center items-center">
          <div className="flex text-[#D0D6F9] text-base gap-7">
            {destinations.map((dest, index) => (
              <a
                key={index}
                className="text-lg border-b-4 border-transparent hover:border-gray-400 transition-all cursor-pointer"
                onClick={() => setSelectedDestination(dest.name.toLowerCase())}
              >
                {dest.name}
              </a>
            ))}
          </div>
          <h1 className="text-white lg:text-[100px] text-[80px] font-bellefair-regular">{destination.name}</h1>
          <div className="text-[#D0D6F9] text-base font-barlow-condensed leading-8 min-h-[128px] text-center">{destination.description}
          </div>
          <div className="h-0.5 w-full bg-slate-400">.</div>
          <div className="text-white flex flex-col lg:flex-row lg:gap-10 gap-10 items-center justify-center text-center">
            <div>
              <h4 className="font-barlow-condensed text-[#D0D6F9] text-sm tracking-[2.362px]">AVG. DISTANCE</h4>
              <h3 className="font-bellefair-regular text-[28px]">{destination.avgDistance}</h3>
            </div>
            <div>
              <h4 className="font-barlow-condensed text-[#D0D6F9] text-sm tracking-[2.362px]">EST. TRAVEL TIME</h4>
              <h3 className="font-bellefair-regular text-[28px]">{destination.estTravel}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Crew = () => {
  const [selectedCrew, setSelectedCrew] = useState("douglas hurley");
  const crews = [
    {
      title: "COMMANDER",
      name: "DOUGLAS HURLEY",
      image: douglasImage,
      description:
        "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      title: "MISSION SPECIALIST",
      name: "MARK SHUTTLEWORTH",
      image: markImage,
      description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      title: "PILOT",
      name: "VICTOR GLOVER",
      image: victorImage,
      description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      title: "FLIGHT ENGINEER",
      name: "ANOUSHEH ANSARI",
      image: anoushImage,
      description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ];

  const crew = crews.find(crw => crw.name.toLowerCase() === selectedCrew);

  return (

    <div className="bg-crew-desktop bg-center bg-cover bg-no-repeat min-h-screen">
      <div className="flex items-center">
        <button className="mt-10 p-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g>
          </svg>
        </button>
        <div className="lg:flex-grow sm:flex-grow flex-grow h-1 mt-10 bg-gradient-to-r from-white"></div>
        <NavBar />
      </div>
      <div className="flex justify-between mt-20 px-56">
        <div className="flex flex-col text-white gap-6">
          <div className="flex">
            <h2 className="text-[28px] text-[#707070] font-barlow-condensed tracking-[4.725px]">02</h2>
            <h2 className="text-[28px] text-[#D0D6F9] font-barlow-condensed tracking-[4.725px]">MEET YOUR CREW</h2>
          </div>
          <div>
            <div className="flex flex-col h-[274px] w-[470px] mt-[100px] tracking-[2px] font-bellefair-regular gap-14">
              <h1 className="text-white text-[32px] font-bellefair-regular">{crew.title}</h1>
              <h1 className="text-white w-[650px] text-[56px] font-bellefair-regular">{crew.name}</h1>
              <div className="text-[#D0D6F9] text-base font-barlow-condensed leading-8 min-h-[160px]">{crew.description}
              </div>
              <div className="flex gap-7">
                {crews.map((dest, index) => (
                  <a
                    key={index}
                    className={`h-4 w-4 rounded-full border-2 border-transparent transition-all cursor-pointer ${selectedCrew === dest.name.toLowerCase()
                      ? "bg-white hover:border-[#85868c]"
                      : "bg-[#363841] hover:bg-[#85868c]"
                      }`}
                    onClick={() => setSelectedCrew(dest.name.toLowerCase())}
                  >
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <img className="absolute bottom-0 right-56" src={crew.image} alt="crew.png" />
      </div>
    </div>
  )
}

const Technology = () => {

  const [selectedTech, setSelectedTech] = useState("launch vehicle");
  const techs = [
    {
      title: "THE TERMINOLOGY...",
      name: "LAUNCH VEHICLE",
      image: vehicleImage,
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      title: "THE TERMINOLOGY...",
      name: "SPACEPORT",
      image: spaceportImage,
      description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      title: "THE TERMINOLOGY...",
      name: "SPACE CAPSULE",
      image: capsuleImage,
      description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ];

  const tech = techs.find(tch => tch.name.toLowerCase() === selectedTech);

  return (

    <div className="bg-tech-desktop bg-center bg-cover bg-no-repeat min-h-screen">
      <div className="flex items-center">
        <button className="mt-10 p-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF" /><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z" /></g>
          </svg>
        </button>
        <div className="lg:flex-grow sm:flex-grow flex-grow h-1 mt-10 bg-gradient-to-r from-white"></div>
        <NavBar />
      </div>
      <div className="flex mt-20 px-56 gap-4">
        <h2 className="text-[28px] text-[#707070] font-barlow-condensed tracking-[4.725px]">03</h2>
        <h2 className="text-[28px] text-white font-barlow-condensed tracking-[4.725px]">SPACE LAUNCH 101</h2>
      </div>
      <div className="flex mt-24 px-56 gap-24">
        <div className="flex gap-12 flex-col">
          {techs.map((tech, index) => (
            <a
              key={index}
              className={`h-[80px] w-[80px] text-[32px] font-bellefair-regular flex justify-center items-center text-white rounded-full border-[1px] transition-all cursor-pointer ${selectedTech === tech.name.toLowerCase()
                ? "bg-white text-black"
                : "hover:border-2"
                }`}
              onClick={() => setSelectedTech(tech.name.toLowerCase())}
            >{index + 1}
            </a>
          ))}
        </div>
        <div className="flex flex-col text-white">
          <div>
            <div className="flex flex-col h-[274px] w-[470px] tracking-[2px] font-bellefair-regular gap-2">
              <h1 className="text-[#D0D6F9] text-[16px] font-barlow-condensed tracking-[2.7px]">{tech.title}</h1>
              <h1 className="text-white w-[650px] text-[56px] font-bellefair-regular">{tech.name}</h1>
              <div className="text-[#D0D6F9] text-[20px] font-barlow-condensed leading-8 min-h-[160px]">{tech.description}
              </div>
            </div>
          </div>
        </div>
        <img className="absolute right-0" src={tech.image} alt="crew.png" />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
  );
}

export default App;
