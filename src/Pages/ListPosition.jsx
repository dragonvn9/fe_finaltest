import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ListPosition() {
  const [data, setData] = useState([]);

  const fetchPosition = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/teacherposition/`);

      if (response.status === 200) {
        setData(response.data.positions);
      }
    } catch (error) {
      toast.error("Failed to fetch positions");
    }
  };

  useEffect(() => {
    fetchPosition();
  }, []);

  return (
    <div>
      <p>Danh sách tất cả các vị trí công tác</p>
      <br />
      <div>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100'>
          <b>Số Thứ Tự</b>
          <b>Mã Số</b>
          <b>Tên Công Việc</b>
          <b>Trạng Thái</b>
          <b>Mô Tả</b>
        </div>
        {data.map((item, index) => {
          return (
            <div key={index} className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
              <p>{item.ordinalNumber}</p>
              <p>{item.codePosition}</p>
              <p>{item.name}</p>
              <p>{item.status}</p>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ListPosition;
