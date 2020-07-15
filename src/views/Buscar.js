import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'

const Buscar = () => {
    const { store } = useContext(Context)
    const [filter, setFilter] = useState("")
    return (
        <div className="search">
            <Sidebar />
            <div className="search_content">
                <h1>Lista de Hoteles</h1>
                <div className="search_content_filter">
                    <label htmlFor="search_input">Buscar Hotel</label>
                    <input id="search_input" type="text" value={filter} onChange={e => setFilter(e.target.value)} />
                </div>
                <div className="search_content_cards">
                    {
                        store.hotels.length > 0 &&
                        store.hotels.map(({ id, name, url }) => {
                            if (name.includes(filter)) {
                                return (
                                    <div className="search_content_card" key={id}>
                                        <img src={url} alt="" width={300} />
                                        <h6>{name}</h6>
                                    </div>
                                )
                            }
                            return null
                        }
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Buscar
