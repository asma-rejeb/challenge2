import * as React from "react";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function MediaControlCard() {
  const theme = useTheme();

  return (
    <>
     

      {/* <Card sx={{ display: "flex-start", width: 450, height: 250 }}>
            <Box
              sx={{
                display: "flex-start",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <CardMedia
            component="img"
            

            sx={{ display: "flex", width:250 }}
            image="https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="Live from space album cover"
          />
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Nom du produit{" "}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Description
                </Typography>
                <Button variant="outlined" size="medium">
                  Voir produit
                </Button>
                
              </CardContent>
            </Box>
          </Card> */}
      <List sx={{ width: "100%", maxWidth: 460, bgcolor: "#f4efe7" }}>
        <ListItem >
          <ListItemAvatar>
            <CardMedia
              component="img"
              sx={{ display: "flex", width: 160 }}
              image="https://images.unsplash.com/photo-1631214540553-ff044a3ff1d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
              alt="Live from space album cover"
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
                fontWeight="bold"
              >
                Nom du produit
                {/* {" "} */}
              </Typography>
            }
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Description
                </Typography>
              </React.Fragment>
            }
          />

          <Button variant="outlined" size="medium">
            Voir produit
          </Button>
        </ListItem>
      </List>

      
    </>
  );
}
