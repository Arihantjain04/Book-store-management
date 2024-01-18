import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import "../styles/showonebook.scss";

const ShowOneBook = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://book-store-management-two.vercel.app/api/books/${id}`)
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="one-book-container">
      <h1 className="">Show Book</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="one-book-container">
          <div className="one-book-card">
            <table>
              <tbody>
                <tr>
                  <td className="key">Id</td>
                  <td>{book._id}</td>
                </tr>
                <tr>
                  <td className="key">Title</td>
                  <td>{book.title}</td>
                </tr>
                <tr>
                  <td className="key">Author</td>
                  <td>{book.author}</td>
                </tr>
                <tr>
                  <td className="key">Publish Year</td>
                  <td>{book.publishYear}</td>
                </tr>
                <tr>
                  <td className="key">Create Time</td>
                  <td>{new Date(book.createdAt).toString()}</td>
                </tr>
                <tr>
                  <td className="key">Last Update Time</td>
                  <td>{new Date(book.updatedAt).toString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowOneBook;
