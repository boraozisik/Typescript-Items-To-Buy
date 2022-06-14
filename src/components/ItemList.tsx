import React from "react";
import {
  Container,
  List,
  ListItem,
  Avatar,
  Typography,
  Box,
} from "@mui/material";

interface IProps {
  items: {
    name: string;
    price: number;
    url: string;
    description?: string;
  }[];
}

const ItemList: React.FC<IProps> = ({ items }) => {
  const renderItemList = (): JSX.Element[] => {
    return items.map((item) => {
      return (
        <Box
          sx={{
            listStyle: "none",
            display: "flex",
            alignItems: "center",
            width: "50rem",
            margin: "0rem auto",
            border: " 0.1rem solid #F7DC6F",
            padding: "1rem",
            justifyContent: "space-between",
          }}
          key={item.name}
        >
          <ListItem>
            <Container sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{ width: "4rem", height: "4rem", marginRight: "20px" }}
                src={item.url}
              />
              <Typography variant="h5">{item.name}</Typography>
            </Container>
          </ListItem>
          <ListItem>
            <Typography variant="h6">${item.price}</Typography>
          </ListItem>
          <ListItem>
            <Typography
              variant="body2"
              sx={{ width: "70%", textAlign: "left" }}
            >
              {item.description}
            </Typography>
          </ListItem>
        </Box>
      );
    });
  };

  return <List sx={{ marginTop: 2 }}>{renderItemList()}</List>;
};

export default ItemList;
