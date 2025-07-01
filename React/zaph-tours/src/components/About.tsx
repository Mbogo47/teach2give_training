import { Box, Typography, Container } from "@mui/material";

const About = () => {
  return (
    <Box>
      <Container>
        <Typography
          variant="h4"
          textAlign="center"
          color="secondary.dark"
          sx={{ mb: 1.5 }}
        >
          About Us
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{ color: "black", fontSize: "1.3rem" }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          sequi nisi pariatur est cupiditate, accusantium laborum doloremque,
          libero labore fugiat enim, quae repellendus facilis quos non
          consectetur ipsa sunt corrupti quia itaque officia eaque? Doloribus
          impedit, facere corporis, dolore aut officia vel deserunt rerum
          repudiandae magni cum nam nisi in ut provident veniam beatae earum.
          Cumque quod quia laudantium totam, saepe, quis obcaecati aperiam rerum
          autem quidem dolor nostrum laborum.
        </Typography>
      </Container>
    </Box>
  );
};

export default About;
