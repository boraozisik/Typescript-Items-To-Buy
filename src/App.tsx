import React, { useState } from "react";
import ItemList from "./components/ItemList";
import AddItem from "./components/AddItem";
import { Container, Typography } from "@mui/material";

export interface IState {
  items: {
    name: string;
    price: number;
    url: string;
    description?: string;
  }[];
}

function App() {
  const [items, setItems] = useState<IState["items"]>([
    {
      name: "Anoka Desk ",
      url: "https://secure.img1-fg.wfcdn.com/im/70268433/compr-r85/1697/169728879/anoka-desk.jpg",
      price: 209,
      description:
        "This clean-lined computer desk brings versatile storage and modern style to your bedroom or dorm room.",
    },
    {
      name: "AR4071 Clean Force",
      url: "https://cdn.arzum.com.tr/ar4071-clean-force-red-cyclone-filter-vacuum-cleaner-red-bagless-vacuum-cleaner-arzum-ar4071-2189-23-K.jpg",
      price: 150,
      description:
        "AR4071 Clean Force Red Cyclone Filter Vacuum Cleaner, HIGH PERFORMANCE",
    },
    {
      name: "Arva - Axe V3 Shovel",
      url: "https://www.bfgcdn.com/600_600_90/407-0009-0111/arva-axe-v3-shovel-avalanche-shovel.jpg",
      price: 75,
      description:
        "The Axe V3 shovel from Arva is a very strong avalanche shovel. It is especially well suited for people looking for a compact and versatile option",
    },
  ]);

  return (
    <Container sx={{ textAlign: "center", marginTop: 2 }}>
      <Typography variant="h3">Items To Buy</Typography>
      <hr />
      <ItemList items={items} />
      <AddItem setItems={setItems} items={items} />
    </Container>
  );
}

export default App;

