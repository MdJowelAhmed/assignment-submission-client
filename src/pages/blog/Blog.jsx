import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    const [materials, setMaterials] = useState([]);

    useEffect(() => {
        const fetchMaterials = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/study`)
                setMaterials(response.data);
            } catch (error) {
                console.error('Error fetching materials:', error);
            }
        };

        fetchMaterials();
    }, []);
    return (
        <div className="container max-w-xl p-6 mx-auto lg:px-8 lg:max-w-7xl">
            <Helmet>
                <title>Assignment | Blogs </title>
            </Helmet>
        <div className='text-center mb-10'>
            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-blue-500  mb-5">Study Materials</h1>
            <p className="max-w-3xl mx-auto dark:text-gray-600">Study Materials include guides, notes, past exam questions, video tutorials, research papers, and links to textbooks and e-books, along with practice sheets to aid learning and exam preparation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {materials.map(material => (
                <motion.div
                    key={material._id}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-800"
                >
                    <motion.img
                        src={material.image}
                        alt={material.title}
                        className="w-full h-64 object-cover"
                        whileHover={{ scale: 1.1 }}
                    />
                    <div className="p-6">
                        <h2 className="text-2xl font-bold mb-2 dark:text-white">{material.title}</h2>
                        <p className="text-gray-700 dark:text-gray-300">{material.description}</p>
                        <div className='flex justify-between items-center mt-4'>
                            <p className="text-gray-500">Published: {new Date(material.createdAt).toLocaleDateString()}</p>
                            <p className="text-gray-500">Category: {material.category}</p>
                        </div>
                        <p className="text-blue-500 mt-2">Tags: {material.tags.join(', ')}</p>
                        <div className='flex justify-between items-center mt-4'>
                            <p className="text-gray-500">Author: {material.author}</p>
                            <a
                                href={material.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-secondary text-white"
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
    );
};

export default Blog;