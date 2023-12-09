import { useState } from "react";
import "./Header.css";
import MainHeader from "./MainHeader/MainHeader";
import MbNav from "./MbNav/MbNav";
import SubHeader from "./SubHeader/SubHeader";

const Header = () => {
  const [open, setIsOpen] = useState(false);
  const isOpen = open ? " open" : "";

  const handleIsOpen = () => {
    setIsOpen(!open);
  };

  return (
    <header className="header-wrapper">
      <div className={`mb-wrapper${isOpen}`}>
        <SubHeader />
        <MainHeader />
      </div>
      <MbNav handleIsOpen={handleIsOpen} />
    </header>
  );
};

export default Header;
