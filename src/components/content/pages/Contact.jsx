import { Typography, Box, Button, TextareaAutosize } from '@mui/material';
import { styles } from '../../../styles/contactStyles';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useState } from 'react';

const Contact = () => {
  const [success, setSuccessMessage] = useState(false);

  const schema = yup.object({
    name: yup
      .string()
      .trim()
      .matches(/[A-Za-z]+/, 'Name can only contain letters')
      .max(20, 'Name is too long, maximum 20 characters')
      .required('Name is required'),
    email: yup
      .string()
      .trim()
      .email('Email must be valid')
      .required('Email is required'),
    message: yup
      .string()
      .trim()
      .max(250, 'Message is too long, maximum 250 characters')
      .required('Please, leave a message'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const { name, email, message } = data;
    const obj = {
      name,
      email,
      message,
    };

    fetch('https://formspree.io/f/moqrdeno', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    setSuccessMessage(true);
  };

  return (
    <Box sx={styles}>
      <Typography sx={styles.h2} variant="h2">
        Contact
      </Typography>
      {success ? (
        <Typography sx={styles.successMessage} variant="body1">
          Form was submitted successfully!
        </Typography>
      ) : (
        <Box
          component="form"
          sx={styles.formContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography sx={styles.para} variant="body1">
            If you have any questions or would like to have a coffee chat, feel
            free to contact me!
          </Typography>
          <Box sx={styles.inputsContainer}>
            <Box sx={styles.inputs}>
              <Box sx={styles.inputColumn}>
                <label style={{ marginBottom: '5px' }} htmlFor="name">
                  Name
                </label>
                <input
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    outline: 'none',
                    padding: '10px',
                  }}
                  id="name"
                  {...register('name')}
                />
                <Typography sx={styles.errorMessage} variant="body2">
                  {errors.name?.message}
                </Typography>
              </Box>
              <Box sx={styles.inputColumn}>
                <label style={{ marginBottom: '5px' }} htmlFor="email">
                  Email
                </label>
                <input
                  style={{
                    width: '100%',
                    borderRadius: '5px',
                    outline: 'none',
                    padding: '10px',
                  }}
                  id="email"
                  {...register('email')}
                />
                <Typography sx={styles.errorMessage} variant="body2">
                  {errors.email?.message}
                </Typography>
              </Box>
            </Box>
            <label style={{ marginBottom: '5px' }} htmlFor="message">
              Message
            </label>
            <TextareaAutosize
              minRows={12}
              {...register('message')}
              id="message"
            />
            <Typography sx={styles.errorMessage} variant="body2">
              {errors.message?.message}
            </Typography>
            <Button sx={styles.submit} type="submit">
              Send Message
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Contact;
