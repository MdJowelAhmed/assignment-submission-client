
import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';


  

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        const fetchInstructors = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/instructors`)
                setInstructors(response.data);

            } catch (error) {
                console.error('Error fetching instructors:', error);
            }
        };

        fetchInstructors();
    }, [])
    console.log(instructors)

    

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-8">Instructor's Corner</h1>
            <Swiper
                spaceBetween={30}
                centeredSlides={false}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                effect="coverflow"
                grabCursor={true}
                pagination={{
                    clickable: true,
                    el: '.swiper-pagination', // Pagination element
                    type: 'bullets', // Bullet pagination
                }}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3.5,
                    },
                }}
                className="w-4/5"
            >
                {instructors.map((instructor, index) => (
                    <SwiperSlide key={index} className="w-full">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 w-full">
                            {/* Infinity animation */}
                            <img src={instructor.imageUrl} alt={instructor.title} className="w-full h-48 object-cover animate-top-down" />
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{instructor.title}</h2>
                                <p className="text-gray-600 mb-4">{instructor.content}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {instructor.tags.map((tag, idx) => (
                                        <span key={idx} className="bg-blue-200 text-blue-800 text-sm font-medium px-2 py-1 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <p><strong>Category:</strong> {instructor.category}</p>
                                <p><strong>Author:</strong> {instructor.author}</p>
                                <p><strong>Created At:</strong> {new Date(instructor.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/* Pagination dots below the cards */}
                <div className="swiper-pagination mt-4"></div>
            </Swiper>
        </div>
    );
};

export default Instructors;
