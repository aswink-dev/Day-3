import Card from "../../../components/Card";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="flex flex-wrap">
        <Card title="Users" desc="100 Users" />
        <Card title="Sales" desc="$5000" />
      </div>
    </div>
  );
}