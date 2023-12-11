import "./StoreCard.css";
import PinLink from "../../assets/img/icon_pin_link.svg";

const openPin = (title) => {
  const element = document.querySelectorAll(`div[title="${title}"]`);

  if (element.length) {
    element[0].click();
  }
};

const StoreCard = ({
  store,
  mapCenter,
  showModal,
  handleModalOpen,
  ...props
}) => {
  return (
    <>
      {store.map((s, i) => (
        <div
          key={`s-${i}`}
          className={`card-store`}
          onClick={() => openPin(s.name)}
          {...props}
        >
          <div className="km-store">
            <h3>{s.name}</h3>
            <span>{s.distance} km</span>
          </div>
          <button className="open-map" onClick={() => handleModalOpen()}>
            <img src={PinLink} alt="Pin Mapa" />
            Ver no mapa
          </button>
          <div>
            <h5>{s.adress}</h5>
            <p>
              Atendimento: <br />
              Segunda a Sábado 10h às 22h | Domingo 11h às 20h
            </p>
          </div>
          <p className="available">Disponível em 4 dias úteis</p>
        </div>
      ))}
    </>
  );
};

export default StoreCard;
