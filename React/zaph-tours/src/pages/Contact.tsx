import { Box, TextField, Button} from '@mui/material';
import Title from '../components/Title';
const Contact = () => {
  return (
    <>
     <Title title='Contact Us'/>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          maxWidth: 400,
          mx: "auto",
          mt: 4,
        }}
      >
        <TextField label="Name" variant="outlined" required />
        <TextField label="Email" variant="outlined" type="email" required />
        <TextField label="Subject" variant="outlined" required />
        <TextField
          label="Message"
          variant="outlined"
          multiline
          rows={4}
          required
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Box>
    </>
  );
};

export default Contact;
