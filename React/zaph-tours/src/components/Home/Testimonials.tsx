import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Testimonials = () =>  {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="/lake-nakuru.jfif"/>
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
    </Stack>
  );
}
export default Testimonials;