import PriceFilter from "./PriceFilter";

type ShopSidebarProps = {
  category: string;
  setCategory: (value: string) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
};

const categories = [
  "All",
  "Roses",
  "Lilies",
  "Bouquets",
  "Gifts",
  "Tulips",
];

export default function ShopSidebar({
  category,
  setCategory,
  maxPrice,
  setMaxPrice,
}: ShopSidebarProps) {
  return (
    <aside className="rounded-3xl bg-white p-6 shadow-md">

      <h2 className="mb-6 text-2xl font-bold">
        Filters
      </h2>

      <div className="space-y-8">

        <div>

          <h3 className="mb-4 font-semibold">
            Categories
          </h3>

          <ul className="space-y-2">

            {categories.map((item) => (

              <li
                key={item}
                onClick={() => setCategory(item)}
                className={`cursor-pointer rounded-lg px-3 py-2 transition

                ${
                  category === item
                    ? "bg-pink-100 font-semibold text-pink-600"
                    : "hover:bg-pink-50"
                }`}
              >
                {item}
              </li>

            ))}

          </ul>

        </div>

        <PriceFilter
          value={maxPrice}
          setValue={setMaxPrice}
        />

      </div>

    </aside>
  );
}