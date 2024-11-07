import React, { useState } from 'react';
import { Button, Label, Textarea, TextInput } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl } = useLoaderData();

  const bookCategories = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction", 
    "Fantasy", "Horror", "Bibliography", "Autobiography", "History", 
    "Memoir", "Romance", "Self Help", "Children's Books", "Business", 
    "Travel", "Religion", "Art and Design"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleUpdate = async (event) => {
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageUrl = form.imageUrl.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPdfUrl = form.bookPdfUrl.value;

    const updateBookObj = {
      bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
    };

    try {
      const response = await fetch(`https://book-store-inventory.onrender.com/book/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updateBookObj),
      });

      if (!response.ok) {
        throw new Error('Failed to update the book');
      }

      const data = await response.json();
      alert("Book is updated successfully!");
    } catch (error) {
      console.error("Error updating book:", error);
      alert("An error occurred while updating the book.");
    }
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Book Data</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
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
              defaultValue={bookTitle}
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
              defaultValue={authorName}
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
              defaultValue={imageUrl}
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
            defaultValue={bookDescription}
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
            defaultValue={bookPdfUrl}
          />
        </div>

        <div>
          <Button type="submit" className='mt-5 text-black'>Update Book</Button>
        </div>
      </form>
    </div>
  );
}

export default EditBooks;




// import React, { useState } from 'react'
// import { Button, Label, Textarea, TextInput } from 'flowbite-react';
// import { useLoaderData, useParams } from 'react-router-dom';


// const EditBooks = () => {
//   const {id} = useParams();
//   const {bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl} = useLoaderData();

//   const bookCategories = [
//     "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction", 
//     "Fantasy", "Horror", "Bibliography", "Autobiography", "History", 
//     "Memoir", "Romance", "Self Help", "Children's Books", "Business", 
//     "Travel", "Religion", "Art and Design"
//   ];

//   const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     const form = event.target;

//     const bookTitle = form.bookTitle.value;
//     const authorName = form.authorName.value;
//     const imageUrl = form.imageUrl.value;
//     const category = form.category.value;
//     const bookDescription = form.bookDescription.value;
//     const bookPdfUrl = form.bookPdfUrl.value;

//     const updateBookObj = {
//       bookTitle, authorName, imageUrl, category, bookDescription, bookPdfUrl
//     };

//         // Update book
//         fetch(`http://localhost:5000/book/${id}` {
//             method: "PATCH",
//             headers: {
//               "Content-Type": "application/json"
//             },
//             body: JSON.stringify(updateBookObj), 
//         }).then(res => res.json()).then(data => {
//           alert("Book Is Updated Successfully!!!")
      
//         })
//   }


//   return (
//     <div className='px-4 my-12'>
//       <h2 className='mb-8 text-3xl font-bold'>Update Book Data</h2>

//       <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-wrap flex-col gap-4">
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
//               defaultValue={bookTitle}
//             />
//           </div>

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
//               defaultValue={authorName}
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
//               defaultValue={imageUrl}
//             />
//           </div>

//           <div className='lg:w-1/2'>
//             <div className="mb-2 block">
//               <Label htmlFor="category" value="Book Category" />
//             </div>
//             <select 
//               id='category' 
//               name='category' 
//               className='w-full rounded border-gray-300' 
//               value={selectedBookCategory}
//               onChange={(e) => setSelectedBookCategory(e.target.value)}
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
//             defaultValue={bookDescription}
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
//             defaultValue={bookPdfUrl}
//           />
//         </div>

//         <div>
//           <Button type="submit" className='mt-5 text-black'>Update Book</Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default EditBooks
