import { AiOutlineAreaChart } from 'react-icons/ai';
import { MdAddchart } from 'react-icons/md';
import { IoIosArrowBack } from 'react-icons/io';
import { BiInfoSquare } from 'react-icons/bi';
import { INavbar } from '../models';

export const NavbarData: INavbar[] = [
  {
    title: 'Hide',
    path: '',
    icon: <IoIosArrowBack size={30} />,
  },

  {
    title: 'Charts',
    path: '/',
    icon: <AiOutlineAreaChart size={30} />,
  },
  {
    title: 'Settings',
    path: 'settings',
    icon: <MdAddchart size={30} />,
  },
  {
    title: 'About',
    path: 'about',
    icon: <BiInfoSquare size={30} />,
  },
];
