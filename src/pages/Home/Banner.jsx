import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCube, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

const Banner = () => {
    return (
        <div>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                cubeEffect={{
                    shadow: true,

                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[500px] w-full  rounded-2xl' src="https://img.freepik.com/premium-photo/programming-html-coding-technology-icon_53876-121882.jpg?w=900" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-4xl font-semibold font-poppins max-w-md pt-10 pl-12 pb-3 text-amber-200'>HTML: Building blocks for web page structure and content.</h2>

                        <p className='text-sm font-poppins max-w-lg pl-12'>HTML, the foundation of web pages, structures content with tags, enabling creation of diverse layouts and interactivity, crucial in modern digital communication and design.</p>

                        <div className='flex justify-center pt-10'>
                            <button className='btn text-center btn-secondary'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 2 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[500px] w-full  rounded-2xl' src="https://img.freepik.com/premium-photo/smiling-asian-man-working-laptop-writing_116547-19779.jpg?w=826" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-4xl font-semibold font-poppins max-w-md pt-10 pl-12 pb-3 text-amber-200'>HTML: Building blocks for web page structure and content.</h2>

                        <p className='text-sm font-poppins max-w-lg pl-12'>HTML, the foundation of web pages, structures content with tags, enabling creation of diverse layouts and interactivity, crucial in modern digital communication and design.</p>

                        <div className='flex justify-center pt-10'>
                            <button className='btn text-center btn-secondary'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 3 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[500px] w-full  rounded-2xl' src="https://img.freepik.com/free-photo/trans-person-working-office-with-colleagues_23-2149286975.jpg?t=st=1715280001~exp=1715283601~hmac=f7ae577b0506659ea4ae9070d53abba0cdca96ff33d697371772e91678bebd0b&w=826" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-4xl font-semibold font-poppins max-w-md pt-10 pl-12 pb-3 text-amber-200'>HTML: Building blocks for web page structure and content.</h2>

                        <p className='text-sm font-poppins max-w-lg pl-12'>HTML, the foundation of web pages, structures content with tags, enabling creation of diverse layouts and interactivity, crucial in modern digital communication and design.</p>

                        <div className='flex justify-center pt-10'>
                            <button className='btn text-center btn-secondary'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                {/* 4 */}
                <SwiperSlide>
                    <div className='relative'>
                        <img className='h-[500px] w-full  rounded-2xl' src="https://img.freepik.com/premium-photo/student-studying-hd-8k-wallpaper-stock-photographic-image_1066384-1382.jpg?w=996" />
                    </div>
                    <div className='absolute top-0 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full  rounded-2xl'>
                        <h2 className='text-4xl font-semibold font-poppins max-w-md pt-10 pl-20 pb-3 text-amber-200'>HTML: Building blocks for web page structure and content.</h2>

                        <p className='text-sm font-poppins max-w-lg pl-20'>HTML, the foundation of web pages, structures content with tags, enabling creation of diverse layouts and interactivity, crucial in modern digital communication and design.</p>

                        <div className='flex justify-center pt-10'>
                            <button className='btn text-center btn-secondary'>Explore more</button>
                        </div>
                    </div>
                </SwiperSlide>
                
               
              
            </Swiper>
        </div>
    );
};

export default Banner;