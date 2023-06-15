import Style from "./header.module.css";

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
        <div>Conoce más</div>
      </div>
      <div>
        <img
          src="https://appb.saludcapital.gov.co/SivigilaDC/Imagenes/LOGO%20SIVIGILA.PNG"
          alt=""
        />
      </div>
    </div>
  );
}

export default Cabecera;
