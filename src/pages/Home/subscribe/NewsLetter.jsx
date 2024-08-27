import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Newsletter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/subscribe`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast.success('Subscription successful!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                const result = await response.json();
                toast.error(result.error || 'Failed to subscribe!');
            }
        } catch (error) {
            console.error('Error:', error);
            toast.error('An error occurred.');
        }
    };

    return (
        <div className='bg-gray-100 dark:bg-gray-800 p-6 rounded-lg'>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900 mb-12">NewsLetter</h2>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="md:w-1/2">
                    <img src="https://blog.mystrika.com/wp-content/uploads/sites/8/2023/12/write_Newsletter_in_gmail_in_background_using_-3.jpg" alt="Newsletter" className="rounded-lg shadow-md" />
                </div>
                <div className="md:w-1/2 mt-6 md:mt-0 md:ml-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-500"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-500">
                            Subscribe
                        </button>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Newsletter;
