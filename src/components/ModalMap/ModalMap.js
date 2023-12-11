import MapStores from "../MapStores/MapStores";
import "./ModalMap.css";

const ModalMap = ({ className, handleModalClose, onLoad, onUnmount }) => {
  return (
    <div className={`${className} modal`}>
      <div className="modal-wrapper">
        <button className="close" onClick={() => handleModalClose()}>
          X
        </button>
        <MapStores onLoad={onLoad} onUnmount={onUnmount} />
      </div>
    </div>
  );
};

export default ModalMap;
