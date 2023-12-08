const About = ({ open, handleIsOpen }) => {
  return (
    <section className="about">
      <details
        open={open && window.innerWidth <= 1024 ? "" : "open"}
        onClick={handleIsOpen}
      >
        <summary>
          <h4>Sobre a nike </h4>
        </summary>
        <ul>
          <li>
            <a href="http://localhost:3000/">Feito para Jogar</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Sustentabilidade</a>
          </li>
        </ul>
      </details>
    </section>
  );
};

export default About;
