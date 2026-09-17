export default function GalleryAdminPage() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Gallery Management</h1>
        <button className="bg-primary text-white px-6 py-2 rounded-lg font-bold shadow-sm hover:shadow-md">Bulk Upload Images</button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center text-gray-500">
        Drag & Drop bulk image upload will be implemented here.
      </div>
    </div>
  );
}
