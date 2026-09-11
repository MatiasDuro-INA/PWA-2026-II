import { Edad } from "./Card/Edad"
import { Email } from "./Card/Email"
import { Titulo } from "./Card/Titulo"
import "./UserCard.css"


export const UserCard = ({user}) => {

    // para mejorar esto, podemos DESESTRUCTURAR LAS PROPS
    // Si yo se, que props van a venir
    // Puedo directamente llamarlas dentro de donde van las props

    // EN react, no se pasan parametros
    // sino que se pasan, algo llamado 
    // PROPS ( propiedades)
    // Las Props, son un objeto, que siempre viene
    // Aunque este vacio

    

    return (
        <div className="cardContainer">
            {/* 
            <h2>Email: {user.email}</h2>
            <h4>Edad: {user.edad}</h4> */}
            <Titulo user={user} colorNombre={"red"}/>
            <Email />
            <Edad />
        </div>
    )
}