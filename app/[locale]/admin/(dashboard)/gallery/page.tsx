'use client';

import { useState } from 'react';
import { UploadCloud, Image as ImageIcon, Trash2, Video, Info } from 'lucide-react';

export default function GalleryAdminPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');
  const [message, setMessage] = useState<{ text: string, type: 'info' | 'success' | 'error' } | null>(null);

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    if (!selectedProject) {
      setMessage({ text: "Please select a project before uploading.", type: 'error' });
      return;
    }

    setIsUploading(true);
    setMessage(null);
    
    // Simulate upload delay for UI visualization
    setTimeout(() => {
      setIsUploading(false);
      setMessage({ text: "Note: This is the visual UI layout! Backend storage connection will be added next.", type: 'info' });
    }, 1500);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Gallery Management</h1>
          <p className="text-gray-500 mt-1">Upload and manage photos/videos for the public gallery.</p>
        </div>
      </div>

      {message && (
        <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${
          message.type === 'error' ? 'bg-red-50 text-red-700 border border-red-200' :
          message.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' :
          'bg-blue-50 text-blue-700 border border-blue-200'
        }`}>
          <Info className="w-5 h-5 flex-shrink-0" />
          <span className="font-medium">{message.text}</span>
        </div>
      )}
      
      {/* Upload Zone */}
      <div className="bg-white rounded-3xl shadow-sm border-2 border-dashed border-gray-200 p-12 text-center mb-10 hover:border-primary/50 transition-colors">
        
        <div className="max-w-xs mx-auto mb-8 text-left">
          <label className="block text-sm font-bold text-gray-700 mb-2">Assign to Project:</label>
          <select 
            value={selectedProject}
            onChange={(e) => setSelectedProject(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-primary focus:border-primary bg-white text-gray-700"
          >
            <option value="">-- Select a Project --</option>
            <option value="annadanam">Annadanam</option>
            <option value="education">Education Support</option>
            <option value="health">Health Camps</option>
            <option value="tree_plantation">Tree Plantation</option>
            <option value="general">General / Other Events</option>
          </select>
        </div>

        <UploadCloud className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-700 mb-2">Upload Media Files</h3>
        <p className="text-gray-500 mb-6 max-w-md mx-auto">
          Supports JPG, PNG, and MP4 formats. High-quality photos are recommended.
        </p>
        
        <label className={`inline-flex items-center justify-center px-8 py-3 rounded-full font-bold shadow-sm cursor-pointer transition-all ${isUploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-primary to-secondary hover:shadow-lg text-white'}`}>
          {isUploading ? "Uploading to Cloud..." : "Browse Files"}
          <input 
            type="file" 
            className="hidden" 
            multiple 
            accept="image/*,video/mp4" 
            onChange={handleUpload} 
            disabled={isUploading} 
          />
        </label>
      </div>

      {/* Existing Gallery Grid Placeholder */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Live Gallery</h2>
        <span className="text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">0 files published</span>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Empty State */}
        <div className="col-span-full bg-white rounded-2xl p-10 border border-gray-100 flex flex-col items-center justify-center text-gray-400">
             <ImageIcon className="w-12 h-12 mb-3 opacity-20" />
             <span className="font-medium text-gray-500">Your gallery is currently empty.</span>
             <span className="text-sm mt-1">Upload some files above to see them here!</span>
        </div>
      </div>
    </div>
  );
}
