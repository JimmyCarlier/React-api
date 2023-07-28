import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const search = event.target.search.value;
    navigate(`/searchCocktail?search=${search}`);
  };
  return (
    <nav>
      <ul className="flex">
        <li>
          <span class="material-symbols-outlined">terminal</span>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/allCoktails">Show Cocktails</Link>
        </li>
        <li>
          <Link to="/randomCocktailPage">Random me !</Link>
        </li>
        <li>
          <form onSubmit={handleSubmit} className="input-search">
            <label htmlFor="search"></label>
            <input
              type="text"
              name="search"
              placeholder="Rechercher..."
              className="bar-search"
            />
            <button type="submit" className="btn-search">
              <span class="material-symbols-outlined">search</span>
            </button>
          </form>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
