import Style from "./header.module.css";
import image from "./OIG.jpg";

function Cabecera() {
  return (
    <div className={Style.contenedorCabecera}>
      <div className={Style.contenedorTextoCabecera}>
        <h1>Salud Publica</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos nisi ab
          voluptatibus amet? Aut hic possimus voluptatem, quia beatae
          praesentium adipisci commodi nesciunt sapiente, consequuntur quas
          saepe quisquam labore quam!
        </p>
        <div className={Style.boton}>Conoce más</div>
      </div>
      <div>
        {/* <img
          src="https://appb.saludcapital.gov.co/SivigilaDC/Imagenes/LOGO%20SIVIGILA.PNG"
          alt=""
        /> */}
        <img className={Style.imagenCabecera} src={image} alt="" />
      </div>
    </div>
  );
}

export default Cabecera;
