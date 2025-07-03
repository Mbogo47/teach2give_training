import { Box, Typography, Card, CardContent, Stack } from "@mui/material";
import Title from "../Title";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const contactItems = [
  {
    icon: <EmailIcon sx={{ fontSize: 60 }} />,
    label: "Email",
    value: "info@zaphtours.com",
  },
  {
    icon: <PhoneInTalkIcon sx={{ fontSize: 60 }} />,
    label: "Phone",
    value: "+254 700 000 000",
  },
  {
    icon: <HomeIcon sx={{ fontSize: 60 }} />,
    label: "Address",
    value: "Zaph Towers, Nairobi, Kenya",
  },
];

const ContactInfo = () => (
  <Box sx={{ mt: 4}}>
    <Title title="Contact Information" />
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      {contactItems.map((item, idx) => (
        <Card key={idx} sx={{ maxWidth: 300, width: "100%", textAlign: "center" }}>
          <CardContent>
            <Box sx={{ mb: 1 }}>{item.icon}</Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {item.label}
            </Typography>
            <Typography>{item.value}</Typography>
          </CardContent>
        </Card>
      ))}
    </Stack>
  </Box>
);

export default ContactInfo;
