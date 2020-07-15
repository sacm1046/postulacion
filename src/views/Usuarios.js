import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'

const Usuarios = () => {
    const { store } = useContext(Context)
    return (
        <div className="users">
            <Sidebar />
            <div className="users_content">
                <h1>Usuarios</h1>
                <div className="users_content_cards">
                    {
                        store.users.length > 0 &&
                        store.users.map(({ id, url, name }) => (
                            <div className="users_content_card" key={id}>
                                <img src={url} alt="Not Found" />
                                <h4><strong>Nombre</strong> {name}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Usuarios
