import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';

const ToggleButton = ({ handleDrawerToggle }) => {
  const StyledContainer = styled(Box)(() => ({
    display: 'flex',
    position: 'absolute',
    paddingLeft: '20px',
  }));

  return (
    <StyledContainer>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { md: 'none' } }}
      >
        <MenuIcon sx={{ color: '#fff' }} />
      </IconButton>
    </StyledContainer>
  );
};

export default ToggleButton;
