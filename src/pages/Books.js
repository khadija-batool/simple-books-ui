import "./Books.css"
import {
  Link
  } from "react-router-dom";

 const Books = () => {
  return (
    <>
    <h2>Books</h2>
    <div>
    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643985393l/59900688.jpg" width="200px"height="300px"/>
    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1602190253l/52578297.jpg" width="200px" height="300px"/>
    <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1506026635l/35133922._SY475_.jpg" width="200px" height="300px"/>
    </div>
    <Link to="/">
    <button>Back</button>
    </Link>
    </>
  )
}
export default Books;