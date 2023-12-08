import "./Search.css";

const Search = ({ txt, placeholder, id, className }) => (
  <div className={className}>
    <input id={id} type="text" placeholder={placeholder} />
    {txt ? <button className="black-btn">{txt}</button> : ""}
  </div>
);

export default Search;
