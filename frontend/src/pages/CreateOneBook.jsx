import { React, useState } from "react";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/createonebook.scss";

const CreateOneBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    if(data.title && data.author && data.publishYear){
      axios
      .post("https://book-store-management-two.vercel.app/api/books", data)
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert(error)
        // enqueueSnackbar("An Error Occured !!!", { variant: 'error' });
      })
      .then(() => {
        setLoading(false);
        // enqueueSnackbar("Book Created Successfully !!!", { variant: 'success' })
        navigate("/books/");
      })
    }
    else{
      alert("ENTER ALL DETAILS !!!")
      setLoading(false);
    }
  };

  return (
    // <div>
    //   <div className="p-4">
    //   <h1 className="text-3xl my-4">Create Book</h1>
    //   {loading ? <Loader /> : ""}
    //   <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
    //     <div className="my-4">
    //       <label htmlFor="title" className="text-xl mr-4 text-gray-500">
    //         Title
    //       </label>
    //       <input
    //         type="text"
    //         value={title}
    //         onChange={(e) => setTitle(e.target.value)}
    //         id="title"
    //         className="border-2 border-gray-500 px-4 py-2 w-full"
    //       />
    //     </div>
    //     <div className="my-4">
    //       <label htmlFor="author" className="text-xl mr-4 text-gray-500">
    //         Author
    //       </label>
    //       <input
    //         type="text"
    //         value={author}
    //         id="author"
    //         onChange={(e) => setAuthor(e.target.value)}
    //         className="border-2 border-gray-500 px-4 py-2 w-full"
    //       />
    //     </div>
    //     <div className="my-4">
    //       <label htmlFor="publishyear" className="text-xl mr-4 text-gray-500">
    //         Publish Year
    //       </label>
    //       <input
    //         type="text"
    //         value={publishYear}
    //         id="publishyear"
    //         onChange={(e) => setPublishYear(e.target.value)}
    //         className="border-2 border-gray-500 px-4 py-2 w-full"
    //       />
    //     </div>
    //     <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
    //   </div>
    // </div>
    // </div>
    <>
      <div className="create-book-container">
      {loading ? <Loader /> : ""}
      <div className="form"> 
        <h3>Create Book</h3>
        <label htmlFor="title">Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter Book Title" id="title" />

        <label htmlFor="author">Author</label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} placeholder="Enter Author Name" id="author" />

        <label htmlFor="publishYear">Publish Year</label>
        <input type="text" value={publishYear} onChange={(e) => setPublishYear(e.target.value)} placeholder="Enter Publish Year" id="publishYear" />

        <button onClick={handleSaveBook}>Save Details</button>
      </div>
      </div>
    </>
  );
};

export default CreateOneBook;
