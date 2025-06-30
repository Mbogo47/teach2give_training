import { AppBar, Box, Button, Container, Toolbar, Typography} from "@mui/material"

const Header = () => {
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6">Zaph Tours</Typography>
          <Box>
            <Button>Home</Button>
            <Button>Destination</Button>
            <Button>Home</Button>
            <Button>Contact</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header