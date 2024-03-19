import React, { useState } from 'react';
import { addPicture } from '../utils/PictureUtil';
import { useNavigate } from 'react-router';

const AddPicture = () => {
    const nav = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        idSoldier: '',
        idUser: '',
        Url: '',
        Date: '',
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // You can perform additional validation and handling here
        if (!image) {
            alert('Please select an image');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('IdSoldier', formData.idSoldier);
        formDataToSend.append('IdUser', formData.idUser);
        formDataToSend.append('Url', formData.Url); // Match the case with your server model
        formDataToSend.append('Date', formData.Date); // Match the case with your server model
        formDataToSend.append('Image', image); // Match the case with your server model

        try {
            // Send formDataToSend to your server using an API call (e.g., fetch or axios)
            const response = await addPicture(formDataToSend);

            if (!response.ok) {
                throw new Error('Image upload failed');
            }

            // Assuming your server responds with the data
            const responseData = response.data;

            // For demonstration purposes, you can log the data
            console.log('Data to send:', Object.fromEntries(formDataToSend));
            console.log('Picture added successfully:', responseData);
        } catch (error) {
            console.error('Error adding picture:', error);
            // Handle error
        }
    };

    return (
        <div className="bg-gray-200">
            <button className="lg:hidden md:hidden sm:hidden" onClick={() => { setIsOpen(!isOpen) }} >
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 11h16M4 16h16" />
                </svg>
            </button>
            {isOpen && (
                <nav className="lg:hidden md:hidden sm:hidden left-0 top-0 flex shadow bg-white  justify-around items-center text-purple-500 lg:text-3xl lg:h-[80px] md:text-2m md:h-[30px] sm:text-sm  text-xs mt-4 sm:mt-0 font-normal font-['Alef'] leading-[45px] cursor-pointer">
                    <div onClick={() => nav('/register')}>
                        הרשמה
                    </div>
                    <div onClick={() => nav('/')}>
                        התחברות
                    </div>
                    <div onClick={() => nav('/contact')}>
                        צור קשר
                    </div>
                    <div onClick={() => nav('/soldiers')}>
                        חיפוש
                    </div>
                    <div onClick={() => nav('/homePage')} className='font-bold'>
                        אודות
                    </div>
                </nav>
            )}
            <nav className="hidden lg:flex md:flex sm:flex left-0 top-0 shadow bg-white  justify-center  items-center  text-black lg:text-2xl  lg:h-[47px] md:text-xl md:h-[40px] sm:text-s  sm:h-[20px] mt-4 sm:mt-0 font-normal font-['Alef'] leading-[45px] cursor-pointer space-x-11">
                <div onClick={() => nav('/register')}>
                    הרשמה
                </div>
                <div onClick={() => nav('/')}>
                    התחברות
                </div>
                <div onClick={() => nav('/contact')}>
                    צור קשר
                </div>
                <div onClick={() => nav('/soldiers')}>
                    חיפוש
                </div>
                <div onClick={() => nav('/homePage')} className='font-bold'>
                    אודות
                </div>
            </nav>
            <h1 className="flex justify-center text-3xl font-bold ">Add Image</h1>
            <div className="flex flex-wrap justify-center items-center bg-gray-400 text-white py-8 px-0 border border-black ">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label className="flex flex-col">
                        <span className="mb-1">Soldier ID:</span>
                        <input type="number" name="idSoldier" value={formData.idSoldier} onChange={handleChange} required className="bg-white text-white border border-gray-600 px-4 py-2 rounded" />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-1">User ID:</span>
                        <input type="number" name="idUser" value={formData.idUser} onChange={handleChange} required className="bg-white text-white border border-gray-600 px-4 py-2 rounded" />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-1">Date:</span>
                        <input type="date" name="Date" value={formData.Date} onChange={handleChange} required className="bg-white text-white border border-gray-600 px-4 py-2 rounded" />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-1">Image URL:</span>
                        <input type="text" name="Url" value={formData.Url} onChange={handleChange} className="bg-white text-white border border-gray-600 px-4 py-2 rounded" />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-1">Image:</span>
                        <input type="file" accept="image/*" onChange={handleImageChange} required className="bg-white text-white border border-gray-600 px-4 py-2 rounded" />
                    </label>
                    <button type="submit" className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600 transition duration-300">הוסף תמונה</button>
                </form>
            </div>
        </div>
    );
};

export default AddPicture;
