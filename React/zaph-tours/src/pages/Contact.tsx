import { Box } from "@mui/material";
import ContactForm from "../components/ContactUs/ContactForm";
import ContactInfo from "../components/ContactUs/ContactInfo";
import ContactMap from "../components/ContactUs/ContactMap";
import OfficeHours from "../components/ContactUs/OfficeHours";

const Contact = () => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#fff" }}>
        <ContactForm />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 2,
        }}
      >
        <ContactInfo />
        <ContactMap />
      </Box>
      <OfficeHours />
    </Box>
  );
};

export default Contact;
