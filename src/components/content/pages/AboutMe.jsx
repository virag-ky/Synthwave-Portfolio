import { Box, Typography } from '@mui/material';
import { styles } from '../../../styles/aboutMeStyles';

const AboutMe = () => {
  return (
    <Box className="pages">
      <Typography variant="h2">About Me</Typography>
      <Typography sx={styles} variant="body1">
        I'm a full-stack web developer from Hungary and currently living in
        Romania. I found my passion for programming at the end of 2021, and in
        2022 I joined an online software program called Microverse, where I
        studied full-stack web development. During my time in the program, I
        gained essential technical and soft skills, for example, review my peers
        code and give constructive feedback, work in a team to build interactive
        apps using the kanban method, managing my time, communicating
        effectively, and deliver projects before the deadline. I have worked
        with other students from different cultures remotely using the pair
        programming method. I enjoy building anything, from small apps to
        interactive websites. I love learning new skills and am able to take on
        new ones quickly and efficiently. My everyday consists of building web
        apps, learning new skills, reading documentation and articles, solving
        problems and networking. I'm also maintaining and improving my existing
        apps with better approaches.
      </Typography>
    </Box>
  );
};

export default AboutMe;
