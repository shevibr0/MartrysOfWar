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
        console.log(newPage);
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
        <div className="soldiers-page">
            <ul>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">לזכרם של נופלי חיל האוויר</h2>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        // onChange={handleSearch}
                        onChange={handleSearchValue}
                    />
                </div>                <div className="soldiers-container">
                    {searchMessage == "" ? solidersArr.map((soldier) => (
                        <div key={soldier.id} className="soldier-square">
                            <img src={soldier.image} alt={`${soldier.firstName} ${soldier.lastName}`} />
                            <h3>{`${soldier.firstName} ${soldier.lastName}`}</h3>
                            <p>{`גיל: ${soldier.age}`}</p>
                            <p>{`עיר: ${soldier.city}`}</p>
                            {/* Add more details as needed */}
                            <button onClick={() => nav(`/soldierInfo/${soldier.id}`)}  >לפרטים נוספים</button>
                        </div>
                    )) : <span>{searchMessage}</span>}
                </div>
            </ul >

            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1 && !isPrev}>
                    Previous Page
                </button>
                <span>Page {currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage == count && !isNext || !isNext}
                // disabled={currentPage * pageSize >= totalCount}
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