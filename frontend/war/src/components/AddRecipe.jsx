import React, { useState } from 'react';

import { addRecipy } from '../utils/RecipyUtil';
import { useNavigate } from 'react-router';

const AddRecipe = () => {
    const nav = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [recipe, setRecipe] = useState({
        IdSoldier: 0,
        IdUser: 0,
        Date: new Date().toISOString().split('T')[0], // Use only the date part
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (recipe.IdSoldier <= 0 || recipe.IdUser <= 0 || !recipe.Date) {
            setError('Please fill in all fields.');
            return;
        }

        setIsLoading(true);

        try {
            const addedRecipe = await addRecipy(recipe);
            console.log('Recipe added successfully:', addedRecipe);
            // Reset form and provide feedback
            setRecipe({
                IdSoldier: 0,
                IdUser: 0,
                Date: new Date().toISOString().split('T')[0],
            });
            setError('');
        } catch (error) {
            console.error('Error adding recipe:', error);
            setError('Error adding recipe. Please try again.');
        } finally {
            setIsLoading(false);
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
            <div className="bg-gray-900 text-white py-8 px-4">
                <h2 className="text-3xl font-bold mb-4">Add Recipe</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <label className="flex flex-col">
                        <span className="mb-1">Soldier ID:</span>
                        <input
                            type="number"
                            name="IdSoldier"
                            value={recipe.IdSoldier}
                            onChange={handleChange}
                            className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-1">User ID:</span>
                        <input
                            type="number"
                            name="IdUser"
                            value={recipe.IdUser}
                            onChange={handleChange}
                            className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded"
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-1">Date:</span>
                        <input
                            type="date"
                            name="Date"
                            value={recipe.Date}
                            onChange={handleChange}
                            className="bg-gray-800 text-white border border-gray-600 px-4 py-2 rounded"
                        />
                    </label>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={`bg-gray-700 text-white py-2 px-4 rounded ${isLoading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-600 transition duration-300'
                            }`}
                    >
                        {isLoading ? 'Adding...' : 'Add Recipe'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
