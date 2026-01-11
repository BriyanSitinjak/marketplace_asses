type Props = {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
};

export function CategoryTabs({ categories, active, onChange }: Props) {
  return (
    <div className="tabs">
      {categories.map(cat => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => onChange(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
