import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Material = () => {
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
    }, [])
    const animateTitle = (title) => {
        return title.split('').map((char, index) => (
            <span key={index} style={{ animationDelay: `${0.1 * index}s` }}>
                {char}
            </span>
        ));
    };

    return (
        <div className="container max-w-xl p-6  mx-auto  lg:px-8 lg:max-w-7xl">
            <div className=''>
                <h1 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900 mb-5">Study Materials</h1>
                <p className="max-w-3xl mx-auto  text-xl text-center dark:text-gray-600 mb-10">Study Materials include guides, notes, past exam questions, video tutorials, research papers, and links to textbooks and e-books, along with practice sheets to aid learning and exam preparation.</p>
            </div>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5">
                {materials.map(material => (
                    <div key={material._id} className="bg-white p-4 rounded-lg shadow-md">
                        <img
                            src={material.image}
                            alt={material.title}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold">{material.title}</h2>
                        <p className="text-gray-700 mt-2">{material.description}</p>
                        <div className='flex justify-between'>
                            <p className="text-gray-500 mt-2">Published: {new Date(material.createdAt).toLocaleDateString()}</p>
                            <p className="text-gray-500 mt-2 ">Category: {material.category}</p>
                        </div>

                        <p className="text-blue-500 mt-2">Tags: {material.tags.join(', ')}</p>


                        <div className='flex justify-between items-center'>
                            <p className="text-gray-500 mt-2">Author: {material.author}</p>
                            <a
                                href={material.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 btn btn-secondary text-white mt-4 "
                            >
                                Learn More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Material;