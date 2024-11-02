import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

function ListTeacher() {
    const [data, setData] = useState([]);

    const fetchTeacher = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/teacher/`);
            if (response.status === 200) {
                setData(response.data.teachers);
            }
        } catch (error) {
            toast.error(`Error occurred: ${error.message}`);
        }
    };

    useEffect(() => {
        fetchTeacher();
    }, []);

    return (
        <div className="p-5">
            <h2 className="text-xl font-bold mb-4">Danh sách tất cả giáo viên</h2>
            <div className="grid grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr] gap-4 mb-4 border-b border-gray-300 pb-2">
                <b>Hình Ảnh</b>
                <b>Mã</b>
                <b>Họ và Tên</b>
                <b>Trình độ</b>
                <b>Vị Trí Công Tác</b>
                <b>Trạng Thái</b>
            </div>
            {data.map((item, index) => (
                <div key={index} className='grid grid-cols-[1fr_1fr_2fr_1fr_1fr_1fr] items-center gap-4 p-3 border-b border-gray-200'>
                    <img className='w-12 h-12 rounded-full object-cover' src={item.avatarImage} alt={item.name} />
                    <p>{item.code}</p>
                    <p>{item.name}</p>
                    <p>{item.level}</p>
                    <p>{item.teacherPositionId?.name || "N/A"}</p>
                    <p className={`font-semibold ${item.status ? "text-green-500" : "text-red-500"}`}>
                        {item.status ? "Đang hoạt động" : "Kết thúc"}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default ListTeacher;
