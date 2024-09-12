import React from 'react'
import FavBookImg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='px-2 lg:px-24 my-20 flex flex-col md:flex-row justify-betwwen items-center gap-12'>
        <div className='md:w-1/2'>
            <img src={FavBookImg} alt='' className='rounded md:w-10/12' />
        </div>
        <div className='md:w-1/2 space-y-6'>
                <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'> Find Your Favorite <span className='text-blue-700'>Book Here !</span></h2>
                <p className='mb-10 text-lg md:w-5/6'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce velit lorem, malesuada in elit vel, ornare euismod nibh. Mauris faucibus 
                    aliquam eros in pretium. Ut nec dapibus mauris. Etiam ut est hendrerit, vehicula justo a, imperdiet lacus. Morbi aliquet posuere feugiat. 
                    Nunc vitae justo in enim convallis molestie convallis sed dolor.</p>
                    {/* Stats */}
                    <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                        <div>
                            <h3 className='text-3xl font-bold'>800+</h3>
                            <p className='text-base'>Book Listing</p>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold'>550+</h3>
                            <p className='text-base'>Register Users</p>
                        </div>
                        <div>
                            <h3 className='text-3xl font-bold'>1200+</h3>
                            <p className='text-base'>Pdf Downloads</p>
                        </div>
                    </div>
                    <Link to="/shop" className='mt-8 block'><button className='bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black
                    transition-all duration-300'>Explore More </button> </Link>
        </div>
        
      
    </div>
  )
}

export default FavBook
