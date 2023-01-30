import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export const NavLinks = [
  {
    id: 0,
    icon: <HomeIcon sx={{ fontSize: { lg: '30px', xs: '25px' } }} />,
    label: 'Intro',
    route: 'intro',
  },
  {
    id: 1,
    icon: <AccountCircleIcon sx={{ fontSize: { lg: '28px', xs: '24px' } }} />,
    label: 'About',
    route: 'about',
  },
  {
    id: 2,
    icon: <ConstructionIcon sx={{ fontSize: { lg: '28px', xs: '24px' } }} />,
    label: 'Skills',
    route: 'skills',
  },
  {
    id: 3,
    icon: <StarIcon sx={{ fontSize: { lg: '28px', xs: '24px' } }} />,
    label: 'Projects',
    route: 'projects',
  },
  {
    id: 4,
    icon: <EmailIcon sx={{ fontSize: { lg: '26px', xs: '20px' } }} />,
    label: 'Contact',
    route: 'contact',
  },
];
