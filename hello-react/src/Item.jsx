import Badge from "./Badge";

export default function Item({ item, del }) {
  return (
    <div style={{ padding: 4 }}>
      {item.content} - <Badge text={item.date} />
      <button style={{ marginLeft: 10 }} onClick={() => del(item.id)}>
        Del
      </button>
    </div>
  );
}
