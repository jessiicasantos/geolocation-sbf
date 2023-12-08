import Facebook from "../../../assets/img/logo_redes_sociais_facebook.svg";
import Instagram from "../../../assets/img/logo_redes_sociais_instagram.svg";
import Youtube from "../../../assets/img/logo_redes_sociais_youtube.svg";

const socialsData = [
  {
    imgUrl: Facebook,
    alt: "Ícone Facebook",
  },
  {
    imgUrl: Instagram,
    alt: "Ícone Instagram",
  },
  {
    imgUrl: Youtube,
    alt: "Ícone Youtube",
  },
];

const Socials = () => {
  return (
    <>
      <h4>Redes sociais</h4>
      <ul className="socials">
        {socialsData.map((social, i) => (
          <li key={`social-${i}`}>
            <a href="http://localhost:3000/">
              <img src={social.imgUrl} alt={social.alt} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Socials;
