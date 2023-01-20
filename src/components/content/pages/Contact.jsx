import { Typography, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styles } from '../../../styles/contactStyles';
import styled from '@emotion/styled';
import { useForm } from '@formspree/react';
import TextareaAutosize from '@mui/base/TextareaAutosize';

const Contact = () => {
  const [state, handleSubmit] = useForm('moqrdeno');

  if (state.succeeded) {
    return (
      <Box sx={styles}>
        <Typography sx={styles.h2} variant="h2">
          Contact
        </Typography>
        <Typography sx={styles.successMessage} variant="body1">
          Form submitted successfully!
        </Typography>
      </Box>
    );
  }

  const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
      color: '#1495ff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#1495ff',
    },
    '& .MuiOutlinedInput-root': {
      color: '#fff',
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1495ff',
      },
    },
  });

  return (
    <Box sx={styles}>
      <Typography sx={styles.h2} variant="h2">
        Contact
      </Typography>
      <Box
        sx={styles.formContainer}
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <Typography variant="body1">
          If you would like to have a coffee chat, feel free to contact me!
        </Typography>
        <Box sx={styles.inputsContainer}>
          <Box sx={styles.inputs}>
            <CssTextField id="name" name="name" label="Name" />
            <CssTextField id="email" email="email" label="Email" />
          </Box>
          <TextareaAutosize
            sx={styles.message}
            minRows={12}
            style={{ width: '100%' }}
          />
          <Button type="submit" disabled={state.submitting}>
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
