import React from 'react'

export const Titulo = ({colorNombre, user}) => {
  return (
    <h2 style={{color: `${colorNombre}`}} >Nombre: {user.nombre}</h2>
  )
}
