import Navbar from "./components/Navbar";
import images from "./assets/images";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import CountUp from "react-countup";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { RiStackLine } from 'react-icons/ri';
import { CiGrid31 } from "react-icons/ci";
import { MdArrowForward } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";
import {
  Card,
  CardContent
} from "@/components/ui/card";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="sm:h-screen lg:h-full h-full w-full bg-customDark">
      <div className="container-padding">
        <Navbar />
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-20 gap-10">
          {/* Sticky left side with card */}
          <div className="lg:sticky lg:top-10 lg:w-50 xl:w-70" data-aos="fade-up">
            <Card className="border-none dark:bg-white py-4 relative w-full overflow-hidden">
              {/* Top Decorative Image */}
              <img src={images.decorate} alt="" className="h-20 w-32 absolute top-0 transform -translate-y-1/2" />
              {/* Bottom Decorative Image */}
              <img src={images.decorate2} alt="" className="h-20 w-32 absolute bottom-0 -left-4 transform" />
              
              <CardContent className="py-2 px-8 sm:px-8 md:px-10 lg:px-12 xl:px-18">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                  {/* Profile Image */}
                  <img src={images.profile} className="h-80 w-80 sm:h-72 sm:w-60 rounded-2xl object-cover" alt="" />
                  {/* Name */}
                  <h1 className="font-bold text-3xl sm:text-3xl md:text-4xl lg:text-3xl text-center">Angelo Guiao</h1>
                  {/* Description */}
                  <p className="mt-4 text-base sm:text-base md:text-lg lg:mt-6">
                    A Software Engineer who has developed countless innovative solutions.
                  </p>
                  {/* Social Media Icons */}
                  <div className="flex justify-center gap-3 mt-4">
                    <FaFacebook className="h-8 w-8 text-[#F46C38]" />
                    <RiInstagramFill className="h-8 w-8 text-[#F46C38]" />
                    <FaLinkedin className="h-8 w-8 text-[#db6e42]" />
                    <FaGithub className="h-8 w-8 text-[#F46C38]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side content */}
          <div className="dark:text-gray-300 col-span-2 flex items-start relative" data-aos="fade-left">
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-col items-start">
                <h1 className="text-[6rem] font-semibold -mt-2 dark:text-white leading-none">FRONTEND</h1>
                <h1 className="text-[5.3rem] font-semibold secondary-title -mt-4">DEVELOPER</h1>
                <p className="paragraph max-w-md">
                  Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
                </p>
              </div>

              <div className=" flex max-w-lg">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <span className="main-text">+</span>
                    <CountUp end={2} duration={2} className="main-text" />
                  </div>
                  <span className="paragraph text-md max-w-[10rem]">
                    YEARS OF EXPERIENCE
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <CountUp end={50} duration={2} className="main-text" />
                  </div>
                  <span className="paragraph text-md max-w-[10rem]">
                    PROJECTS COMPLETED
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <span className="main-text">+</span>
                    <CountUp end={5} duration={2} className="main-text" />
                  </div>
                  <span className="paragraph text-md max-w-[10rem]">
                    WORLDWIDE CLIENTS
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 w-full">
                  <div >
                    <Card className="dark:bg-[#F46C38] relative">
                      <img src={images.decorate3} alt="Decoration" className="absolute top-0" />
                      <img src={images.decorate3} alt="Decoration" className="absolute bottom-0" />
                      <CardContent className="py-4 flex flex-col gap-5">
                        <RiStackLine className="h-10 w-10 mt-10" />
                        <span className="text-2xl max-w-[12rem]">DYNAMIC ANIMATION, MOTION DESIGN</span>
                        <div className="px-1 py-1 border cursor-pointer w-11 flex justify-center self-end rounded-md">
                          <MdArrowForward className="w-6 h-6"/>
                        </div>            
                      </CardContent>
                    </Card>
                  </div>
                  <div className="">
                    <Card className="dark:bg-[#C5FF41] relative">
                      <img src={images.decorate3} alt="Decoration" className="absolute top-0" />
                      <img src={images.decorate3} alt="Decoration" className="absolute bottom-0" />
                      <CardContent className="py-4 flex flex-col gap-5 dark:text-black">
                        <CiGrid31 className="h-10 w-10 mt-10" />
                        <span className="text-2xl max-w-[12rem]">
                        FRAMER, FIGMA, WORDPRESS, REACTJS</span>
                        <div className="px-1 py-1 border cursor-pointer w-11 flex justify-center self-end rounded-md">
                          <MdArrowForward className="w-6 h-6"/>
                        </div>            
                      </CardContent>
                    </Card>
                  </div>
                </div>
                <div className="flex flex-col items-start mt-14">
                  <h1 className="text-[6rem] font-semibold -mt-2 dark:text-white leading-none">RECENT</h1>
                  <h1 className="text-[5.3rem] font-semibold secondary-title -mt-4">PROJECTS</h1>
              </div>
              <div className="flex flex-col gap-4">
                  <Card className="border-none dark:hover:bg-[#252425] relative">
                    <MdArrowOutward className="absolute right-4 top-4 h-6 w-6 text-[#F46C38]"/>
                      <div className="flex gap-4 items-center p-4">
                        <img src={images.cover1} alt="" className="h-32 w-36 rounded-lg" />
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-2xl">
                            CassaReal
                          </span>
                          <span className="font-semibold text-base paragraph">
                            Real Estate Platform
                          </span>
                        </div>
                      </div>
                  </Card>

                  <Card className="border-none dark:hover:bg-[#252425] relative">
                    <MdArrowOutward className="absolute right-4 top-4 h-6 w-6 text-[#F46C38]"/>
                      <div className="flex gap-4 items-center p-4">
                        <img src={images.cover1} alt="" className="h-32 w-36 rounded-lg" />
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-2xl">
                            CassaReal
                          </span>
                          <span className="font-semibold text-base paragraph">
                            Real Estate Platform
                          </span>
                        </div>
                      </div>
                  </Card>
                  <Card className="border-none dark:hover:bg-[#252425] relative">
                    <MdArrowOutward className="absolute right-4 top-4 h-6 w-6 text-[#F46C38]"/>
                      <div className="flex gap-4 items-center p-4">
                        <img src={images.cover1} alt="" className="h-32 w-36 rounded-lg" />
                        <div className="flex flex-col gap-1">
                          <span className="font-semibold text-2xl">
                            CassaReal
                          </span>
                          <span className="font-semibold text-base paragraph">
                            Real Estate Platform
                          </span>
                        </div>
                      </div>
                  </Card>
                  
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
