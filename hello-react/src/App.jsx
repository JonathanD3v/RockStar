import { useContext, useState } from "react";
import Item from "./Item";
import Form from "./Form";
import Header from "./Header";
import { AppContext } from "./AppProvider";

export default function App() {
  const { mode } = useContext(AppContext);
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
    <div
      style={{
        background: mode == "dark" ? "#222" : "#efefef",
        color: mode == "dark" ? "white" : "black",
        minHeight: 2000,
      }}
    >
      <div style={{ maxWidth: 600, margin: "auto" }}>
        <Header />
        <Form add={add} />
        <br />
        {data.map((item) => {
          return <Item key={item.id} item={item} del={del} />;
        })}
      </div>
    </div>
  );
}
