import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// react icons
import{FaStar} from "react-icons/fa6"
import { Avatar } from "flowbite-react";
import proPic from "../assets/user.jpeg"
import proPic1 from "../assets/ijan.png"
import proPic2 from "../assets/image2.jpeg"
import proPic3 from "../assets/image1.jpg"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
const Review = () => {
  return (
    <div className='my-12 px-4 lg:px-24'>
        <h2 className='text-5xl font-bold text-center mb-10 leading-snug '> Our Customers</h2>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'> 
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate pulvinar gravida.
                         Praesent eu urna eget nibh placerat imperdiet. Quisque euismod efficitur enim eu 
                         condimentum. Maecenas sit amet gravida mi. Praesent ut aliquet justo, sit amet 
                         viverra quam. Curabitur cursus purus nec purus ullamcorper sagittis. </p>
                         
                            <Avatar img={proPic} alt="Avatar of Jese" rounded className='w-10 mb-4 ' />
                            <h5 className='text-lg font-medium'>Adeyemi Gabriel</h5>
                            <p className='text-base'>CEO WORLD TECH</p>
                        
                         
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate pulvinar gravida.
                         Praesent eu urna eget nibh placerat imperdiet. Quisque euismod efficitur enim eu 
                         condimentum. Maecenas sit amet gravida mi. Praesent ut aliquet justo, sit amet 
                         viverra quam. Curabitur cursus purus nec purus ullamcorper sagittis. </p>
                         
                            <Avatar img={proPic1} alt="Avatar of Jese" rounded className='w-10 mb-4 ' />
                            <h5 className='text-lg font-medium'>Ijan Africa</h5>
                            <p className='text-base'> Tech Educational institution in Nigeria</p>
                        
                         
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate pulvinar gravida.
                         Praesent eu urna eget nibh placerat imperdiet. Quisque euismod efficitur enim eu 
                         condimentum. Maecenas sit amet gravida mi. Praesent ut aliquet justo, sit amet 
                         viverra quam. Curabitur cursus purus nec purus ullamcorper sagittis. </p>
                         
                            <Avatar img={proPic2} alt="Avatar of Jese" rounded className='w-10 mb-4 ' />
                            <h5 className='text-lg font-medium'>MR James</h5>
                            <p className='text-base'>CEO WORLD TECH</p>
                        
                         
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className='shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
            <div className='space-y-6'>
                <div className='text-amber-500 flex gap-2'>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                {/* text */}
                <div className='mt-7'>
                    <p className='mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate pulvinar gravida.
                         Praesent eu urna eget nibh placerat imperdiet. Quisque euismod efficitur enim eu 
                         condimentum. Maecenas sit amet gravida mi. Praesent ut aliquet justo, sit amet 
                         viverra quam. Curabitur cursus purus nec purus ullamcorper sagittis. </p>
                         
                            <Avatar img={proPic3} alt="Avatar of Jese" rounded className='w-10 mb-4 ' />
                            <h5 className='text-lg font-medium'>Janet Mark</h5>
                            <p className='text-base'>Data Specialist</p>
                        
                         
                </div>
            </div>
        </SwiperSlide>
        
        
      </Swiper>
        </div>
    </div>
  )
}

export default Review
