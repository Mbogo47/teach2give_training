import { Box } from "@mui/material";
import Title from "../Title";

const ContactMap = () => {
  return (
    <Box sx={{ mt: 3, width: "50%" }}>
      <Title title="Contact Information" />
      <iframe
        title="zaph-tours"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.507562880107!2d37.14447627585619!3d-0.7151129992779203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18289873299b19ed%3A0x97675389aba81506!2sM%C5%A8RANG&#39;A%20UNIVERSITY%20OF%20TECHNOLOGY%20y!5e0!3m2!1sen!2ske!4v1751622469256!5m2!1sen!2ske"
        width="100%"
        height="90%"
        style={{ border: 0 }}
        allowFullScreen
      />
    </Box>
  );
};

export default ContactMap;
