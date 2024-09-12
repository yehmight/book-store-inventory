


import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// Import required modules
import { Pagination } from 'swiper/modules';

// Import Link from react-router-dom for navigation
import { Link } from 'react-router-dom';

import { FaCartShopping } from 'react-icons/fa6'

const BookCards = ({ headLine, books }) => {
  return (
    <div className='my-16 px-4 lg:px-24'>
      <h2 className='text-5xl text-center font-bold text-black my-5'>{headLine}</h2>
          <div className='mt-12'>
      {/* Swiper carousel */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10} 
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {books.map(book => (
          <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
              <div className='relative p-2'>
                <img src={book.imageUrl} alt={book.bookTitle} className='w-full h-auto object-cover' />
                <div className='absolute top-3 right-3 bg-blue-600 hover:bg-black p-2 rounded'>
                    <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
              </div>
              <div className='text-center mt-2'>
                <h3 className='text-lg font-semibold'>{book.bookTitle}</h3>
                <p>{book.authorName }</p>
                <div>
                    <p>$10.00</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default BookCards;







// import React, { useRef, useState } from 'react';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import './styles.css';



// // import required modules
// import { Pagination } from 'swiper/modules';

// const BookCards = ({headLine, books}) => {
//   return (
//     <div className='my-16 px-4 lg:px-24 '>
//       <h2 className='text-5xl text-center font-bold text-black my-5'>{headLine}</h2>

//       {/* cards */}
//       <div>
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={10}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 4,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 5,
//             spaceBetween: 50,
//           },
//         }}
//         modules={[Pagination]}
//         className="mySwiper w-full h-full"
//       >
//             {
//                 books.map(book => <SwiperSlide key={book._id}>
//                     <link to="/">
//                         <div>
//                             <img src={book.imageUrl} alt='' />
//                         </div>
//                         <div>
//                             <h3>{book.bookTitle}</h3>
//                         </div>
//                     </link>
//                 </SwiperSlide>)
//             }
//       </Swiper>
//       </div>
//     </div>
//   )
// }

// export default BookCards