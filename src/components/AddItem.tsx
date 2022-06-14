import {
  Button,
  Container,
  TextareaAutosize,
  TextField,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import { IState as Props } from "../App";
import PersonIcon from "@mui/icons-material/Person";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

interface IProps {
  setItems: React.Dispatch<React.SetStateAction<Props["items"]>>;
  items: Props["items"];
}

const AddItem: React.FC<IProps> = ({ setItems, items }) => {
  const [input, setInput] = useState({
    name: "",
    price: "",
    description: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    if (!input.name || !input.price) return;

    setItems([
      ...items,
      {
        name: input.name,
        price: parseInt(input.price),
        url: input.img,
        description: input.description,
      },
    ]);

    setInput({
      name: "",
      price: "",
      img: "",
      description: "",
    });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "30rem",
        margin: "5rem auto",
      }}
    >
      <TextField
        variant="outlined"
        type="text"
        onChange={handleChange}
        sx={{
          padding: "0.5 rem",
          fontSize: "1rem",
          margin: " 0.3rem 0rem;",
        }}
        name="name"
        value={input.name}
        label="Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        variant="outlined"
        type="text"
        onChange={handleChange}
        sx={{ padding: "0.5 rem", fontSize: "1rem", margin: " 0.3rem 0rem;" }}
        name="price"
        value={input.price}
        label="Price"
        InputProps={{
          startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
      />
      <TextField
        variant="outlined"
        type="text"
        onChange={handleChange}
        sx={{ padding: "0.5 rem", fontSize: "1rem", margin: " 0.3rem 0rem;" }}
        name="img"
        value={input.img}
        label="Image Url"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AddPhotoAlternateIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextareaAutosize
        minRows={5}
        onChange={handleChange}
        style={{ marginTop: 1 }}
        name="description"
        value={input.description}
        placeholder="Description"
      />
      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          padding: "0.5rem",
          cursor: "pointer",
          backgroundColor: "#f7dc6f",
          fontWeight: 700,
          color: "black",
          border: "none",
          "&:hover": {
            backgroundColor: "#f7dc6f",
          },
          marginTop: 1,
        }}
      >
        Add to List
      </Button>
    </Container>
  );
};

export default AddItem;
