import express from "express";
import mongoose from "mongoose";

import { MyBook as Book } from "../models/books.models.js";

export const getAllBooks = async (req, res) => {

    try {

        const books = await Book.find({})
        console.log("ALL BOOKS FETCHED SUCCESSFULLY !!!");        

        return res.status(200).json(
            {
                count: books.length,
                data: books
            }
        )

    } catch (error) {
    
        console.log(error.message);
        res.status(500).send({
          message: `AN ERROR OCCURED !!! , ${error.message}`,
        });
        
      }

}