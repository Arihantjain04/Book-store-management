import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div className="back-btn-container">
      <Link to={destination} className="back-btn">
        <BsArrowLeft className="btn" />
      </Link>
    </div>
  );
};

export default BackButton;