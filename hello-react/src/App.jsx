import { useState } from "react";
import Item from "./Item";
import Form from "./Form";

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "A", date: "1s" },
    { id: 2, content: "B", date: "2s" },
  ]);

  const del = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const add = (content) => {
    const id = data[0].id + 1;
    setData([{ id, content, date: "1s" }, ...data]);
  };

  return (
    <div>
      <h1>Hello</h1>

      <Form add={add} />
      <br />
      {data.map((item) => {
        return <Item key={item.id} item={item} del={del} />;
      })}
    </div>
  );
}
