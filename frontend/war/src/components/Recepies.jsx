import React, { useEffect, useState } from 'react'
import { getRecipy } from '../utils/RecipyUtil';
import { useNavigate } from 'react-router';

const Recepies = () => {
    const nav = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [recepies, setRecepies] = useState([]);
    const fetchRecepies = async () => {
        try {
            const data = await getRecipy();
            console.log('API Response:', data);
            setRecepies(data);
        } catch (error) {
            // Handle error
        }
    };
    useEffect(() => {

        fetchRecepies();
    }, []);
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
            {recepies.map((recipe) => (
                <div key={recipe.id}>
                    <h2>Recipe ID: {recipe.id}</h2>
                    <p>Soldier ID: {recipe.idSoldier}</p>
                    <p>User ID: {recipe.idUser}</p>
                    <p>Date: {recipe.date}</p>

                </div>
            ))}
        </div>
    )

}

export default Recepies
