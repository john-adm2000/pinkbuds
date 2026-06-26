type SearchBarProps = {
  search: string;
  setSearch: (value: string) => void;
};

export default function SearchBar({
  search,
  setSearch,
}: SearchBarProps) {
  return (
    <div className="w-full max-w-md">
      <input
        type="text"
        placeholder="🔍 Search flowers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-pink-300 px-5 py-3 outline-none transition focus:border-pink-500"
      />
    </div>
  );
}