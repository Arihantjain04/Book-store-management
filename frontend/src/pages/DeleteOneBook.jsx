import axios from "axios";
import { React, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loader from "../components/Loader";
import "../styles/deleteonebook.scss";

const DeleteOneBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDelete = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/api/books/${id}`)
      .then(() => {
        setLoading(false);
        navigate("/books/");
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="delete-book-container">
      <h1 className="heading">Delete Book</h1>
      {loading ? <Loader /> : ""}
      <div className="confirm-container">
        <div className="delete-card">
          <h3 className="confirm-heading">Are you sure?</h3>
          <button className="confirm-btn" onClick={handleDelete}>
            Yes, Delete it
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteOneBook;
