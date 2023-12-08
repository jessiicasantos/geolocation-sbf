import LogoNike from "../../../assets/img/logo_nike.svg";
import IconSacola from "../../../assets/img/icon_sacola.svg";
import IconHamb from "../../../assets/img/Icon-hamburguer.svg";
import "./MbNav.css";

const MbNav = ({ handleIsOpen }) => {
  return (
    <div className="mb-nav">
      <a href="http://localhost:3000/">
        <img src={LogoNike} alt="Logo Nike" />
      </a>
      <div className="right-icons-mb">
        <button>
          <img src={IconSacola} alt="Ícone Sacola de Compras" />
        </button>
        <button className="mb-nav-btn" onClick={handleIsOpen}>
          <img src={IconHamb} alt="Ícone hamburguer" />
        </button>
      </div>
    </div>
  );
};

export default MbNav;
