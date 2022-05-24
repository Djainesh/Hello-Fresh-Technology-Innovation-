import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { green, lime, red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
//import postdata from "./user-auth/Data.json";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Navbar from "../components/navbar";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import { useAuth } from "../firebase/AuthUserContext";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  "& > :not(style) + :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function Products() {
  const { authUser, loading, signOutUser } = useAuth();
  const [expanded, setExpanded] = React.useState(false);
  const [ttitle, setttitle] = useState("");

  const [items, setItems] = useState([]);
  const [subscription, setSubscription] = useState({});
  const [state, setState] = useState(1);

  useEffect(() => {
    const fetchItems = () => {
      let api = "https://fresh-kit-backend.herokuapp.com/items";

      axios
        .get(api)
        .then((response) => {
          console.log("hello");
          console.log(response.data);

          setItems(response.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchItems();
  }, []);

  // adding product to cart
  const addtocart = async (e, dishID, dishName, dishIngridients, Price) => {
    const orderObject = {
      userid: authUser.email,
      dishid: dishID,
      dishname: dishName,
      ingridients: dishIngridients,
      price: Price,
    };

    let result = await axios.post(
      "https://fresh-kit-backend.herokuapp.com/checkout/addorder",
      orderObject
    );

    if (result.status == 200) {
      alert("Dish added to the cart");
    }
  };

  return (
    <>
      <Navbar></Navbar>
      {/* <br></br>
      <br></br>
      <br></br> */}
      <Box sx={{ p: 6 }}>
        <Grid container spacing={6} justifyContent="center">
          {items.map((data, i) => {
            return (
              <Grid
                item
                spacing={{ xs: 2, md: 4 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Card sx={{ maxWidth: 345, height: 1100 }}>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ bgcolor: lime[500] }} aria-label="recipe">
                        FM
                      </Avatar>
                    }
                    title={data.name}

                    //subheader="September 14, 2016"
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={data.imageUrl}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography paragraph>{data.description}</Typography>
                  </CardContent>
                  <CardActions disableSpacing></CardActions>
                  <CardContent>
                    <Typography paragraph>
                      <strong>Ingridents:</strong> {data.ingredients}
                    </Typography>
                    <Typography paragraph>
                      <strong>Price: </strong>
                      {data.price}
                    </Typography>
                    <Typography paragraph>
                      <strong>Method:</strong>
                    </Typography>

                    <Typography paragraph>{data.method}</Typography>
                    <Root>
                      <Divider>Video</Divider>
                    </Root>
                    <br></br>
                    <Typography paragraph>
                      <strong>Youtube Link For Video:</strong>{" "}
                      <a href="{data.youtubelink}">{data.youtubelink}</a>
                    </Typography>
                    <Button
                      variant="contained"
                      style={{ display: "inline-block", marginLeft: "52%" }}
                      onClick={(e) =>
                        addtocart(
                          e,
                          data._id,
                          data.name,
                          data.ingredients,
                          data.price
                        )
                      }
                    >
                      <Typography variant="subtitle1">ADD TO CART</Typography>
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Products;
