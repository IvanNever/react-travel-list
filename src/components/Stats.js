export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const itemsNum = items.length;
  const packed = items.filter((item) => item.packed).length;
  const percent = Math.round((packed / itemsNum) * 100);
  return (
    <footer className="stats">
      <em>
        {percent === 100
          ? "You got everything! Ready to go ✈"
          : `You have ${itemsNum} items on your list, and you already packed ${packed} (${percent}%)`}
      </em>
    </footer>
  );
}
