import React, { useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'

const Mensajes = (props) => {
    const a = props.match.params.id
    const { store, actions } = useContext(Context)

    useEffect(() => {
        actions.GETMessages(a)
    }, [a, actions])
    return (
        <div className="messages">
            <Sidebar />
            <div className="messages_content">
                {
                    JSON.stringify(store.currentMessage) !== '{}' ? (
                        <>
                            <h1>Mensaje  ID: {store.currentMessage.id}</h1>
                            <div className="messages_content_cards">
                                <div className="messages_content_card">
                                    <h4><strong>Fecha</strong> {store.currentMessage.date}</h4>
                                    <p><strong>Contenido</strong> {store.currentMessage.content}</p>
                                    <h6><strong>Cliente</strong> {store.currentMessage.client}</h6>
                                    <button className="messages_content_card_btn" onClick={()=> actions.goRoute(props.history, "/mensajes", undefined)}>Todos los Mensajes</button>
                                </div>
                            </div>
                        </>
                    ) : (
                            <>
                                <h1>Todos los Mensajes</h1>
                                <div className="messages_content_cards">
                                    {
                                        store.messages.length > 0 &&
                                        store.messages.map(({ id, date, content, client }) => (
                                            <div className="messages_content_card" key={id}>
                                                <h4><strong>Fecha</strong> {date}</h4>
                                                <p><strong>Contenido</strong> {content}</p>
                                                <h6><strong>Cliente</strong> {client}</h6>
                                                <div>
                                                <button className="messages_content_card_btn" onClick={()=> actions.goRoute(props.history, `/mensajes/${id}`, id)}>Detalle</button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )

                }
            </div>
        </div>
    )
}

export default Mensajes
