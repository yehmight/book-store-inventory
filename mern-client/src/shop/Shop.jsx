// import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react'
import { Card } from "flowbite-react";

const Shop = () => {
  const [books, setBooks] =useState([]);

  useEffect (() => {
    fetch("https://book-store-inventory.onrender.com/all.books").then(res => res.json()).then(data => setBooks(data));
  },[])
  return (
    <div className='mt-28 px-4 lg:px24'>
      <h2 className='text-5xl font-bold text-center'>All Book Are Here</h2>
      {/* <div className='grid lg:grid-col-4 sm:grid-col-2 md:grid-col-3 grid-col-1'> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-12'>
        {
          books.map(book =>  <Card
            className="max-w-sm">
              <img src={book.imageUrl} alt='' className='h-95'/>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.bookTitle}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
            <button className='bg-blue-700 font-semibold text-white py-2 rounded'>Buy Now</button>
          </Card>)
        }
      </div>
    </div>
  )
}

export default Shop;
