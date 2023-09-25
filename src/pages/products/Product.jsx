import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callProductApi } from "../../store/productSlice/productSlice";
import { addToCart } from "../../store/cartSlice/cartSlice";

const Product = () => {
  const disaptch = useDispatch();

  const { productsList, isLoading } = useSelector((state) => state.product);
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    disaptch(callProductApi());
  }, []);

  const handleCart = (itemSelected) => {
    disaptch(addToCart(itemSelected));
  };

  // console.log(productsList, isLoading);

  if (isLoading) {
    return <Typography>LOADING!!!</Typography>;
  }
  return (
    <Stack
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px",
      }}
    >
      {productsList && productsList.length > 0
        ? productsList.map((item) => {
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
                  }}
                >
                  <Button
                    sx={{
                      padding: "8px 25px",
                      border: "1px solid #000",
                    }}
                    onClick={() => handleCart(item)}
                    // This part maps the cartItems array to an array of just the id properties of the objects in cartItems. It essentially creates an array of all the id values from cartItems.
                    // .indexOf(item.id): This part checks if the item.id exists in the array of id values obtained in the previous step. It returns the index of the first occurrence of item.id in the array. If item.id is not found, it returns -1.
                    // > -1: This part checks if the result of .indexOf(item.id) is greater than -1. If it is, it means that item.id was found in the cartItems array.
                    disabled={
                      cartItems && cartItems.length > 0
                        ? cartItems.map((cartI) => cartI.id).indexOf(item.id) >
                          -1
                        : false
                    }
                  >
                    Add to Cart
                  </Button>
                </Box>
              </Box>
            );
          })
        : null}
    </Stack>
  );
};

export default Product;
