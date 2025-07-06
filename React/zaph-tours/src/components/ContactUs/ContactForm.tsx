import { Box, Button, Stack, TextField, Typography } from "@mui/material";

const ContactForm = () => (
  <Box
    sx={{
      py: 6,
      px: 2,
      display: "flex",
      justifyContent: "center",
    }}
  >
    <Box
      component="form"
      noValidate
      sx={{
        maxWidth: 500,
        width: "100%",
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Typography
        variant="h5"
        textAlign="center"
        color="secondary.dark"
        sx={{ mb: 3 }}
      >
        Get in Touch
      </Typography>

      <Stack spacing={2}>
        <TextField label="Name" fullWidth required />
        <TextField label="Email" type="email" fullWidth required />
        <TextField label="Subject" fullWidth required />
        <TextField label="Message" multiline rows={4} fullWidth required />
        <Button type="submit" variant="contained" color="secondary">
          Send Message
        </Button>
      </Stack>
    </Box>
  </Box>
);

export default ContactForm;
