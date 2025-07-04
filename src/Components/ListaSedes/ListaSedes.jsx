
import './ListaSedes.css'

import user1img from '../../assets/usuario.png'
import user2img from '../../assets/usuario1.png'
import user3img from '../../assets/usuario2.png'

//Array con los datos de los usuarios
const users = [
  { id: 1, name: 'Annie', descripcion: 'Gerente Sede Central', image: user1img },
  { id: 2, name: 'Marco', descripcion: 'Gerente Sede Norte', image: user2img },
  { id: 3, name: 'connie', descripcion: 'Gerente Sede Sur', image: user3img }
]

export const ListaSedes = () => {
  return (
    //Este bloque muestra las Card de cada uno de los usuarios junto con los datos asignados
    <div>
    <section className="lista">
        {users.map(user => (
          <div key={user.id} className="card">
            <img src={user.image} alt={`${user.name} Usuario`} className="image" />
            <h2 className="name">{user.name}</h2>
            <p className="description">{user.descripcion}</p>
          </div>
        ))}
    </section>
    </div>
  )
}

