import Style from "./nav.module.css";   

function NavMenu(){
    return(
        <div className={Style.contenedor}>
            <div className={Style.contenedorLogo}><p>Logo</p></div>
            <div className={Style.contenedorLista}>
                <ul>
                    <li>Home</li>
                    <li>Sintomas</li>
                    <li>Servicios</li>
                    <li>Sobre Nosotros</li>
                    <li>Pacientes</li>
                    <li>Agenda ahora!</li>
                </ul>
            </div>
        </div>
    )
}

export default NavMenu;