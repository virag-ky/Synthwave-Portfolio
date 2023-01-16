import { Box, Typography } from '@mui/material';
import { styles } from '../../../styles/aboutMeStyles';

const AboutMe = () => {
  return (
    <Box sx={styles}>
      <Typography sx={styles.h2} variant="h2">
        About Me
      </Typography>
      <br />
      <Typography sx={styles.p} variant="body1">
        Hello, I'm Virag!
        <br />
        <br />
        I'm a full-stack web developer from Hungary and currently living in
        Romania.
        <br />
        <br /> I found my passion for programming at the end of 2021, and in
        2022 I joined an online software program called Microverse, where I
        studied full-stack web development. <br />
        During my time in the program, I gained essential technical and soft
        skills, for example, mentor new students, provide code reviews and give
        constructive feedback, work in a team to build interactive apps using
        the kanban method, managing my time, communicating effectively, and
        deliver projects before the deadline.
        <br /> I have worked with other students from different cultures
        remotely using the pair programming method. I enjoy building anything,
        from small apps to interactive websites.
        <br /> I love learning new skills and am able to take on new ones
        quickly and efficiently.
        <br /> My everyday consists of building web apps, learning new skills,
        reading documentation and articles, solving problems and networking.
      </Typography>
    </Box>
  );
};

export default AboutMe;
