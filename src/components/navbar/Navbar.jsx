import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Home, ShoppingBag } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <Stack
      direction={"row"}
      sx={{
        padding: "10px 15px",
      }}
    >
      <Box
        sx={{
          flex: "1",
          display: "flex",
        }}
      >
        <IconButton onClick={() => navigate("/")} size="large">
          <Home />
        </IconButton>
      </Box>
      <Box>
        <IconButton onClick={() => navigate("/cart")} size="large">
          <Typography>{cartItems && cartItems.length}</Typography>
          <ShoppingBag />
        </IconButton>
      </Box>
    </Stack>
  );
};

export default Navbar;
