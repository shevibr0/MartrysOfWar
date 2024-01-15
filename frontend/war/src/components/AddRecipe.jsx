import React, { useState } from 'react';

import { addRecipy } from '../utils/RecipyUtil';

const AddRecipe = () => {
    const [recipe, setRecipe] = useState({
        IdSoldier: 0,
        IdUser: 0,
        Date: new Date().toISOString().split('T')[0], // Use only the date part
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (recipe.IdSoldier <= 0 || recipe.IdUser <= 0 || !recipe.Date) {
            setError('Please fill in all fields.');
            return;
        }

        setIsLoading(true);

        try {
            const addedRecipe = await addRecipy(recipe);
            console.log('Recipe added successfully:', addedRecipe);
            // Reset form and provide feedback
            setRecipe({
                IdSoldier: 0,
                IdUser: 0,
                Date: new Date().toISOString().split('T')[0],
            });
            setError('');
        } catch (error) {
            console.error('Error adding recipe:', error);
            setError('Error adding recipe. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h2>Add Recipe</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                {/* Your form inputs go here, updating the state accordingly */}
                <label>
                    Soldier ID:
                    <input
                        type="number"
                        name="IdSoldier"
                        value={recipe.IdSoldier}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    User ID:
                    <input type="number" name="IdUser" value={recipe.IdUser} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Date:
                    <input type="date" name="Date" value={recipe.Date} onChange={handleChange} />
                </label>
                <br />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add Recipe'}
                </button>
            </form>
        </div>
    );
};

export default AddRecipe;
