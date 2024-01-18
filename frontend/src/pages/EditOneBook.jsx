import React, { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditOneBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/api/books/${id}`)
      .then((res) => {
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        alert("an error occured");
      });
  }, []);

  const handleEditBook = () => {
    const data = {
      title,
      author,
      publishYear
    };
    setLoading(true)
    axios
      .put(`http://localhost:5555/api/books/${id}`, data)
      .then(() => {
        setLoading(false)
        navigate("/books/")
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }

  return (
    <>
      <div className="create-book-container">
        {loading ? <Loader /> : ""}
        <div className="form">
          <h3>Create Book</h3>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Book Title"
            id="title"
          />

          <label htmlFor="author">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter Author Name"
            id="author"
          />

          <label htmlFor="publishYear">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            placeholder="Enter Publish Year"
            id="publishYear"
          />

          <button onClick={handleEditBook}>Save Details</button>
        </div>
      </div>
    </>
  );
};

export default EditOneBook;
