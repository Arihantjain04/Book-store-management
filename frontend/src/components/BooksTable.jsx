import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import "../styles/bookstable.scss";

const BooksTable = ({ books }) => {
  return (
    <div className="table-container">
      <div className="tbl-header">
        <table cellPadding="0" cellSpacing="0" border="0">
          <thead>
            <tr>
              <th>S no</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th>Options</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="tbl-content">

      <table>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id}>
              <td>{index + 1}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>
                <div className="options">
                  <Link className="svg" to={`/books/details/${book._id}`}>
                    <BsInfoCircle style={{color: 'yellow'}} />
                  </Link>
                  <Link className="svg" to={`/books/edit/${book._id}`}>
                    <AiOutlineEdit style={{color: 'green'}} />
                  </Link>
                  <Link className="svg" to={`/books/delete/${book._id}`}>
                    <MdOutlineDelete style={{color: 'red'}} />
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default BooksTable;
