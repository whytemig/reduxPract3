import { Box, IconButton, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Add, Remove } from "@mui/icons-material";
import { addToCart } from "../../store/cartSlice/cartSlice";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  console.log(cartItems);

  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px",
      }}
    >
      {cartItems && cartItems.length > 0
        ? cartItems.map((item) => {
            return (
              <Box
                key={item.id}
                sx={{
                  border: "1x solid #d7cccc",
                  borderRadius: "4px",
                }}
              >
                <Box
                  sx={{
                    height: "200px",
                    padding: "10px",
                    borderBottom: "1px solid #d7cccc",
                  }}
                >
                  <img
                    src={item.thumbnail}
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    padding: "10px",
                  }}
                >
                  <Typography
                    sx={{
                      flex: "1",
                      color: "#6f6c6c",
                      fontSize: "14px",
                      display: "flex",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#6f6c6c",
                      fontSize: "14px",
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>
                <Box sx={{ padding: "10px" }}>
                  <Typography
                    sx={{
                      color: "#000",
                      fontSize: "16px",
                      fontWeight: "bold",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      width: "320px",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: "10px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <IconButton onClick={() => dispatch(addToCart(item))}>
                    <Add />
                  </IconButton>
                  <Typography>{item.quantity}</Typography>
                  <IconButton>
                    <Remove />
                  </IconButton>
                </Box>
              </Box>
            );
          })
        : null}
    </Stack>
  );
};

export default Cart;
