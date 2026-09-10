export const UserCard = ({user, colorNombre}) => {

    // para mejorar esto, podemos DESESTRUCTURAR LAS PROPS
    // Si yo se, que props van a venir
    // Puedo directamente llamarlas dentro de donde van las props

    // EN react, no se pasan parametros
    // sino que se pasan, algo llamado 
    // PROPS ( propiedades)
    // Las Props, son un objeto, que siempre viene
    // Aunque este vacio

    

    return (
        <div>
            <h2 style={{color: `${colorNombre}`}} >Nombre: {user.nombre}</h2>
            <h2>Email: {user.email}</h2>
            <h4>Edad: {user.edad}</h4>
        </div>
    )
}