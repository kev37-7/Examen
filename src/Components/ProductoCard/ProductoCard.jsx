import { useState } from 'react'

import './ProductoCard.css'


import alicate from '../../assets/Alicate.png'
import cierra from '../../assets/Cierra.png'
import maza from '../../assets/Maza.png'
import pala from '../../assets/Pala.png'
import pica from '../../assets/Pica.png'

//array con los datos de cada elemento de la ferreteria
const productosIniciales = [
  { id: 1, name: 'Alicate', image: alicate },
  { id: 2, name: 'Sierra', image: cierra },
  { id: 3, name: 'Maza', image: maza },
  { id: 4, name: 'Pala', image: pala },
  { id: 5, name: 'Pica', image: pica }
]

export const ProductoCard = () => {
  const [comprados, setComprados] = useState({})

  //funcion que ejecuta la accion de verificar que producto se compra y muestra el mensaje de comprado
  const handleComprar = (id, name) => {
    setComprados(prev => ({ ...prev, [id]: true }))
    alert(`¡${name} comprado!`)
  }

  return (
    <div>
       {/*muestra la lista de productos */}
      <section className="lista">
        {productosIniciales.map(producto => (
          <li key={producto.id}>
            {producto.name}
            <img src={producto.image} alt={producto.name} width={100} />
            <h2 className="name">{producto.name}</h2>
            <br />
            <button //al dar click en el boton cambia el estado a comprado haciendo uso del useState
              onClick={() => handleComprar(producto.id, producto.name)} 
              disabled={comprados[producto.id]}
            >
              {comprados[producto.id] ? 'Comprado' : 'Comprar'}
            </button>
          </li>
        ))}
      </section>
    </div>
  )
}
