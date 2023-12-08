import { useState } from "react";
import About from "../../About/About";
import Help from "../Help/Help";
import Payments from "../Payments/Payments";
import Socials from "../Socials/Socials";
import UsefulLinks from "../UsefulLinks/UsefulLinks";

const LinksFooter = () => {
  const [open, setIsOpen] = useState("open");

  const handleIsOpen = (e) => {
    e.currentTarget && setIsOpen(open);
  };

  return (
    <div className="footer-wrapper">
      <UsefulLinks />
      <Help open={open} handleIsOpen={handleIsOpen} />
      <About open={open} handleIsOpen={handleIsOpen} />

      <section className="misc">
        <Socials />
        <Payments />
      </section>

      <hr />
    </div>
  );
};

export default LinksFooter;
