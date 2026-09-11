

export const Ejemplo1 = () => {


  let herramientas = ['html', 'css', 'javascript']

  // cuando retorno con () estoy devolviendo un nodo
  // entendemos nodo por html

  // Componetizar: Abstraer un problema grande, en problemas mas pequenos



    return (
        <>
            <section id="center">
                <h1>Clase 4</h1>
                <h2>Introduccion a React</h2>
            </section>

            <section id='center'>
                <h3>Herramientas: </h3>
                <ul>
                    {
                        herramientas.map((tool) => (
                            <li>{tool}</li>
                        ))
                    }
                </ul>
            </section>

        </>
    )
}
