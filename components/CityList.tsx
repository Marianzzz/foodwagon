export default function CityList({ grouped }: { grouped: string[][] }) {
  return grouped.map((group, index) => (
    <div key={index} className="flex flex-col gap-2 text-center sm:text-left text-lg">
      {group.map((city, idx) => (
        <span key={idx} className="text-white">{city}</span>
      ))}
    </div>
  ));
}
