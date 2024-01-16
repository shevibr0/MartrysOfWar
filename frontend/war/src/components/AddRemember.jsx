import React, { useState } from 'react';
import { addMemory } from '../utils/MemoryUtil';

const AddRemember = () => {
    const [memory, setMemory] = useState({
        IdSoldier: 0, // Replace with the actual soldier ID
        IdUser: 0, // Replace with the actual user ID
        Remember: '', // Your default value or leave it as an empty string
        Date: new Date().toISOString().split('T')[0], // Use only the date part
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMemory((prevMemory) => ({
            ...prevMemory,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const addedMemory = await addMemory(memory);
            console.log('Memory added successfully:', addedMemory);
            // Reset form or perform any other actions
        } catch (error) {
            console.error('Error adding memory:', error);
            // Handle error
        }
    };



    return (
        <div>
            <h2>Add Memory</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Soldier ID:
                    <input
                        type="number"
                        name="IdSoldier"
                        value={memory.IdSoldier}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    User ID:
                    <input type="number" name="IdUser" value={memory.IdUser} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Remember:
                    <textarea name="Remember" value={memory.Remember} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" name="Date" value={memory.Date} onChange={handleChange} />
                </label>
                <br />
                <button type="submit">Add Memory</button>
            </form>
        </div>
    );
};

export default AddRemember;
