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
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { cardData } from "@/store/cardData";
import { workExp, tools, thoughs } from "@/store/workexp";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { Button } from "./components/ui/button";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="h-full w-full bg-customDark">
      <div className="container-padding min-h-screen">
        <Navbar />
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-20 gap-10">
          {/* Sticky left side with card */}
          <div className="lg:w-full sm:w-full sm:h-full md:w-full" data-aos="fade-up">
            <Card className="border-none dark:bg-white py-4 lg:sticky lg:top-10  w-full overflow-hidden relative">
              {/* Top Decorative Image */}
              <img src={images.decorate} alt="" className="h-20 w-32 absolute top-0 transform -translate-y-1/2" />
              {/* Bottom Decorative Image */}
              <img src={images.decorate2} alt="" className="h-20 w-32 absolute bottom-5 -left-4 transform" />
              
              <CardContent className="py-2 px-4 sm:px-8 md:px-10 lg:px-12 xl:px-18">
                <div className="flex flex-col items-center justify-center text-center gap-4">
                  {/* Profile Image */}
                  <img src={images.profile} className="h-40 w-40 sm:h-60 sm:w-60 rounded-2xl object-cover" alt="" />
                  {/* Name */}
                  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-xl text-center xl:text-3xl">Angelo Guiao</h1>
                  {/* Description */}
                  <p className="mt-4 text-base sm:text-lg md:text-xl lg:text-sm xl:text-xl">
                    A Software Engineer who has developed countless innovative solutions.
                  </p>
                  {/* Social Media Icons */}
                  <div className="flex justify-center gap-3 mt-4">
                    <FaFacebook className="h-6 w-6 text-[#F46C38]" />
                    <RiInstagramFill className="h-6 w-6 text-[#F46C38]" />
                    <FaLinkedin className="h-6 w-6 text-[#db6e42]" />
                    <FaGithub className="h-6 w-6 text-[#F46C38]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right side content */}
          <div className="dark:text-gray-300 sm:col-span-2 flex items-start relative lg:sticky lg:top-10 overflow-hidden xl:pl-10 pl-0 lg:pl-0">
            <div className="flex flex-col gap-10 w-full">
              <div className="flex flex-col items-start" data-aos="fade-left">
                <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] font-semibold dark:text-white leading-none xl:text-[6rem]">FRONTEND</h1>
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] font-semibold secondary-title xl:text-[5rem] -mt-4">DEVELOPER</h1>
                <p className="paragraph max-w-md">
                  Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.
                </p>
              </div>

              <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-4 mt-2" data-aos="fade-left">
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <span className="main-text">+</span>
                    <CountUp end={2} duration={2} className="main-text" />
                  </div>
                  <span className="paragraph text-md">YEARS OF EXPERIENCE</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <CountUp end={50} duration={2} className="main-text" />
                  </div>
                  <span className="paragraph text-md">PROJECTS COMPLETED</span>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-2">
                    <span className="main-text">+</span>
                    <CountUp end={5} duration={2} className="main-text" />
                  </div>
                  <span className="paragraph text-md">WORLDWIDE CLIENTS</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full" data-aos="fade-left">
                <div>
                  <Card className="dark:bg-[#F46C38] relative border-0">
                    <img src={images.decorate3} alt="Decoration" className="absolute top-0" />
                    <img src={images.decorate3} alt="Decoration" className="absolute bottom-0" />
                    <CardContent className="py-4 flex flex-col gap-5">
                      <RiStackLine className="h-10 w-10 mt-10" />
                      <span className="text-lg sm:text-2xl dark:text-white z-10">DYNAMIC ANIMATION, MOTION DESIGN</span>
                      <div className="px-1 py-1 border cursor-pointer w-11 flex justify-center self-end rounded-md">
                        <MdArrowForward className="w-6 h-6"/>
                      </div>            
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="dark:bg-[#C5FF41] relative border-0">
                    <img src={images.decorate3} alt="Decoration" className="absolute top-0" />
                    <img src={images.decorate3} alt="Decoration" className="absolute bottom-0" />
                    <CardContent className="py-4 flex flex-col gap-5 dark:text-black">
                      <CiGrid31 className="h-10 w-10 mt-10" />
                      <span className="text-lg sm:text-2xl">FRAMER, FIGMA, WORDPRESS, REACTJS</span>
                      <div className="px-1 py-1 border cursor-pointer w-11 flex justify-center self-end rounded-md">
                        <MdArrowForward className="w-6 h-6"/>
                      </div>            
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="flex flex-col items-start mt-14" data-aos="fade-up">
                <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] xl:text-[6rem] font-semibold dark:text-white leading-none">RECENT</h1>
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[6rem] font-semibold secondary-title -mt-4">PROJECTS</h1>
              </div>
              
              <div className="flex flex-col gap-4">
                {cardData.slice(0, 3).map((card, index) => (
                  <a href={card.link} key={index}>
                    {card.wholeCoverImage ? (
                      <HoverCard>
                        <HoverCardTrigger>
                          <Card className="border-none dark:hover:bg-[#252425] relative" data-aos="fade-up">
                            <MdArrowOutward className="absolute right-4 top-4 h-6 w-6 text-[#F46C38] hidden sm:block" />
                            <div className="flex gap-4 items-center p-4">
                              <img
                                src={card.coverImage}
                                alt={card.title}
                                className="h-32 w-36 rounded-lg"
                              />
                              <div className="flex flex-col gap-1">
                                <span className="font-semibold text-lg sm:text-2xl">{card.title}</span>
                                <span className="font-semibold text-sm sm:text-base paragraph">
                                  {card.description}
                                </span>
                              </div>
                            </div>
                          </Card>
                        </HoverCardTrigger>
                        <HoverCardContent side="bottom" className="!p-0">
                          <img
                            src={card.wholeCoverImage}
                            alt={card.title}
                            className="h-full w-full"
                          />
                        </HoverCardContent>
                      </HoverCard>
                    ) : (
                      <Card className="border-none dark:hover:bg-[#252425] relative">
                        <MdArrowOutward className="absolute right-4 top-4 h-6 w-6 text-[#F46C38] hidden sm:block" />
                        <div className="flex gap-4 items-center p-4">
                          <img
                            src={card.coverImage}
                            alt={card.title}
                            className="h-32 w-36 rounded-lg"
                          />
                          <div className="flex flex-col gap-1">
                            <span className="font-semibold text-lg sm:text-2xl">{card.title}</span>
                            <span className="font-semibold text-sm sm:text-base paragraph">
                              {card.description}
                            </span>
                          </div>
                        </div>
                      </Card>
                    )}
                  </a>
                ))}
              </div>

              <div className="flex flex-col items-start mt-14" data-aos="fade-up">
                <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] xl:text-[6rem] font-semibold dark:text-white leading-none">+2 YEARS</h1>
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[6rem] font-semibold secondary-title -mt-4">EXPERIENCE</h1>
              </div>
              
              <div className="flex flex-col gap-4">
                {workExp.map((work, index) => (
                  <Card
                  className="border-none dark:hover:bg-[#252425] relative transition-transform duration-300 ease-in-out group"
                  data-aos="fade-up"
                  key={index}
                >
                  <MdArrowOutward className="absolute right-4 top-4 h-6 w-6 text-[#F46C38] hidden sm:block transition-transform duration-300 ease-in-out group-hover:scale-125" />
                  <div className="flex gap-4 items-center p-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-lg sm:text-4xl text-white">{work.title}</span>
                      <span className="font-semibold text-sm sm:text-base paragraph">{work.description}</span>
                      <span className="font-semibold text-sm sm:text-base paragraph mt-5">{work.date}</span>
                    </div>
                  </div>
                </Card>
                
                ))}
              </div>

              <div className="flex flex-col items-start mt-14" data-aos="fade-up">
                <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] xl:text-[6rem] font-semibold dark:text-white leading-none">SKILLS</h1>
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[6rem] font-semibold secondary-title -mt-4">& TOOLS</h1>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tools.slice(0, 6).map((tool, index) => (
                    <div className="flex gap-4" key={index} data-aos="fade-up">
                      <img src={tool.tool} alt="" className="h-20 w-20" />
                      <div className="flex flex-col">
                        <span className="font-semibold text-lg sm:text-2xl text-white">{tool.name}</span>
                        <span className="font-semibold text-sm sm:text-base paragraph">{tool.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              

              <div className="flex flex-col items-start mt-14" data-aos="fade-up">
                <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] xl:text-[6rem] font-semibold dark:text-white leading-none">DESIGN</h1>
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[6rem] font-semibold secondary-title -mt-4">THOUGHTS</h1>
              </div>

              <div className="flex flex-col gap-4">
                {thoughs.map((work, index) => (
                  <Card
                  className="border-none dark:hover:bg-[#252425] relative transition-transform duration-300 ease-in-out group"
                  data-aos="fade-up"
                  key={index}
                >
                  <MdArrowOutward className="absolute right-4 top-4 h-6 w-6 text-[#F46C38] hidden sm:block transition-transform duration-300 ease-in-out group-hover:scale-125" />
                  <div className="flex gap-4 items-center p-4">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-lg sm:text-4xl text-white max-w-86">{work.title}</span>
                      <span className="font-semibold text-sm sm:text-base paragraph">{work.description}</span>
                      <span className="font-semibold text-sm sm:text-base paragraph mt-5">{work.date}</span>
                    </div>
                  </div>
                </Card>
                
                ))}
              </div>

              <div className="flex flex-col items-start mt-14" data-aos="fade-up">
                <h1 className="text-[3rem] sm:text-[4rem] md:text-[5rem] xl:text-[6rem] font-semibold dark:text-white leading-none">LET'S WORK</h1>
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4rem] xl:text-[6rem] font-semibold secondary-title -mt-4">TOGETHER</h1>
              </div>

              <form className="mt-4" data-aos="fade-up">
                  <div className="flex flex-col gap-4">
                      <div className="flex justify-between gap-5">
                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="name">Name</Label>
                            <Input type="name" id="name" placeholder="Name" className="border-none dark:bg-[#353334]" />
                          </div>
                          <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Email" className="border-none dark:bg-[#353334]" />
                          </div>
                      </div>
                      <Textarea placeholder="Type your message here." className="h-32 border-none dark:bg-[#353334]" />
                      <Button className="bg-red-500 text-white">Submit</Button>
                  </div>
                    
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
