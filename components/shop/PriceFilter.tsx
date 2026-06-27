type PriceFilterProps = {
  value: number;
  setValue: (value: number) => void;
};

export default function PriceFilter({
  value,
  setValue,
}: PriceFilterProps) {
  return (
    <div>
      <h3 className="mb-3 font-semibold">
        Maximum Price
      </h3>

      <input
        type="range"
        min={0}
        max={2000}
        step={100}
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        className="w-full accent-pink-600"
      />

      <p className="mt-2 text-sm font-medium text-pink-600">
        ₹ {value}
      </p>
    </div>
  );
}