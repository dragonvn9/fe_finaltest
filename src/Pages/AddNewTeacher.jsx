import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

function AddNewTeacher() {
    const [image, setImage] = useState(null);
    const [code, setCode] = useState("");
    const [name, setName] = useState("")
    const [level, setLevel] = useState("")
    const [position, setPosition] = useState("null")
    const [status, setStatus] = useState("");
    const [positionData, setPositionData] = useState([]);

    const onSubmitHandle = async (e) => {
        e.preventDefault();

        try {
            // Tìm `ObjectId` của `TeacherPosition` từ tên công việc đã chọn
            let teacherPositionId = null;
            if (position !== "null") {
                const selectedPosition = positionData.find(item => item.name === position);
                if (selectedPosition) {
                    teacherPositionId = selectedPosition._id;
                } else {
                    toast.error('Could not find teacher position');
                    return;
                }
            }
            // Tạo FormData để gửi lên server
            const formData = new FormData();
            formData.append("avatarImage", image);
            formData.append("code", code);
            formData.append("name", name);
            formData.append("level", level);
            formData.append("teacherPositionId", teacherPositionId); // Sử dụng ObjectId của `TeacherPosition`
            formData.append("status", status);

            formData.forEach((value, key) => {
                console.log(`${key}: ${value}`);
            });

            const response = await axios.post(`http://localhost:8080/api/teacher/creat-teacher`, formData);

            if (response.data.newTeacher) {
                toast.success('Teacher added');
                setImage(null);
                setCode('');
                setName('');
                setLevel('');
                setPosition('null');
                setStatus('');
            } else {
                toast.error('Something went wrong');
            }

        } catch (error) {
            console.error("Error occurred:", error);
            toast.error(`Error occurred: ${error.response?.data?.message || error.message}`);
        }
    }

    const loadPositionTeacher = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/teacher/`);
            if (response.status === 200) {
                setPositionData(response.data.teachers);
            } else {
                toast.error('Unable to load position teacher');
            }
        } catch (error) {
            toast.error(`Error occurred: ${error.message}`);
        }
    }

    useEffect(() => {
        loadPositionTeacher();
    }, []);

    return (
        <form onSubmit={onSubmitHandle} className="flex flex-col items-start gap-8 text-gray-600 ms-8 mt-8">
            <div className="flex flex-col gap-8">
                <div className="flex gap-8">
                    <div className="flex flex-col gap-4">
                        <p>Upload Image</p>
                        <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" accept="image/*" hidden />
                        <label htmlFor="image">
                            <img src={image ? URL.createObjectURL(image) : assets.upload_img} className="w-24 cursor-pointer" alt="Upload" />
                        </label>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Mã Số Giáo Viên</p>
                    <input onChange={(e) => setCode(e.target.value)} value={code}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Thông tin khác"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p>Họ Tên Giáo Viên</p>
                    <input onChange={(e) => setName(e.target.value)} value={name}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Thông tin khác"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p>Trình Độ</p>
                    <input onChange={(e) => setLevel(e.target.value)} value={level}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Thông tin khác"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p>Thông Tin Công Tác</p>
                    <select onChange={(e) => setPosition(e.target.value)} defaultValue={position} className="bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[200px]">
                        <option value="null">none</option>
                        {positionData.map((item, index) => (<option key={index} value={item.name}>{item.name}</option>))}
                    </select>
                </div>
                <div className="flex flex-col gap-4">
                    <p>Trạng Thái</p>
                    <input onChange={(e) => setStatus(e.target.value)} value={status}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Thông tin khác"
                        type="text"
                    />
                </div>
                <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>
            </div>
        </form>
    )
}

export default AddNewTeacher;
