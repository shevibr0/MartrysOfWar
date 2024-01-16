import React, { useEffect, useState } from 'react'
import { getRecipy } from '../utils/RecipyUtil';

const Recepies = () => {
    const [recepies, setRecepies] = useState([]);
    const fetchRecepies = async () => {
        try {
            const data = await getRecipy();
            console.log('API Response:', data);
            setRecepies(data);
        } catch (error) {
            // Handle error
        }
    };
    useEffect(() => {

        fetchRecepies();
    }, []);
    return (
        <div>
            {recepies.map((recipe) => (
                <div key={recipe.id}>
                    <h2>Recipe ID: {recipe.id}</h2>
                    <p>Soldier ID: {recipe.idSoldier}</p>
                    <p>User ID: {recipe.idUser}</p>
                    <p>Date: {recipe.date}</p>

                </div>
            ))}
        </div>
    )

}

export default Recepies
