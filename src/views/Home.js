import React, { useEffect, useContext } from 'react'
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'
import ModalHotel from '../components/ModalHotel'
import { Link } from 'react-router-dom'

const Home = props => {
    const { store, actions } = useContext(Context)
    useEffect(() => {
    }, [])
    return (
        <div className="home">
            <Sidebar />
            <div className="home_content">
                <div className="home_header">
                    <div>
                        <h3 className="home_header_title">Dashboard</h3>
                    </div>
                    <div className="home_header_icons">
                        <Link to="/buscar"><ion-icon name="search-outline"></ion-icon></Link>
                        <Link to="/mensajes"><ion-icon name="mail-unread-outline"></ion-icon></Link>
                        <Link to="/configuracion"><ion-icon name="settings-outline"></ion-icon></Link>
                        <Link to="/graficos"><ion-icon name="bar-chart-outline"></ion-icon></Link>
                    </div>
                </div>

                <div className="home_body">

                    <div className="home_body_left">
                        <div className="home_body_left_welcome">
                            <h5>asd</h5>
                            <h3>asdasd</h3>
                            <div className="home_body_left_welcome_line"></div>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit unde placeat sequi exercitationem facilis. Asperiores animi repellendus debitis similique totam.</p>
                        </div>
                        <div className="home_body_left_options">
                            <div className="home_body_left_option">
                                <ion-icon name="mail-open-outline"></ion-icon>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="home_body_left_option center">
                                <ion-icon name="bed-outline"></ion-icon>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="home_body_left_option">
                                <ion-icon name="card-outline"></ion-icon>
                                <p>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div className="home_body_left_hotels">
                            {/* Imágenes de Hoteles */}
                            <h3>Hoteles Disponibles</h3>
                            <div className="home_body_left_hotels_row">
                                {
                                    store.hotels.length > 0 &&
                                    store.hotels.map((hotel) => (
                                        <div key={hotel.id} className="home_body_left_hotels_img">
                                            <h4>{hotel.name}</h4>
                                            <button onClick={() => actions.GETCurrentHotel(hotel)} data-toggle="modal" data-target="#modalHotel">Reservar</button>
                                            <img src={hotel.url} alt="Not Found" /> 
                                        </div>
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                    <div className="home_body_right">
                        <h3>Notificaciones</h3>
                        {/* Tarjetas de notificaciones */}
                        <div className="home_body_right_cards">
                            {
                                store.notificaciones.length > 0 &&
                                store.notificaciones.map(({ id, date, title, text }) => (
                                    <div key={id} className="home_body_right_card">
                                        <div className="home_body_right_card_header">
                                            <ion-icon name="mail-open-outline"></ion-icon>
                                            <h6>{date}</h6>
                                        </div>
                                        <h4 className="home_body_right_card_title">{title}</h4>
                                        <p className="home_body_right_card_text">{text}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <ModalHotel url={store.currentHotel?store.currentHotel.url:"https://images.pexels.com/photos/374918/pexels-photo-374918.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} name={store.currentHotel?store.currentHotel.name:"Error"} />
            </div>
            
        </div>
    )
}

export default Home;