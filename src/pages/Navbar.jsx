import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav>
      <h1>Bookstore CMS</h1>
      <ul className="navList">
        <li>
        <Link className="link" to="/">
          Books
        </Link>
        </li>
        <li>
        <Link className="link" to="Categorie">
        Categories
        </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar