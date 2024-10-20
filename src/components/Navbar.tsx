import { GrHomeRounded } from "react-icons/gr";
import { LuFolder } from "react-icons/lu";
import { GoBriefcase } from "react-icons/go";
import { FiTool, FiEdit } from "react-icons/fi";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <TooltipProvider>
      <div className='w-full flex justify-center items-center'>
        <div className="dark:bg-secondText px-6 py-4 w-80 rounded-2xl">
          <div className="flex w-full justify-between items-center">
            <Link to="/">
              <Tooltip>
                <TooltipTrigger>
                  <GrHomeRounded className="w-5 h-5 dark:text-gray-300" />
                </TooltipTrigger>
                <TooltipContent className="dark:text-white mt-5 dark:bg-gray-500">Home</TooltipContent>
              </Tooltip>
            </Link>

            <Link to="/projects">
            <Tooltip>
              <TooltipTrigger>
                <LuFolder className="icons" />
              </TooltipTrigger>
              <TooltipContent className="dark:text-white mt-5 dark:bg-gray-500">Projects</TooltipContent>
            </Tooltip>
            </Link>

            <Link to="/experience">
              <Tooltip>
                <TooltipTrigger>
                  <GoBriefcase className="icons" />
                </TooltipTrigger>
                <TooltipContent className="dark:text-white mt-5 dark:bg-gray-500">Experience</TooltipContent>
              </Tooltip>
            </Link>

            <Link to="/tools">
              <Tooltip>
                <TooltipTrigger>
                  <FiTool className="icons" />
                </TooltipTrigger>
                <TooltipContent className="dark:text-white mt-5 dark:bg-gray-500">Tools</TooltipContent>
              </Tooltip>
            </Link>
            <Link to="/thoughts">
              <Tooltip>
                <TooltipTrigger>
                  <FiEdit className="icons" />
                </TooltipTrigger>
                <TooltipContent className="dark:text-white mt-5 dark:bg-gray-500">Thoughts</TooltipContent>
              </Tooltip>
            </Link>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default Navbar;
