import "./MainHeader.css";
import LogoNike from "../../../assets/img/logo_nike.svg";
import Sacola from "../../../assets/img/icon_sacola.svg";
import Search from "../../Search/Search";

const MainHeader = () => {
  return (
    <nav className="main-header">
      <a href="http://localhost:3000">
        <img src={LogoNike} alt="Logo Nike" />
      </a>
      <ul className="header-links">
        <li>
          <a href="http://localhost:3000/">Lançamento </a>
        </li>
        <li>
          <a href="http://localhost:3000/">Masculino </a>
        </li>
        <li>
          <a href="http://localhost:3000/">Feminino </a>
        </li>
        <li>
          <a href="http://localhost:3000/">Infantil </a>
        </li>
        <li>
          <a href="http://localhost:3000/">Ofertas </a>
        </li>
        <li>
          <a href="http://localhost:3000/">SNKRS</a>
        </li>
      </ul>
      <div className="flex-wrapper">
        <Search placeholder="Buscar" className="search-nav" />
        <button className="shop-car">
          <img src={Sacola} alt="Sacola de Compras Ícone" />
        </button>
      </div>
    </nav>
  );
};

export default MainHeader;
