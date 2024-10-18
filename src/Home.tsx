// Home.tsx
import Navbar from "./components/Navbar";
import images from "./assets/images";
import { RiFacebookCircleLine } from "react-icons/ri";
import { LuInstagram } from "react-icons/lu";
import { PiLinkedinLogo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import {
    Card,
    CardContent
} from "@/components/ui/card";

const Home = () => {
  return (
    <div className="h-screen w-full bg-customDark">
      <div className="container-padding">
        <Navbar />
        <div className="grid lg:grid-cols-3 grid-cols-1 mt-20 gap-4">
        <div className="flex justify-center items-center">
                <Card className="dark:bg-white py-4 relative w-full overflow-hidden max-w-md sm:max-w-lg md:max-w-xl">
                    {/* Top Decorative Image */}
                    <img src={images.decorate} alt="" className="h-20 w-32 absolute top-0 transform -translate-y-1/2" />
                    {/* Bottom Decorative Image */}
                    <img src={images.decorate2} alt="" className="h-20 w-32 absolute bottom-0 -left-4 transform" />
                    
                    <CardContent className="py-2 p-4 sm:px-8 md:px-10 lg:px-12 xl:px-16">
                    <div className="flex flex-col items-center justify-center text-center gap-4">
                        {/* Profile Image */}
                        <img src={images.profile} className="h-60 w-full sm:h-48 sm:w-48 rounded-2xl object-cover" alt="" />
                        {/* Name */}
                        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-3xl text-center">Angelo Guiao</h1>
                        {/* Description */}
                        <p className="mt-4 text-base sm:text-base md:text-lg lg:mt-6">
                        A Software Engineer who has developed countless innovative solutions.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex justify-center gap-3 mt-4">
                        <RiFacebookCircleLine className="h-8 w-8 text-[#F46C38]" />
                        <LuInstagram className="h-8 w-8 text-[#F46C38]" />
                        <PiLinkedinLogo className="h-8 w-8 text-[#db6e42]" />
                        <FaGithub className="h-8 w-8 text-[#F46C38]" />
                        </div>
                    </div>
                    </CardContent>
                </Card>
                </div>

          <div className="dark:text-gray-300 col-span-2">
            <div className="text-base sm:text-lg">sdsd</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
