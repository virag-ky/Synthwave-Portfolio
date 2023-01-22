import { Typography, Box, Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { styles } from '../../../styles/contactStyles';
import styled from '@emotion/styled';
import { useForm, Controller } from 'react-hook-form';
import InputUnstyled from '@mui/base/InputUnstyled';

const Contact = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

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
      <form
        sx={styles.formContainer}
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
        action="https://formspree.io/f/moqrdeno"
      >
        <Typography sx={styles.para} variant="body1">
          If you have any questions or would like to have a coffee chat, feel
          free to contact me!
        </Typography>
        <Box sx={styles.inputsContainer}>
          <Box sx={styles.inputs}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              aria-invalid={errors.name ? 'true' : 'false'}
              render={({ field }) => <InputUnstyled {...field} />}
            />
            {errors.name?.type === 'required' && <span>Name is required</span>}
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              aria-invalid={errors.email ? 'true' : 'false'}
              render={({ field }) => <InputUnstyled {...field} />}
            />
            {errors.email?.type === 'required' && (
              <span>Email is required</span>
            )}
          </Box>
          <Controller
            name="message"
            control={control}
            rules={{ required: true }}
            aria-invalid={errors.message ? 'true' : 'false'}
            render={({ field }) => <InputUnstyled {...field} />}
          />
          {errors.message?.type === 'required' && (
            <span>Please, leave a message</span>
          )}
          <Button sx={styles.submit} type="submit">
            Send Message
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Contact;
