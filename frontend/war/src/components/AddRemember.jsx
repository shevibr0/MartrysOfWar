import React, { useState } from 'react';
import { addMemory } from '../utils/MemoryUtil';
import { useNavigate, useParams } from 'react-router';

const AddRemember = () => {
    const nav = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [memory, setMemory] = useState({
        IdSoldier: id, // Replace with the actual soldier ID
        IdUser: 0, // Replace with the actual user ID
        Remember: '', // Your default value or leave it as an empty string
        Date: new Date().toISOString().split('T')[0], // Use only the date part
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMemory((prevMemory) => ({
            ...prevMemory,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const addedMemory = await addMemory(memory);
            console.log('Memory added successfully:', addedMemory);
            // Reset form or perform any other actions
        } catch (error) {
            console.error('Error adding memory:', error);
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
            <h2 className='flex justify-center text-3xl font-bold'>הוספת זכרון</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className='flex flex-wrap justify-center items-center bg-gray-400 text-white h-screen'>
                <form onSubmit={handleSubmit} className='flex flex-col py-6 px-4 border-2 border-black mt-0'>

                    <label className='flex flex-col'>
                        User ID:
                        <input type="number" name="IdUser" value={memory.IdUser} onChange={handleChange} className='bg-white text-white border border-gray-600 px-4 py-2 rounded' />
                    </label>
                    <br />
                    <label className='flex flex-col'>
                        Remember:
                        <textarea name="Remember" value={memory.Remember} onChange={handleChange} className='bg-white text-white border border-gray-600 px-4 py-2 rounded' />
                    </label>
                    <br />
                    <label className='flex flex-col'>
                        Date:
                        <input type="date" name="Date" value={memory.Date} onChange={handleChange} className='bg-white text-white border border-gray-600 px-4 py-2 rounded' />
                    </label>
                    <br />
                    <button type="submit"
                        disabled={isLoading}
                        className={`bg-gray-700 text-white py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600 transition duration-300'
                            }`}
                    >
                        {isLoading ? 'Adding...' : 'הוספת זכרון'}</button>
                </form>
            </div>
        </div>
    );
};

export default AddRemember;
