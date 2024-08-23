import axios from 'axios';
import React, { useState } from 'react';

const Newsletter = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/subscribe`, formData);

            if (response.status === 201) {
                setMessage('Subscribed successfully!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setMessage(response.data.message);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='min-h-screen dark:bg-gray-900 text-white p-5 shadow-2xl'>
            <h2 className="text-3xl font-bold tracking-tight text-center text-blue-500 mt-5 sm:text-5xl mb-10">NewsLetter</h2>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="md:w-1/2 px-5">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgc6-U0gTFzucpD3UyK4dtdAwSK4tmgcRr9j9CK7TGMslesPBZwnjf2-_qUhdJGN4sPQ&usqp=CAU"
                        alt="Newsletter"
                        className="w-full rounded-lg transition-transform duration-300 transform hover:scale-105"
                    />
                </div>
                <div className="md:w-1/2 px-5">
                    <h2 className="text-3xl font-bold mb-5">Subscribe to our Newsletter</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your name"
                            className="p-3 shadow-lg border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="p-3 shadow-lg border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            placeholder="Enter your message"
                            className="p-3 shadow-lg border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                        />
                        <button
                            type="submit"
                            className="p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                            Subscribe
                        </button>
                        {message && <p className="text-center text-red-500">{message}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
