// SoldierSearch.js

import React, { useState } from 'react';
import { globalSearchSoldiers } from '../utils/SoldierUtil';

const SoldierSearch = ({ onSearchResults, allSoldiers }) => {
    const [soldierName, setSoldierName] = useState('');
    const [searchCriteria, setSearchCriteria] = useState('name');
    const [selectedSettlement, setSelectedSettlement] = useState('');

    const handleSearch = () => {
        let filteredSoldiers = [...allSoldiers];

        // Apply search by name
        if (searchCriteria === 'name') {
            filteredSoldiers = filteredSoldiers.filter((soldier) =>
                `${soldier.first_name} ${soldier.last_name}`.toLowerCase().includes(soldierName.toLowerCase())
            );
        }

        // Apply search by settlement
        if (selectedSettlement) {
            filteredSoldiers = filteredSoldiers.filter((soldier) =>
                soldier.city.toLowerCase().includes(selectedSettlement.toLowerCase())
            );
        }

        onSearchResults(filteredSoldiers);
    };

    const handleChange = (e) => {
        setSoldierName(e.target.value);
        handleSearch(); // Trigger search on every change
    };

    const handleSearchCriteriaChange = (criteria) => {
        setSearchCriteria(criteria);
    };

    const handleSettlementChange = (e) => {
        setSelectedSettlement(e.target.value);
        handleSearch();
    };

    const handleSearchValue = (e) => {
        let searchValue = e.target.value;
        if (searchValue != "") {
            globalSearchSoldiers(searchValue).then(res => {

            });
        }
        else {

        }
    }

    return (
        <div style={{ direction: 'rtl' }}>
            <h2>חיפוש</h2>
            <div>
                <label htmlFor="soldierName" style={{ direction: 'rtl' }}>
                    חיפוש
                </label>
                <input
                    type="text"
                    id="soldierName"
                    placeholder="Soldier's Name"
                    value={soldierName}
                    // onChange={handleChange}
                    onChange={handleSearchValue}
                />
            </div>
            <div>
                <label style={{ marginRight: '10px' }}>חיפוש לפי:</label>
                <input
                    type="radio"
                    id="name"
                    name="searchCriteria"
                    value="name"
                    checked={searchCriteria === 'name'}
                    onChange={() => handleSearchCriteriaChange('name')}
                />
                <label htmlFor="name" style={{ marginRight: '10px' }}>שם</label>

                <input
                    type="radio"
                    id="settlement"
                    name="searchCriteria"
                    value="settlement"
                    checked={searchCriteria === 'settlement'}
                    onChange={() => handleSearchCriteriaChange('settlement')}
                />
                <label htmlFor="settlement">מקום מגורים</label>
            </div>
            {searchCriteria === 'settlement' && (
                <div>
                    <label htmlFor="settlementDropdown" style={{ marginRight: '10px' }}>בחר מקום מגורים:</label>
                    <select
                        id="settlementDropdown"
                        value={selectedSettlement}
                        onChange={handleSettlementChange}
                    >
                        <option value="">הכל</option>
                        {/* Add options for all settlements */}
                    </select>
                </div>
            )}
        </div>
    );
};

export default SoldierSearch;
