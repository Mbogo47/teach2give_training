import { Box } from '@mui/material';
import Title from '../components/Title';
import ContactForm from '../components/ContactUs/ContactForm';
import ContactInfo from "../components/ContactUs/ContactInfo";


const Contact = () => {
  return (
    <Box >
      <Box sx={{ backgroundColor: "#fff" }}>
     {/* <Title title='Talk to us'/> */}
      <ContactForm />
      </Box>
      <ContactInfo />
    </Box>
  );
};

export default Contact;
