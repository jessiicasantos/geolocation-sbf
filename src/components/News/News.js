import LogoNike from "../../assets/img/logo_nike.svg";
import "./News.css";

const News = () => {
  return (
    <div className="news">
      <img src={LogoNike} alt="Logo Nike" />
      <h3>RECEBA AS NOVIDADES DA NIKE</h3>
      <p>
        Cadastre-se e seja um dos primeiros a saber de todas as novidades e
        ofertas.
      </p>
      <a href="http://localhost:3000/" className="btn-dark">
        Cadastre-se
      </a>
    </div>
  );
};

export default News;
