import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'

const Calendario = () => {
    const { store } = useContext(Context)
    return (
        <div className="calendar">
            <Sidebar />
            <div className="calendar_content">
                <h1>Calendario de Eventos</h1>
                <div className="calendar_content_cards">
                    {
                        store.calendars.length > 0 &&
                        store.calendars.map(({ id, url, description, date }) => (
                            <div className="calendar_content_card" key={id}>
                                <img src={url} alt=""/>
                                <h6><strong>Fecha</strong> {date}</h6>
                                <p><strong>Descripción</strong> {description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Calendario
