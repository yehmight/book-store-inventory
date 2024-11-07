import React, { useState } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';

const UploadBook = () => {
  const bookCategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction", 
    "Fantasy", "Horror", "Bibliography", "Autobiography", "History", 
    "Memoir", "Romance", "Self Help", "Children's Books", "Business", 
    "Travel", "Religion", "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleBookSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const bookObj = {
      bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
    };

    try {
      const response = await fetch("https://book-store-inventory.onrender.com/upload.book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookObj),
      });

      if (!response.ok) {
        throw new Error(`Server responded with status ${response.status}`);
      }

      await response.json();
      alert("Book Uploaded successfully!!!");
      form.reset();  // Reset form only on success
    } catch (error) {
      console.error("Error uploading book:", error);
      alert("Failed to upload book. Please try again.");
    }
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
        {/* First row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput 
              id="bookTitle"
              name='bookTitle'
              type="text" 
              placeholder="Book Name" 
              required 
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput 
              id="authorName"
              name='authorName'
              type="text" 
              placeholder="Author Name" 
              required 
            />
          </div>
        </div>

        {/* Second row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Book Image URL" />
            </div>
            <TextInput 
              id="imageUrl"
              name='imageUrl'
              type="text" 
              placeholder="Book Image URL" 
              required 
            />
          </div>

          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="category" value="Book Category" />
            </div>
            <select 
              id='category' 
              name='category' 
              className='w-full rounded border-gray-300' 
              value={selectedBookCategory}
              onChange={(e) => setSelectedBookCategory(e.target.value)}
            >
              {bookCategories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea 
            id="bookDescription"
            name='bookDescription' 
            placeholder="Write your book description..." 
            className='w-full'
            required 
            rows={6} 
          />
        </div>

        {/* Book PDF URL */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPdfUrl" 
            name='bookPdfUrl'
            type="text" 
            placeholder="Book PDF URL"
            required 
          />
        </div>

        <div>
          <Button type="submit" className='mt-5 text-black'>Upload Book</Button>
        </div>
      </form>
    </div>
  );
};

export default UploadBook;






// // import React from 'react'
// // import { Button, Checkbox, Label, Textarea, TextInput } from "flowbite-react";
// // import { useState } from 'react';
// import React, { useState } from 'react';
// import { Button, Label, Textarea, TextInput } from 'flowbite-react';

// const UploadBook = () => {
//   const bookCategories = [
//     "Fiction",
//     "Non-Fiction",
//     "Mystery",
//     "Programming",
//     "Science Fiction",
//     "Fantasy",
//     "Horror",
//     "Bibliography",
//     "Autobiography",
//     "History",
//     "Memoir",
//     "Romance",
//     "Self Help",
//     "Children's Books",
//     "Business",
//     "Travel",
//     "Religion",
//     "Art and Design",
//   ];

//   const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

//   const handleChangeSelectedValue = (event) => {
//     setSelectedBookCategory(event.target.value);
//   };

//   // Handle book submission
//   const handleBookSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;

//     const bookTitle = form.bookTitle.value;
//     const authorName = form.authorName.value;
//     const imageUrl = form.imageUrl.value;
//     const categoryName = form.categoryName.value;
//     const bookDescription = form.bookDescription.value;
//     const bookPdfUrl = form.bookPdfUrl.value;

//     const bookObj = {
//       bookTitle, authorName, imageUrl, categoryName, bookDescription, bookPdfUrl
//     };

//     try {
//       const response = await fetch("http://localhost:5000/upload", {  // Adjust the URL if necessary
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookObj),
//       });

//       if (!response.ok) {
//         throw new Error(`Server responded with status ${response.status}`);
//       }

//       const data = await response.json();

//       // Handle success
//       alert("Book Uploaded successfully!!!");
//       form.reset();  // Reset form only on success
//     } catch (error) {
//       // Handle error
//       console.error("Error uploading book:", error);
//       alert("Failed to upload book. Please try again.");
//     }
//   };

//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

//       <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
//         {/* First row */}
//         <div className='flex gap-8'>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="bookTitle" value="Book Title" />
//             </div>
//             <TextInput 
//               id="bookTitle"
//               name='bookTitle'
//               type="text" 
//               placeholder="Book Name" 
//               required 
//             />
//           </div>

//           {/* Author Name */}
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="authorName" value="Author Name" />
//             </div>
//             <TextInput 
//               id="authorName"
//               name='authorName'
//               type="text" 
//               placeholder="Author Name" 
//               required 
//             />
//           </div>
//         </div>

//         {/* Second row */}
//         <div className='flex gap-8'>
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="imageUrl" value="Book Image URL" />
//             </div>
//             <TextInput 
//               id="imageUrl"
//               name='imageUrl'
//               type="text" 
//               placeholder="Book Image URL" 
//               required 
//             />
//           </div>

//           {/* Category */}
//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="category" value="Book Category" />
//             </div>
//             <select 
//               id='category' 
//               name='categoryName' 
//               className='w-full rounded border-gray-300' 
//               value={selectedBookCategory}
//               onChange={handleChangeSelectedValue}
//             >
//               {bookCategories.map((category) => (
//                 <option key={category} value={category}>
//                   {category}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>

//         {/* Book Description */}
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="bookDescription" value="Book Description" />
//           </div>
//           <Textarea 
//             id="bookDescription"
//             name='bookDescription' 
//             placeholder="Write your book description..." 
//             className='w-full'
//             required 
//             rows={6} 
//           />
//         </div>

//         {/* Book PDF URL */}
//         <div>
//           <div className="mb-2 block">
//             <Label htmlFor="bookPdfUrl" value="Book PDF URL" />
//           </div>
//           <TextInput
//             id="bookPdfUrl" 
//             name='bookPdfUrl'
//             type="text" 
//             placeholder="Book PDF URL"
//             required 
//           />
//         </div>

//         <div>
//           <Button type="submit" className='mt-5 text-black'>Upload Book</Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default UploadBook;

// // const UploadBook = () => {
// //     const bookCategories = [
// //         "Fiction",
// //         "Non-Fiction",
// //         "Mystery",
// //         "Programming",
// //         "Science Fiction",
// //         "Fantasy",
// //         "Horror",
// //         "Bibliography",
// //         "Autobiography",
// //         "History",
// //         "Memoir",
// //         "Romance",
// //         "Self Help",
// //         "Children's Books",
// //         "Business",
// //         "Travel",
// //         "Religion",
// //         "Art and Design",

// //     ]
// //     const [selectedBookCategory, ,setSelectedBookCategory] = useState(bookCategories[0]);

// //     const handleChangeSelectedValue = (event) => {
// //         // console.log(event.target.value);
// //         setSelectedBookCategory(event.target.value);
// //     }

// //     // handle book submission
// //     const handleBookSubmit = (event) => {
// //         event.preventDefault();
// //         const form = event.target;

// //         const bookTitle = form.bookTitle.value;
// //         console.log(bookTitle)
// //     }
// //   return (
// //     <div className='px-4 my-12 '>
// //      <h2 className='mb-8 text-3xl font-bold'>Upload A Book</h2>

// //      <form onSubmit={handleBookSubmit} className="flex  lg:w-[1180px] flex-wrap flex-col gap-4">
// //         {/* first row */}
// //         <div className='flex gap-8'>
// //             <div className='lg:w-1/2'>
// //                 <div className="mb-2 block">
// //                     <Label 
// //                         htmlFor="bookTitle"
// //                         value="Book Title" />
// //                 </div>
// //                 <TextInput 
// //                         id="bookTitle"
// //                         name='bookTitle'
// //                         type="text" 
// //                         placeholder="Book Name" 
// //                         required />
// //             </div>
// //                 {/* Author Name */}
// //             <div className='lg:w-1/2'>
// //                 <div className="mb-2 block">
// //                     <Label 
// //                         htmlFor="authorName"
// //                         value="Author Name" />
// //                 </div>
// //                 <TextInput 
// //                     id="authorName"
// //                     name='authorName'
// //                     type="text" 
// //                     placeholder="Author Name" 
// //                     required />
// //             </div>
// //         </div>

// //         {/* second row */}
        
// //         <div className='flex gap-8'>
// //             <div className='lg:w-1/2'>
// //                 <div className="mb-2 block">
// //                     <Label 
// //                         htmlFor="imageUrl"
// //                         value=" Book Image Url" />
// //                 </div>
// //                 <TextInput 
// //                         id="imageUrl"
// //                         name='imageUrl'
// //                         type="text" 
// //                         placeholder="Book Image Url" 
// //                         required />
// //             </div>
// //                 {/* Category */}
// //             <div className='lg:w-1/2'>
// //             <div className="mb-2 block">
// //                     <Label 
// //                         htmlFor="inputState"
// //                         value="Book Category" />
// //                 </div>

// //                 <select 
// //                     id='category' 
// //                     name='categoryName' 
// //                     className='w-full rounded border-gray-300' 
// //                     value={selectedBookCategory}
// //                     onChange={handleChangeSelectedValue}
// //                     >
// //                     {bookCategories.map((option) => (
// //                         <option key={option} value={option}>{option}</option>
// //                     ))}
// //             </select>
                
// //             </div>
// //         </div>
         
// //          {/* Book Description */}
// //          <div>
// //                 <div className="mb-2 block">
// //                 <Label htmlFor="bookDescription" 
// //                         value="Book Description" />
// //                 </div>

// //                 <Textarea 
// //                 id="bookDescription"
// //                 name='bookDescription' 
// //                 placeholder="Write your book description..." 
// //                 className='w-full'
// //                 required 
// //                 rows={6} />      

// //             </div>
// //                     {/* Book pdf link */}
// //             <div>
// //                 <div className="mb-2 block">
// //                 <Label htmlFor="bookPdfUrl"
// //                 value="Book PDF URL" />
// //                 </div>
// //                 <TextInput
// //                 id="bookPdfUrl" 
// //                 name='bookPdfUrl'
// //                 type="text" 
// //                 placeholder="book pdf url"
// //                 required />
// //       </div>
// //       <div>
// //       <Button type="submit" className='mt-5 text-black'>Upload book</Button>
// //       </div>
      
// //     </form>
// //     </div>
// //   )
// // }

// // export default UploadBook
