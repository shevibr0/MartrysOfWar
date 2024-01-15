
import React, { useEffect, useState } from 'react';
import { getSoldiers } from '../utils/SoldierUtil';
import SoldierSearch from './SoldierSearch';

const Soldiers = () => {
    const [soldiers, setSoldiers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 30;
    const totalCount = 0;


    const fetchSoldiers = async (page) => {
        try {
            const data = await getSoldiers(page);
            console.log('API Response:', data);
            setSoldiers(data);
            setCurrentPage(page);
        } catch (error) {
            // Handle error
        }
    };

    useEffect(() => {

        fetchSoldiers(currentPage);
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <div className="soldiers-page">
            <ul>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">לזכרם של נופלי חיל האוויר</h2>
                <div className="soldiers-container">
                    {soldiers.map((soldier) => (
                        <div key={soldier.id} className="soldier-square">
                            <img src={soldier.image} alt={`${soldier.first_name} ${soldier.last_name}`} />
                            <h3>{`${soldier.first_name} ${soldier.last_name}`}</h3>
                            <p>{`גיל: ${soldier.age}`}</p>
                            <p>{`עיר: ${soldier.city}`}</p>
                            {/* Add more details as needed */}
                        </div>
                    ))}
                </div>
            </ul>

            <div>
                <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous Page
                </button>
                <span>Page {currentPage}</span>
                <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage * pageSize >= totalCount}>
                    Next Page
                </button>
            </div>
        </div>
    );
};

export default Soldiers;