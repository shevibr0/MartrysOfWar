import React, { useState } from 'react'
import { useNavigate } from 'react-router';


const Contact = () => {

    const nav = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [error, setError] = useState('');
    const [isOpen, setIsOpen] = useState(false);

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
            <div className="flex flex-wrap justify-center items-center h-screen">
                <div className="border border-black p-9 rounded-md">
                    <h1 className="text-black text-4xl font-bold font-['Alef'] mb-4 text-center">הרשמה</h1>
                    <div className="flex flex-col items-center">
                        <label htmlFor="name">שם</label>
                        {/* <input name="name" type="text" placeholder="הכנס שם" value={name} onChange={handleChangeName} style={{ direction: 'rtl' }} /><br />
                        <label htmlFor="email">מייל</label>
                        <input name="email" type="email" placeholder="הכנס מייל" value={email} onChange={handleChangeEmail} style={{ direction: 'rtl' }} /><br />
                        <label htmlFor="password">סיסמא</label>
                        <input name="password" type="password" placeholder="הכנס סיסמא" value={password} onChange={handleChangePassword} /><br />
                        <label htmlFor="phoneNumber">טלפון</label>
                        <input name="phoneNumber" type="tel" placeholder="הכנס טלפון" value={phoneNumber} onChange={handleChangePhoneNumber} /><br />
                        <span>{error}</span>
                        <button onClick={handleRegistration} className="bg-black text-white px-4 py-2 rounded-md">הרשמה</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
