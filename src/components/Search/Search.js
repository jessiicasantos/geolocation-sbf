import "./Search.css";

const Search = ({ txt, placeholder, id, className }) => (
  <div className={className}>
    <input id={id} type="text" placeholder={placeholder} />
    {txt ? <button className="btn-dark">{txt}</button> : ""}
  </div>
);

export default Search;
