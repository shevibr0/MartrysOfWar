import React, { useEffect, useState } from 'react';
import { getMemories } from '../utils/MemoryUtil';

const Remembers = () => {
    const [remembers, setRemembers] = useState([]);

    useEffect(() => {
        // Fetch remembers data from your API
        fetchRemembers();
    }, []);

    const fetchRemembers = async () => {
        try {
            const data = await getMemories(); // Implement the getRemembers function
            setRemembers(data);
            console.log('Remembers data:', data);
        } catch (error) {
            console.error('Error fetching remembers:', error);
            // Handle error
        }
    };


    return (
        <div>
            <h2>Remembers</h2>
            <ul>
                {remembers.map((remember) => (
                    <li key={remember.id}>
                        <strong>Soldier ID:</strong> {remember.idSoldier},{' '}
                        <strong>User ID:</strong> {remember.idUser},{' '}
                        <strong>Remember:</strong> {remember.remember},{' '}
                        <strong>Date:</strong> {new Date(remember.date).toLocaleDateString()}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Remembers;