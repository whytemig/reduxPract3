import { Box, Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { callProductApi, getProducts } from "../../store/productSlice/productSlice";
import { addToCart } from "../../store/cartSlice/cartSlice";

const Product = () => {
  
  const disaptch = useDispatch()
  
  const {productsList, isLoading} = useSelector(state => state.product)
  

  useEffect(() => {
    disaptch(callProductApi());
  }, [])


  const handleCart = (itemSelected) => {
    disaptch(addToCart(itemSelected))
  }

  // console.log(productsList, isLoading);

  if (isLoading) {
    return <Typography>LOADING!!!</Typography>
  }
  return (
      <Stack>
      {
        productsList && productsList.length > 0 ? 
          productsList.map((item) => {
            return (
              
                <Box key={item.id}>
                  <Box>
                    <img src={item.thumbnail} />
                  </Box>
                  <Box>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.price}</Typography>
                  </Box>
                  <Box>
                    <Typography>{item.description}</Typography>
                  </Box>
                  <Box>
                    <Button onClick={()=> handleCart(item)}>Add to Cart</Button>
                  </Box>
                </Box>
            );
          }) : null
          }
   </Stack>
  )
}

export default Product