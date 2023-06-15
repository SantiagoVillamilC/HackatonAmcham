import Style from "./home.module.css";

function Home() {
  return (
    <body>
      <section className={Style.seccionAnios}>
        <div className={Style.contenedorAnios}>
          <div className={Style.contenedorTextoAnios}>
            <h3>Selecciona el año que te interesa</h3>
          </div>
          <div className={Style.contenedorEnfermedades}>
            <div className={Style.celda}>2019</div>
            <div className={Style.celda}>2020</div>
            <div className={Style.celda}>2021</div>
            <div className={Style.celda}>2022</div>
            <div className={Style.celda}>2023</div>
          </div>
        </div>
      </section>
      <section>
        <div className={Style.contenedor}>
          <div className={Style.contenedorSeccionIzquierda}>
            <h2>Enfermedad</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              excepturi sed. Voluptatibus iusto sint sit voluptatum
              reprehenderit fugit id ad, corrupti ut, quasi ullam! Fugiat velit
              ipsam optio nemo labore.
            </p>
          </div>
          <div className={Style.contenedorSeccionDerecha}>
            <img className={Style.imagenTarjeta} src="" alt="grafica" />
            <div className={Style.contenedorTarjetas}>
              <div className={Style.Tarjetas}>Cuadro</div>
              <div className={Style.Tarjetas}>Cuadro</div>
              <div className={Style.Tarjetas}>Cuadro</div>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}

export default Home;
