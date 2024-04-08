const express = require("express");
const router = express.Router();
const Book = require("../models/bookModel");


// route for add books to db
router.post("/", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({
          message: "Send all required fields :(title,author,publishyear)",
        });
      }
      const book = new Book(req.body);
      await book.save();
      res.status(201).json(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  //route for get all books fro db
  router.get("/", async (req, res) => {
    try {
      const books = await Book.find({});
  
      return res.status(200).json({
        count: books.length,
        data: books,
      });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  //route for gt one book from db by id
  router.get("/:id", async (req, res) => {
    try {
      // const id= req.params._id
      const book = await Book.findById(req.params.id);
  
      return res.status(200).json(book);
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  });
  
  // route for update a book
  router.put("/:id", async (req, res) => {
    try {
      if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(400).send({
          message: "Send all required fields :(title,author,publishyear)",
        });
      }
  
      const result = await Book.findByIdAndUpdate(req.params.id, req.body);
  
      // if (!result) {
      //   return res.status(404).send("Book not found");
      // }
      return res.status(200).send({ message: "Book updated successfully" });
    } catch (error) {
      // console.log(error.message);
      res.status(500).send({ message: "Book not found" });
    }
  });
  
  //route for delete a book
  router.delete("/:id", async (req, res) => {
      try {
        
        const result = await Book.findByIdAndDelete(req.params.id);
    
        return res.status(200).send({ message: "Book deleted successfully" });
      } catch (error) {
        // console.log(error.message);
        res.status(500).send({ message: "Book not found" });
      }
    });

    module.exports = router;

