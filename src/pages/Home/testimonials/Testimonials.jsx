
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import './Reviews.css';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="container mx-auto p-4 mb-10">
            <div>
                <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-blue-500 mb-5">Users Reviews</h2>
                <p className="max-w-3xl mx-auto text-center dark:text-gray-600 mb-10 ">User reviews provide valuable insights into products or services, helping others make informed decisions. They reflect real experiences, highlight pros and cons, and build trust. Reviews also guide businesses in improving their offerings based on customer feedback.</p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={{ clickable: true }}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="review-card p-6 pt-20 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 lg:relative">
                            <img src={review.profile_pic} alt={review.user_name} className="w-20 h-20 rounded-full lg:-ml-20 lg:-mt-20 mx-auto lg:absolute" />
                            <h3 className="text-xl font-semibold text-center">{review.user_name}</h3>
                            <p className="text-center text-gray-500">{review.country}</p>
                            <div className="flex justify-center my-2">
                                <Rating
                                    value={review.rating} // Dynamically set rating
                                    readonly
                                    style={{ maxWidth: 180 }}

                                />
                            </div>
                            <p className=" text-center text-sm">{review.comment}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Testimonials;