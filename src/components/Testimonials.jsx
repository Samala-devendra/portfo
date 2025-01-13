import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {

    const testimonials = [
        {
            id: 1,
            name: "Adit",
            rating: 5,
            text: "The product exceeded my expectations! It's incredibly intuitive and easy to use. I highly recommend it to anyone looking for a reliable solution.",
            location: "New York, USA",
            date: "2024-12-15",
            occupation: "Software Engineer"
        },
        {
            id: 2,
            name: "Fayaz",
            rating: 4,
            text: "Great service and excellent customer support. It really helped streamline my workflow, though there's still room for improvement in the mobile app.",
            location: "London, UK",
            date: "2024-11-10",
            occupation: "Product Manager"
        },
        {
            id: 3,
            name: "Santhosh",
            rating: 5,
            text: "This tool has transformed the way I design. It's seamless, user-friendly, and the collaboration features are fantastic. I can't imagine working without it now!",
            location: "Bangalore, India",
            date: "2024-10-20",
            occupation: "UX Designer"
        },
        {
            id: 4,
            name: "Karthik",
            rating: 5,
            text: "I’ve seen a significant increase in my productivity after using this. The analytics are clear and actionable, making it easy to optimize my marketing strategies.",
            location: "Mumbai, India",
            date: "2024-09-05",
            occupation: "Marketing Specialist"
        },
        {
            id: 5,
            name: "SDR",
            rating: 4,
            text: "The platform is impressive with its advanced data analysis tools. However, I feel the learning curve is a bit steep for new users. Still, it’s worth the investment.",
            location: "San Francisco, USA",
            date: "2024-08-22",
            occupation: "Data Scientist"
        }
    ]
    

    return (
        <div id='testimonials' className='py-10 bg-gray-100 relative' >
            <h1 className='text-center text-2xl lg:text-4xl font-bold'>What our Customer Say</h1>
            <div className='max-w-6xl mx-auto py-10 px-5'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#EF4444",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "10px",
                        "--swiper-pagination-bullet-horizontal-gap": "6px",
                    }}
                    modules={[Pagination, Autoplay]}
                    loop={true}
                    speed={600}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        320: { slidesPerView: 1 },
                        480: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{
                        el: ".swiper-pagination",
                        type: "bullets",
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {testimonials.map((item) => {
                        return <SwiperSlide key={item.id}>
                            <div className='border border-gray-400 shadow-md shadow-red-500 rounded-lg flex flex-col p-4'>
                                {item.rating === 4 ? (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star />
                                    </div>
                                ) : (
                                    <div className='flex'>
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                        <Star fill='true' />
                                    </div>
                                )}
                                <p className='py-3'>{item.text}</p>
                                <div className='flex justify-between items-center'>
                                    <div>
                                        <h3 className='font-semibold text-red-500 text-lg'>{item.name}</h3>
                                        <p className='text-sm mt-1'>CEO, Webelite Builders</p>
                                    </div>
                                    <Quote className='text-red-400'/>
                                </div>
                            </div>
                        </SwiperSlide>
                    })}
                    <div className='swiper-pagination my-10 gap-1 relative'></div>

                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials
