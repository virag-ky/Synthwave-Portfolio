import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import EmailIcon from '@mui/icons-material/Email';
import ConstructionIcon from '@mui/icons-material/Construction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const NavLinks = [
  {
    id: 0,
    icon: <HomeIcon sx={{ fontSize: '32px' }} />,
    label: 'Intro',
    route: 'intro',
  },
  {
    id: 1,
    icon: <AccountCircleIcon sx={{ fontSize: '30px' }} />,
    label: 'About',
    route: 'about',
  },
  {
    id: 2,
    icon: <ConstructionIcon sx={{ fontSize: '32px' }} />,
    label: 'Skills',
    route: 'skills',
  },
  {
    id: 3,
    icon: <StarIcon sx={{ fontSize: '32px' }} />,
    label: 'Projects',
    route: 'projects',
  },
  {
    id: 4,
    icon: <EmailIcon sx={{ fontSize: '30px' }} />,
    label: 'Contact',
    route: 'contact',
  },
];

export const SocialLinks = [
  {
    id: 0,
    icon: <GitHubIcon sx={{ fontSize: '28px' }} />,
    link: 'https://github.com/virag-ky',
  },
  {
    id: 1,
    icon: <TwitterIcon sx={{ fontSize: '28px' }} />,
    link: 'https://twitter.com/Virag_Ky',
  },
  {
    id: 2,
    icon: <LinkedInIcon sx={{ fontSize: '28px' }} />,
    link: 'https://www.linkedin.com/in/virag-kormoczy/',
  },
];
