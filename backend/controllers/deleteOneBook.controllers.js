import express from "express";
import mongoose from "mongoose";

import { MyBook as Book } from "../models/books.models.js";

export const deleteOneBook = async (req, res) => {

  try {

      const { id } = req.params

      const result = await Book.findByIdAndDelete(id, req.body)

      if(!result){
        return res.status(500).json({
            message: "BOOK NOT FOUND !!!"
        })
      }

      console.log("BOOK DELETED SUCCESSFULLY !!!");
      return res.status(200).json({message: "Book deleted successfully !!!"})

  } catch (error) {

    console.log(error.message);
    res.status(500).send({
      message: `AN ERROR OCCURED !!! , ${error.message}`,
    });
    
  }

};
