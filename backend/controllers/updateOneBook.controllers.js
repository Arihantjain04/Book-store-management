import express from "express";
import mongoose from "mongoose";

import { MyBook as Book } from "../models/books.models.js";

export const updateOneBook = async (req, res) => {

  try {

    if (!req.body.title || !req.body.author || !req.body.publishYear) {
        return res.status(202).send({
          message: "FILL ALL THE DETAILS !!!",
        });
      }

      const { id } = req.params

      const result = await Book.findByIdAndUpdate(id, req.body)

      if(!result){
        return res.status(500).json({
            message: "BOOK NOT FOUND !!!"
        })
      }

      console.log("BOOK UPDATED SUCCESSFULLY !!!");
      return res.status(200).json({message: "Book updated successfully !!!"})

  } catch (error) {

    console.log(error.message);
    res.status(500).send({
      message: `AN ERROR OCCURED !!! , ${error.message}`,
    });
    
  }

};
