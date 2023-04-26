import React, { useEffect, useState } from "react";
import GetDate from "../Components/Date";
import { Box, Button, Checkbox, Form, Item, Label, NewItem } from "./styles";

const API_URL = process.env.REACT_APP_API_URL;

function Home() {
  const [inputvalue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  function handlerChange(event) {
    const { value } = event.target;
    setInputValue(value);
  }
  useEffect(() => {
    loadItems();
  }, []);
  async function loadItems() {
    const response = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      setItems(data);
    }
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    // if (inputvalue === "" || inputvalue === undefined || inputvalue === null) return;
    if (!inputvalue) return;
    const itemData = { text: inputvalue };
    const response = await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify(itemData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      const data = await response.json();
      setItems([...items, data]);
      setInputValue("");
    }
  };
  async function deleteItem(id) {
    const response = await fetch(`${API_URL}?id=${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setItems(items.filter((item) => item._id !== id));
    }
  }

  return (
    <div>
      <GetDate />
      <Box>
        {items.map((item) => (
          <Item key={item._id}>
            <Checkbox onChange={() => deleteItem(item._id)} />
            <Label>{item.value}</Label>
          </Item>
        ))}

        <Form onSubmit={onSubmit}>
          <NewItem
            value={inputvalue}
            name="item"
            placeholder="New Item"
            autocomplete="off"
            onChange={handlerChange}
          />
          <Button type="submit" name="list">
            +
          </Button>
        </Form>
      </Box>
    </div>
  );
}
export default Home;
