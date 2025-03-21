import arrynLogo from "../assets/great_houses/Arryn.png"
import baratheonLogo from "../assets/great_houses/Baratheon.png"
import greyjoyLogo from "../assets/great_houses/Greyjoy.png"
import lannisterLogo from "../assets/great_houses/Lannister.png"
import martellLogo from "../assets/great_houses/Martell.png"
import starkLogo from "../assets/great_houses/Stark.png"
import targaryenLogo from "../assets/great_houses/Targaryen.png"
import tullyLogo from "../assets/great_houses/Tully.png"
import tyrellLogo from "../assets/great_houses/Tyrell.png"


export default function GreatHouses() {
  return (
    <section>
      <img src={arrynLogo} alt="Arryn house" />
      <img src={baratheonLogo} alt="Baratheon house" />
      <img src={greyjoyLogo} alt="Greyjoy house" />
      <img src={lannisterLogo} alt="Lannister house" />
      <img src={martellLogo} alt="Martell house" />
      <img src={starkLogo} alt="Stark house" />
      <img src={targaryenLogo} alt="Targaryen house" />
      <img src={tullyLogo} alt="Tully house" />
      <img src={tyrellLogo} alt="Tyrell house" />
    </section>
  );
}