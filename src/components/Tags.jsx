export default function Tags({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="rounded bg-[#e9eff8] px-2.5 py-[5px] text-[10px] text-muted"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
