import React, { useState } from 'react';
import { addPicture } from '../utils/PictureUtil';

const AddPicture = () => {
    const [formData, setFormData] = useState({
        idSoldier: '',
        idUser: '',
        Url: '',
        Date: '',
    });
    const [image, setImage] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // You can perform additional validation and handling here
        if (!image) {
            alert('Please select an image');
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('IdSoldier', formData.idSoldier);
        formDataToSend.append('IdUser', formData.idUser);
        formDataToSend.append('Url', formData.Url); // Match the case with your server model
        formDataToSend.append('Date', formData.Date); // Match the case with your server model
        formDataToSend.append('Image', image); // Match the case with your server model

        try {
            // Send formDataToSend to your server using an API call (e.g., fetch or axios)
            const response = await addPicture(formDataToSend);

            if (!response.ok) {
                throw new Error('Image upload failed');
            }

            // Assuming your server responds with the data
            const responseData = response.data;

            // For demonstration purposes, you can log the data
            console.log('Data to send:', Object.fromEntries(formDataToSend));
            console.log('Picture added successfully:', responseData);
        } catch (error) {
            console.error('Error adding picture:', error);
            // Handle error
        }
    };

    return (
        <div>
            <h1>Add Image</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Soldier ID:
                    <input type="number" name="idSoldier" value={formData.idSoldier} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    User ID:
                    <input type="number" name="idUser" value={formData.idUser} onChange={handleChange} required />
                </label>
                <br />

                <label>
                    Date:
                    <input type="date" name="Date" value={formData.Date} onChange={handleChange} required />
                </label>
                <br />
                <label>
                    Image URL:
                    <input type="text" name="Url" value={formData.Url} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Image:
                    <input type="file" accept="image/*" onChange={handleImageChange} required />
                </label>
                <br />
                <button type="submit">Add Image</button>
            </form>
        </div>
    );
};

export default AddPicture;
