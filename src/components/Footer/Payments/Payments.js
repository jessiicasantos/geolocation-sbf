import Mastercard from "../../../assets/img/pgto_Mastercard.svg";
import Visa from "../../../assets/img/pgto_Visa.svg";
import Amex from "../../../assets/img/pgto_Amex.svg";
import Elo from "../../../assets/img/pgto_Elo.svg";
import HiperCard from "../../../assets/img/pgto_Hipercard.svg";
import Discover from "../../../assets/img/pgto_Discover.svg";
import Boleto from "../../../assets/img/pgto_Boleto.svg";

const Payments = () => {
  const paymentsData = [
    {
      imgUrl: Mastercard,
      alt: "Ícone Mastercard",
    },
    {
      imgUrl: Visa,
      alt: "Ícone Visa",
    },
    {
      imgUrl: Amex,
      alt: "Ícone Amex",
    },
    {
      imgUrl: Elo,
      alt: "Ícone Facebook",
    },
    {
      imgUrl: HiperCard,
      alt: "Ícone HiperCard",
    },
    {
      imgUrl: Discover,
      alt: "Ícone Discover",
    },
    {
      imgUrl: Boleto,
      alt: "Ícone Boleto",
    },
  ];

  return (
    <>
      <h4>Formas de Pagamento</h4>
      <ul className="payments">
        {paymentsData.map((payment, i) => (
          <li key={`payment=${i}`}>
            <a href="http://localhost:3000/">
              <img src={payment.imgUrl} alt={payment.alt} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Payments;
