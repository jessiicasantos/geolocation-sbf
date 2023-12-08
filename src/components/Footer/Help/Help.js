const Help = ({ handleIsOpen }) => {
  return (
    <section className="help">
      <details
        open={window.innerWidth <= 1024 ? "" : "open"}
        onClick={handleIsOpen}
      >
        <summary>
          <h4>Ajuda</h4>
        </summary>
        <ul>
          <li>
            <a href="http://localhost:3000/">Dúvidas Gerais</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Encontre seu Tamanho</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Entregas</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Pedidos</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Trocas e Devoluções</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Editar consentimento</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Preferências de Cookie</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Pagamentos</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Produtos</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Corporativo</a>
          </li>
          <li>
            <a href="http://localhost:3000/">Fale Conosco</a>
          </li>
        </ul>
      </details>
    </section>
  );
};

export default Help;
