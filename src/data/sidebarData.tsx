import { AiOutlineAreaChart } from "react-icons/ai";
import { MdAddchart } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { BiInfoSquare } from "react-icons/bi";
import { ISidebar } from "../models";

export const SidebarData: ISidebar[] = [
  {
    title: "Hide",
    path: "#",
    icon: <IoIosArrowBack size={30} />,
    clName: "nav-text",
  },

  {
    title: "View Mode",
    path: "/",
    icon: <AiOutlineAreaChart size={30} />,
    clName: "nav-text",
  },
  {
    title: "Settings",
    path: "settings",
    icon: <MdAddchart size={30} />,
    clName: "nav-text",
  },
  {
    title: "About",
    path: "about",
    icon: <BiInfoSquare size={30} />,
    clName: "nav-text",
  },
];
