import React from 'react';

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gray-100 p-4 border-b border-gray-200">
      <div className="text-gray-600">16/10/2024 11:25:54 - khoatrancp603</div>
      <div className="flex items-center space-x-4">
        <span className="text-gray-500">Admin</span>
        <span className="bg-red-500 text-white px-3 py-1 rounded">ADMIN</span>
      </div>
    </div>
  );
}

export default Navbar;
