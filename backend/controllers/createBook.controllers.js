import express from "express";
import mongoose from "mongoose";

import { MyBook as Book } from "../models/books.models.js";

export const createBook = async (req, res) => {

  try {
    
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(202).send({
        message: "FILL ALL THE DETAILS !!!",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    console.log("BOOK CREATED SUCCESSFULLY !!!");

    return res.status(201).send(book);

  } catch (error) {
    
    console.log(error.message);
    res.status(500).send({
      message: `AN ERROR OCCURED !!! , ${error.message}`,
    });
    
  }

};
