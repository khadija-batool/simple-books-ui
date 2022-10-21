import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h2>Welcome to the Library</h2>
      <img
        src="https://pen.org/wp-content/uploads/2019/02/PEN-OUT-LOUD_readinglist_april1-e1549657571275.jpg"
        height="300px"
      />
      <div>
        <Link to="/books">
          <button>Books</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
