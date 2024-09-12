// const express = require('express');
// const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
// const cors = require('cors');

// // Initialize Express app
// const app = express();
// const port = process.env.PORT || 5000; // Ensure PORT environment variable is correctly capitalized

// // Middleware setup
// app.use(cors());
// app.use(express.json()); // For parsing JSON request bodies

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // MongoDB configuration
// const uri = "mongodb+srv://mern-book-store:Covid19@cluster0.86m92hd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// // Function to connect to MongoDB and get the collection
// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log("Successfully connected to MongoDB!");
//     return client.db("BookInventory").collection("books");
//   } catch (error) {
//     console.error("Failed to connect to MongoDB", error);
//     throw error;
//   }
// }

// // Define routes
// async function setupRoutes() {
//   const bookCollection = await connectToDatabase();

//   // POST endpoint to insert a book
//   app.post("/upload.book", async (req, res) => {
//     try {
//       const data = req.body;
//       const result = await bookCollection.insertOne(data);
//       res.status(201).json(result); // 201 Created status
//     } catch (error) {
//       console.error("Error inserting book:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });

//   // GET endpoint to retrieve all books
//   app.get("/all.books", async (req, res) => {
//     try {
//       const books = await bookCollection.find().toArray();
//       res.status(200).json(books); // 200 OK status
//     } catch (error) {
//       console.error("Error retrieving books:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });

//   // PATCH endpoint to update a book
//   app.patch("/book/:id", async (req, res) => {
//     try {
//       const id = req.params.id;
//       const updateBookData = req.body;

//       if (!ObjectId.isValid(id)) {
//         return res.status(400).json({ message: "Invalid book ID" });
//       }

//       const filter = { _id: new ObjectId(id) };
//       const updateDoc = {
//         $set: updateBookData,
//       };

//       const result = await bookCollection.updateOne(filter, updateDoc);

//       if (result.matchedCount === 0) {
//         return res.status(404).json({ message: "Book not found" });
//       }

//       res.status(200).json({ message: "Book updated successfully" });
//     } catch (error) {
//       console.error("Error updating book:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });

//   // DELETE endpoint to remove a book
//   app.delete("/book/:id", async (req, res) => {
//     try {
//       const id = req.params.id;

//       if (!ObjectId.isValid(id)) {
//         return res.status(400).json({ message: "Invalid book ID" });
//       }

//       const filter = { _id: new ObjectId(id) };
//       const result = await bookCollection.deleteOne(filter);

//       if (result.deletedCount === 0) {
//         return res.status(404).json({ message: "Book not found" });
//       }

//       res.status(200).json({ message: "Book deleted successfully" });
//     } catch (error) {
//       console.error("Error deleting book:", error);
//       res.status(500).json({ message: "Internal server error" });
//     }
//   });
// }


// // to get single book data

// app.get("/book/:id", async (req, res) => {
//   const id = req.params.id;
//   const filter = { _id: new ObjectId(id)};
//   const result = await bookCollection.findOne(filter);
//   res.send(result);
// })


// // app.get('/book/:id', async (req, res) => {
// //   const id = req.params.id;

// //   // Validate the ObjectId
// //   if (!ObjectId.isValid(id)) {
// //     return res.status(400).json({ error: 'Invalid book ID format' });
// //   }

// //   try {
// //     const filter = { _id: new ObjectId(id) };
// //     const result = await bookCollections.findOne(filter);

// //     if (result) {
// //       res.status(200).json(result);
// //     } else {
// //       res.status(404).json({ error: 'Book not found' });
// //     }
// //   } catch (error) {
// //     console.error('Error fetching book:', error);
// //     res.status(500).json({ error: 'An error occurred while fetching the book' });
// //   }
// // });






// // Start the server and setup routes
// setupRoutes().then(() => {
//   app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
//   });
// }).catch(error => {
//   console.error("Failed to setup server routes:", error);
// });




const express = require('express');
const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
const cors = require('cors');

// Initialize Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware setup
app.use(cors());
app.use(express.json()); // For parsing JSON request bodies

// MongoDB configuration
const uri = "mongodb+srv://mern-book-store:Covid19@cluster0.86m92hd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let bookCollection;

// Function to connect to MongoDB and get the collection
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    bookCollection = client.db("BookInventory").collection("books");
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1); // Exit the process if connection fails
  }
}

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// POST endpoint to insert a book
app.post("/upload.book", async (req, res) => {
  try {
    const data = req.body;
    const result = await bookCollection.insertOne(data);
    res.status(201).json(result); // 201 Created status
  } catch (error) {
    console.error("Error inserting book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET endpoint to retrieve all books
app.get("/all.books", async (req, res) => {
  try {
    const books = await bookCollection.find().toArray();
    res.status(200).json(books); // 200 OK status
  } catch (error) {
    console.error("Error retrieving books:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// PATCH endpoint to update a book
app.patch("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updateBookData = req.body;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID" });
    }

    const filter = { _id: new ObjectId(id) };
    const updateDoc = {
      $set: updateBookData,
    };

    const result = await bookCollection.updateOne(filter, updateDoc);

    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated successfully" });
  } catch (error) {
    console.error("Error updating book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// DELETE endpoint to remove a book
app.delete("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;

    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID" });
    }

    const filter = { _id: new ObjectId(id) };
    const result = await bookCollection.deleteOne(filter);

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// GET endpoint to retrieve a single book by ID
app.get("/book/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // Validate the ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid book ID format" });
    }

    const filter = { _id: new ObjectId(id) };
    const result = await bookCollection.findOne(filter);

    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    console.error("Error fetching book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Start the server and setup routes
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(error => {
  console.error("Failed to setup server:", error);
});
