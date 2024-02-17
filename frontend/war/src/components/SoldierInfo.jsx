import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSoldiersById } from '../utils/SoldierUtil'; // Import the getSoldiersById function

const SoldierInfo = () => {
    const { id } = useParams(); // Assuming you're using React Router's useParams hook
    const [soldier, setSoldier] = useState(null); // State to store the soldier's data

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

    if (!soldier) {
        return <p>Loading...</p>;
    }

    return (
        <div className="soldier-info">
            <h1>{`${soldier.first_name} ${soldier.last_name}`}</h1>
            <img src={soldier.image} alt={`${soldier.first_name} ${soldier.last_name}`} />
            <p><strong>Age:</strong> {soldier.age}</p>
            <p><strong>Gender:</strong> {soldier.gender}</p>
            <p><strong>City:</strong> {soldier.city}</p>
            <p><strong>Date of Death:</strong> {soldier.date_of_death}</p>
            <p><strong>Place of Death:</strong> {soldier.place_of_death}</p>
            <p><strong>Rank:</strong> {soldier.rank_name}</p>
            <p><strong>Role:</strong> {soldier.role}</p>
            <p><strong>Short Description:</strong> {soldier.short_description}</p>
            <p><strong>Long Description:</strong> {soldier.long_description}</p>
            <p><strong>URL to Article:</strong> <a href={soldier.url_to_article}>{soldier.url_to_article}</a></p>
            {/* Add more details as needed */}
        </div>
    );
};

export default SoldierInfo;
