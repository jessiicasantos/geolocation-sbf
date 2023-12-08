import "./SubHeader.css";
import Lordan from "../../../assets/img/logo_Jordan.svg";
import SNKRS from "../../../assets/img/logo_snkrs.svg";

const SubHeader = () => {
  return (
    <div className="sub-header">
      <div className="logos">
        <a href="http://localhost:3000/">
          <img src={Lordan} alt="Lordan" />
        </a>
        <a href="http://localhost:3000/">
          <img src={SNKRS} alt="Logo Nike SNKRS" />
        </a>
      </div>
      <div className="sub-links">
        <ul>
          <li>
            <a href="http://localhost:3000/">Ajuda </a>
          </li>
          <li>
            <a href="http://localhost:3000/">Acompanhe seu pedido </a>
          </li>
          <li>
            <a href="http://localhost:3000/">Junte-se a nós </a>
          </li>
          <li>
            <a href="http://localhost:3000/">Entrar</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SubHeader;
