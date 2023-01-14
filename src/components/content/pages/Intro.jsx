import { Typography, Box } from '@mui/material';
import { styles } from '../../../styles/introStyles';

const Intro = () => {
  return (
    <Box sx={styles.introContainer} className="pages">
      <Typography sx={styles.h1} variant="h1">
        Virag Kormoczy
      </Typography>
      <Typography sx={styles.h3} variant="h3">
        Full-Stack Web Developer
      </Typography>
    </Box>
  );
};

export default Intro;
