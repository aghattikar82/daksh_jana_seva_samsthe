export default function DashboardOverview() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium text-sm">Total Projects</h3>
          <p className="text-4xl font-bold text-primary mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium text-sm">News Articles</h3>
          <p className="text-4xl font-bold text-primary mt-2">0</p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <h3 className="text-gray-500 font-medium text-sm">Gallery Images</h3>
          <p className="text-4xl font-bold text-primary mt-2">0</p>
        </div>
      </div>
    </div>
  );
}
