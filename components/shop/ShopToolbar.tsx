import SearchBar from "./SearchBar";

type ShopToolbarProps = {
  totalProducts: number;
  search: string;
  setSearch: (value: string) => void;
  sort: string;
  setSort: (value: string) => void;
};

export default function ShopToolbar({
  totalProducts,
  search,
  setSearch,
  sort,
  setSort,
}: ShopToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <h2 className="text-2xl font-bold">
        {totalProducts} Products
      </h2>

      <div className="flex flex-col gap-4 md:flex-row">

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="rounded-xl border px-4 py-2"
        >
          <option value="Latest">Latest</option>
          <option value="Price Low">Price Low → High</option>
          <option value="Price High">Price High → Low</option>
          <option value="Rating">Rating</option>
          <option value="Best Selling">Best Selling</option>
        </select>

      </div>

    </div>
  );
}