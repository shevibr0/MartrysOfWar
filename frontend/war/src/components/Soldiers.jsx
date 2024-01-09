// Soldiers.js

import React, { useEffect, useState } from 'react';
import { getSoldiers } from '../utils/SoldierUtil';
import SoldierSearch from './SoldierSearch';


const Soldiers = () => {
    const [soldiers, setSoldiers] = useState([]);
    const [filteredSoldiers, setFilteredSoldiers] = useState([]);

    useEffect(() => {
        // Fetch soldiers when the component mounts
        getSoldiers().then(res => {
            setSoldiers(res);
            setFilteredSoldiers(res); // Initialize filteredSoldiers with all soldiers
        });
    }, []);

    const handleSearchResults = (searchResults) => {
        setFilteredSoldiers(searchResults);
    };

    return (
        <div className="soldiers-page">
            <SoldierSearch onSearchResults={handleSearchResults} allSoldiers={soldiers} />
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">לזכרם של נופלי חיל האוויר</h2>
            <div className="soldiers-container">
                {filteredSoldiers.map(soldier => (
                    <div key={soldier.id} className="soldier-square">
                        <img src={soldier.image} alt={`${soldier.first_name} ${soldier.last_name}`} />
                        <h3>{`${soldier.first_name} ${soldier.last_name}`}</h3>
                        <p>{`גיל: ${soldier.age}`}</p>
                        <p>{`עיר: ${soldier.city}`}</p>
                        {/* Add more details as needed */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Soldiers;