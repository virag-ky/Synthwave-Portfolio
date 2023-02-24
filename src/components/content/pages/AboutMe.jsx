import { Box, Typography } from '@mui/material';
import { styles } from '../../../styles/aboutMeStyles';

const AboutMe = () => {
  return (
    <Box sx={styles}>
      <Typography sx={styles.h2} variant="h2">
        About Me
      </Typography>
      <br />
      <Box sx={styles.paraContainer}>
        <Typography sx={styles.p} variant="body1">
          Hello, I'm Virag!
          <br />
          <br />
          I'm a dedicated <span>software developer</span> who specializes in web
          development using <span>JavaScript</span>.
          <br />
          <br /> I found my passion for programming at the end of 2021, and in
          2022 I joined an online software program called{' '}
          <span>Microverse</span>, where I studied full-stack web development.{' '}
          <br />
          <br />
          During my time in the program, I gained essential technical and soft
          skills, for example, in <span>HTML</span>, <span>CSS/SCSS</span>,{' '}
          <span>JavaScript</span>, <span>React</span>, <span>Redux</span>, and{' '}
          <span>Ruby</span>, <span>mobile-first approach</span>,{' '}
          <span>test-driven development</span>, collaborated with other students
          from different cultures using the <span>pair programming</span>{' '}
          (driver/navigator) method with the industry-standard{' '}
          <span>gitflow</span>, <span>mentored</span> new students, provided{' '}
          <span>code reviews</span> and gave constructive feedback, worked in a
          team to build interactive apps using the <span>kanban method</span>,
          managed my time efficiently, attended <span>daily stand-ups</span> to
          communicate with my peers, and delivered projects before the deadline.
          <br />
          <br /> I enjoy building anything, from small apps to interactive
          websites. I also love learning new skills and am able to take on new
          ones quickly and efficiently.
          <br />
          <br /> My everyday consists of building web apps or maintaining my
          existing projects, learning new skills, reading documentation and
          articles, solving problems and networking. Currently, I'm learning{' '}
          <span>NodeJS</span> and <span>MongoDB</span> for the backend part and
          looking for my first web developer job where I can build amazing
          things, grow my knowledge and improve my skills.
        </Typography>
      </Box>
    </Box>
  );
};

export default AboutMe;
