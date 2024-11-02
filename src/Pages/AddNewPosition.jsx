import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddNewTeacherPosition() {
    const [ordinalNumber, setOrdinalNumber] = useState("");
    const [codePosition, setCodePosition] = useState("");
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandle = async (e) => {
        e.preventDefault();
        // console.log("Ordinal Number:", ordinalNumber);
        // console.log("Code Position:", codePosition);
        // console.log("Name:", name);
        // console.log("Status:", status);
        // console.log("Description:", description);

        try {
            const formData = new FormData();
            formData.append("ordinalNumber", ordinalNumber);
            formData.append("codePosition", codePosition);
            formData.append("name", name);
            formData.append("status", status);
            formData.append("description", description);

            //const jsonData = JSON.stringify(formDataT);

            //Kiểm tra dữ liệu trong formDataT
            formData.forEach((value, key) => {
              console.log(`${key}: ${value}`);
            });

            const response = await axios.post(`http://localhost:8080/api/teacherposition/create-position-teacher`, formData);

            if (response.status === 200) {
                toast.success('Teacher position added');
                // Reset form fields
                setOrdinalNumber("");
                setCodePosition("");
                setName("");
                setStatus("");
                setDescription("");
            } else {
                toast.error('Something went wrong');
            }

        } catch (error) {
            console.error("Error occurred:", error);
            // Log the entire response for debugging
            if (error.response) {
                console.error("Response data:", error.response.data);
                console.error("Response status:", error.response.status);
                console.error("Response headers:", error.response.headers);
                toast.error(`Error occurred: ${error.response.data.message || error.message}`);
            } else {
                // Handle case where there is no response (e.g., network error)
                toast.error(`Error occurred: ${error.message}`);
            }
        }
    }

    return (
        <form onSubmit={onSubmitHandle} className="flex flex-col items-start gap-8 text-gray-600 ms-8 mt-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <p>Ordinal Number</p>
                    <input
                        onChange={(e) => setOrdinalNumber(e.target.value)}
                        value={ordinalNumber}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Ordinal Number"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p>Code Position</p>
                    <input
                        onChange={(e) => setCodePosition(e.target.value)}
                        value={codePosition}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Code Position"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p>Name</p>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Name"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p>Status</p>
                    <input
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Status"
                        type="text"
                    />
                </div>
                <div className="flex flex-col gap-4">
                    <p>Description</p>
                    <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        className="bg-transparent outline-green-600 border-2 border-gray-400 p-2 w-[max(30vw,200px)]"
                        placeholder="Description"
                    />
                </div>
                <button type='submit' className='text-base bg-black text-white py-2.5 px-14 cursor-pointer'>ADD</button>
            </div>
        </form>
    );
}

export default AddNewTeacherPosition;
