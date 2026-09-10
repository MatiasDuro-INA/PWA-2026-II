import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
// Cuando importo sin las {} es porque el export es default

import { Ejemplo1 } from './Ejemplos/Ejemplo1'
import { UserCard } from './components/UserCard/UserCard'
// Cuando importo con las { } es porque el export no es default

function App() {

  let usuarios = [
    {
      nombre: "Facu",
      edad: 27,
      email: "facu@gmail.com"
    },
    {
      nombre: "Sofia",
      edad: 25,
      email: "sofia@gmail.com"
    },
    {
      nombre: "Mica",
      edad: 30,
      email: "mica@gmail.com"
    },
  ]


  return (
    <>
      {/* <Ejemplo1 /> */}
      <h2>Usuarios: </h2>


      {
        usuarios.map(user => (
          <UserCard user={user} colorNombre={"red"} />
        ))
      }



    </>

  )

}

export default App
