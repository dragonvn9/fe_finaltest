import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4 overflow-y-auto">
      <div className="text-blue-600 text-xl font-bold mb-6">School System</div>
      <ul className="space-y-4">
        <li>
          <NavLink to='/list-teacher' className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Danh sách Giáo Viên</NavLink>
        </li>
        <li>
          <NavLink to='/add-teacher' className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Tạo Mới Giáo Viên</NavLink>
        </li>
        <li>
          <NavLink to='/list-position' className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Danh Sách Vị Trí Công Việc</NavLink>
        </li>
        <li>
          <NavLink to='/add-position' className="text-gray-600 hover:text-blue-500 transition-colors duration-200">Tạo Mới Vị Trí Công Việc</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
