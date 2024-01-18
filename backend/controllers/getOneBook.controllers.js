import express from "express";
import mongoose from "mongoose";

import { MyBook as Book } from "../models/books.models.js";

export const getOneBook = async (req, res) => {

  try {

    const { id } = req.params

    const book = await Book.findById(id)
    console.log("BOOK FETCHED SUCCESSFULLY !!!"); 
    
    return res.status(200).json(book)

  } catch (error) {

    console.log(error.message);
    res.status(500).send({
      message: `AN ERROR OCCURED !!! , ${error.message}`,
    });
    
  }

};
