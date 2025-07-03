import { Typography } from "@mui/material";

type TitleProps = {
  title: string;
};

const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <Typography
      variant="h4"
      textAlign="center"
      color="secondary.dark"
      sx={{ mb: 3 }}
    >
      {title}
    </Typography>
  );
};

export default Title;
