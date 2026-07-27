export default function Card({title, desc}) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 m-3 shadow-md hover:-translate-y-1 hover:shadow-lg transition-all duration-200">
      <h1 className="text-xl font-bold text-gray-900 mb-2">{title}</h1>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}