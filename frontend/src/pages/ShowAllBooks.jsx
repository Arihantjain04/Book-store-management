import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import Loader from "../components/Loader";
import axios from 'axios'
import BooksTable from "../components/BooksTable";
import { IoAddCircle as CgAdd } from "react-icons/io5";

const ShowAllBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/api/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="home-top-bar">
        <h1>Books List</h1>
        <Link to="/books/create">
          {/* <MdOutlineAddBox className="create-btn" /> */}
          <CgAdd className="create-btn" />
        </Link>
      </div>
      {loading ? <Loader/> : <BooksTable books={books} /> }
    </div>
  );
};

export default ShowAllBooks;
