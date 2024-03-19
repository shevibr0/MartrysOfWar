import React, { useEffect, useState } from 'react';
import { GetCountSoliders, getSoldiers, globalSearchSoldiers } from '../utils/SoldierUtil';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchSoliders, setSoliders } from '../features/soliderSlice';


const Soldiers = () => {
    const nav = useNavigate()
    const soldiers = useSelector(state => state.solider.soliders);
    const searchSoldiers = useSelector(state => state.solider.searchSoliders);
    const solidersArr = searchSoldiers.length > 0 ? searchSoldiers : soldiers;
    // const [soldiers, setSoldiers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [count, setCount] = useState(1);
    const [isNext, setIsNext] = useState(false);
    const [isPrev, setIsPrev] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchMessage, setSearchMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    // const pageSize = 30;
    // const totalCount = 0;
    const dispatch = useDispatch();

    const fetchSoldiers = async (page) => {
        try {
            const data = await getSoldiers(page);
            console.log('API Response:', data);
            // setSoldiers(data);
            dispatch(setSoliders(data));
        } catch (error) {
            // setCurrentPage(page);
            // Handle error
        }
    };

    useEffect(() => {
        if (count == 1 && !isNext && !isPrev) {
            GetCountSoliders().then(res => {
                setCount(res);
            })
        }
        if (isNext || isPrev) {
            globalSearchSoldiers(searchQuery, currentPage).then(res => {
                if (res.length > 30) {
                    setIsNext(true);
                    let a = res;
                    a.splice(res.length - 1, 1);
                    dispatch(setSearchSoliders(a));
                }
                else {
                    setIsNext(false);
                    dispatch(setSearchSoliders(res));
                }
            });
            if (currentPage > 1) {
                setIsPrev(true);
            }
            else {
                setIsPrev(false);
            }
        }
        else {
            fetchSoldiers(currentPage);
        }

    }, [currentPage]);

    const handlePageChange = (newPage) => {
        console.log("ffffffff", newPage);
        setCurrentPage(newPage);
    };


    const handleSearchValue = (e) => {
        let searchValue = e.target.value;
        setSearchQuery(searchValue);
        setSearchMessage("");
        if (searchValue != "") {
            globalSearchSoldiers(searchValue, currentPage).then(res => {
                if (res.length > 30) {
                    setIsNext(true);
                    let a = res;
                    a.splice(res.length - 1, 1);
                    dispatch(setSearchSoliders(a));
                }
                else {
                    setIsNext(false);
                    dispatch(setSearchSoliders(res));
                    if (res.length == 0) {
                        setSearchMessage("no result :(");
                    }
                }
            });
            if (currentPage > 1) {
                setIsPrev(true);
            }
            else {
                setIsPrev(false);
            }
        }
        else {
            setIsNext(false);
            setIsPrev(false);
            setCurrentPage(1);
            dispatch(setSearchSoliders([]));
        }
    }

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
            <div className="">
                <div className=''>
                    <h2 className=" text-black text-4xl font-bold font-['Alef'] mb-6 mt-6 text-center">לזכרם של הנופלים במלחמת חרבות ברזל</h2>
                </div>
                <div className="text-center mb-4">
                    <input
                        type=""
                        placeholder="חיפוש"
                        value={searchQuery}
                        onChange={handleSearchValue}
                        className="border border-black px-4 py-2 rounded-md" style={{ direction: 'rtl' }}
                    />
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-4 gap-4 ">
                    {searchMessage === "" ? solidersArr.map((soldier) => (
                        <div key={soldier.id} className="text-center">
                            <img className="h-64 w-64 object-cover" src={soldier.image} alt={`${soldier.firstName} ${soldier.lastName}`} />
                            <h3>{`${soldier.firstName} ${soldier.lastName}`}</h3>
                            <p>{`גיל: ${soldier.age}`}</p>
                            <p>{`עיר: ${soldier.city}`}</p>
                            <button className="font-semibold mb-2 mt-4 border border-black text-black p-2 rounded-md hover:opacity-80  hover:text-black hover:font-extrabold hover:border-black" onClick={() => nav(`/soldierInfo/${soldier.id}`)}>לפרטים נוספים</button>
                        </div>
                    )) : <span>{searchMessage}</span>}
                </div>
            </div>

            <div className="flex justify-center items-center mt-8">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1 && !isPrev}
                    className="px-4 py-1 bg-black text-white rounded-md mr-4"
                >
                    Previous Page
                </button>
                <span className="text-lg font-bold">Page {currentPage}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage == count && !isNext || !isNext}
                    className="px-4 py-1 bg-black text-white rounded-md ml-4"
                >
                    Next Page
                </button>
            </div>
        </div >

    );
};

export default Soldiers;


// {soldiers.map((soldier) => (
//     <div key={soldier.id} className="soldier-square">
//         <img src={soldier.image} alt={`${soldier.first_name} ${soldier.last_name}`} />
//         <h3>{`${soldier.first_name} ${soldier.last_name}`}</h3>
//         <p>{`גיל: ${soldier.age}`}</p>
//         <p>{`עיר: ${soldier.city}`}</p>
//         {/* Add more details as needed */}
//         <button onClick={() => nav(`/soldierInfo/${soldier.id}`)}  >לפרטים נוספים</button>
//     </div>
// ))}