import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getSoldiersById } from '../utils/SoldierUtil'; // Import the getSoldiersById function

const SoldierInfo = () => {
    const nav = useNavigate()
    const { id } = useParams(); // Assuming you're using React Router's useParams hook
    const [soldier, setSoldier] = useState(null); // State to store the soldier's data
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const fetchSoldierDetails = async () => {
            try {
                // Fetch the soldier's data using the id
                const soldierData = await getSoldiersById(id);
                setSoldier(soldierData);
                console.log("soldier", soldier)
            } catch (error) {
                console.error('Error fetching soldier details:', error);
                // Handle error
            }
        };
        console.log("soldier", soldier)
        fetchSoldierDetails();
    }, [id]);

    // if (!soldier) {
    //     return <p>Loading...</p>;
    // }

    return (

        <div className=" bg-gray-200">
            <button className="lg:hidden md:hidden sm:hidden" onClick={() => { setIsOpen(!isOpen) }} >
                <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 11h16M4 16h16" />
                </svg>
            </button>
            {isOpen && (
                <nav className="lg:hidden md:hidden sm:hidden left-0 top-0 flex shadow  bg-white  justify-around items-center text-purple-500 lg:text-3xl lg:h-[80px] md:text-2m md:h-[30px] sm:text-sm  text-xs mt-4 sm:mt-0 font-normal font-['Alef'] leading-[45px] cursor-pointer">
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
            <div className=" flex lg:flex md:flex sm:flex left-0 top-0 shadow bg-gray-300  justify-center  items-center  text-black lg:text-2xl  lg:h-[47px] md:text-xl md:h-[40px] sm:text-s  sm:h-[20px]  sm:mt-0 font-normal font-['Alef'] leading-[45px] cursor-pointer space-x-11">
                <div onClick={() => nav(`/soldierInfo/${id}/addPicture`)}>
                    + הוסף תמונה
                </div>
                <div onClick={() => nav(`/soldierInfo/${id}/addRecepy`)}>
                    + הוסף מתכון
                </div>
                <div onClick={() => nav(`/soldierInfo/${id}/addMemory`)}>
                    + הוסף זכרון
                </div>
                <div onClick={() => nav(`/soldierInfo/${id}/addTheilim`)}>
                    + הוסף פרק תהילים
                </div>
                <div onClick={() => nav(`/soldierInfo/${id}/addVolunteer`)} >
                    + הוסף התנדבות
                </div>
            </div>
            <div className='flex justify-around items-center mt-5'>
                <div className='flex cursor-pointer' onClick={() => nav('/recepies')} >מתכונים </div>
                <div className='flex cursor-pointer' onClick={() => nav('/memories')} >פתקי זכרון</div>
                <div className='flex cursor-pointer' onClick={() => nav('/pictures')} >תמונות</div>
                <div className='flex cursor-pointer' onClick={() => nav('/theilim')} >מספר תהילים שנאמרו</div>
                <div className='flex cursor-pointer' onClick={() => nav('/volunteering')} >התנדבויות שנעשו לעילוי נשמתו</div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="bg-black p-8 rounded-lg text-white mt-9">
                    {soldier !== null ? (
                        <div className="text-end">
                            <h1 className='text-center mb-2'>{`${soldier.firstName} ${soldier.lastName}`}</h1>
                            <div className="flex justify-center items-center mb-2 h-40 w-40 bg-gray-300">
                                <img className='h-full w-full object-cover' src={soldier.image} alt={`${soldier.firstName} ${soldier.lastName}`} />
                            </div>
                            <p><strong>גיל:</strong> {soldier.age}</p>
                            <p>{soldier.gender}<strong> :מין</strong></p>
                            <p><strong>עיר:</strong> {soldier.city}</p>
                            <p>{new Date(soldier.dateOfDeath).toDateString()}<strong> :תאריך פטירה</strong> </p>
                            <p><strong>מקום הפטירה:</strong> {soldier.placeOfDeath}</p>
                            <p><strong>דרגה:</strong> {soldier.rankName}</p>
                            <p><strong>תפקיד:</strong> {soldier.role}</p>
                            <p><strong>תאור קצר:</strong> {soldier.shortDescription}</p>
                            <p><strong>:תאור ארוך</strong> {soldier.longDescription}</p>
                            <p><strong>:כתובת אתר למאמר</strong> <a target="_blank" href={soldier.urlToArticle}>{soldier.urlToArticle}</a></p>
                            <p> {soldier.classification} <strong>:סיווג</strong> </p>
                            <p><strong>מקום השירות:</strong> {soldier.placeOfService}</p>
                            <p><strong>:מקום הקבורה</strong> {soldier.burialPlace}</p>
                            <p><strong>ילד:</strong> {soldier.isChild ? 'כן' : 'לא'}</p>
                            <p><strong>חוליית חירום:</strong> {soldier.isEmergencySquad ? 'כן' : 'לא'}</p>
                            <p><strong>נהרג בנובה:</strong> {soldier.atNova ? 'כן' : 'לא'}</p>

                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SoldierInfo;
