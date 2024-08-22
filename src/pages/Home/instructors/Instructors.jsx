
import axios from 'axios';
import React, { useRef, useState, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Autoplay } from 'swiper/modules';




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
        <div className="container mx-auto p-4 pl-5">
            <div>
                <h1  className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900 mb-5">Instructors Corner</h1>
                <p className="max-w-3xl mx-auto  text-center mb-20 dark:text-gray-900 text-[#15143990] ">Instructors Corner is a section where instructors can share tips, guidance, and additional resources for students. It serves as a platform for instructors to provide valuable information that aids in exam preparation, project management, and enhancing the overall learning experience for students.</p>
            </div>
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
                className="w-full "
            >
                {instructors.map((instructor, index) => (
                    <SwiperSlide key={index} className="w-full ">
                        <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition duration-300 hover:scale-105 w-full mb-5 ml-5">
                            {/* Infinity animation */}
                            <div className='px-10 pt-3'>
                                <img src={instructor.imageUrl} alt={instructor.title} className="w-full h-48 object-cover animate-top-down rounded-full mb-5" />
                                <p className='text-center'><strong>{instructor.author}</strong> </p>
                            </div>
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">{instructor.title}</h2>
                                <p className="text-[#15143990] mb-4 text-sm">{instructor.content.slice(0, 110)}</p>
                                <p><strong>Lecture:</strong> {instructor.category}</p>
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
