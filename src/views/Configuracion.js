import React, { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'

const Configuracion = () => {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")

    const GETConfiguration = async () => {
        const res = await fetch(`https://run.mocky.io/v3/0805c339-cb45-410e-b8b0-4d38b7de5088`)
        const data = await res.json()
        setName(data.name)
        setLastname(data.lastName)
        setEmail(data.email)
        setPhone(data.phone)
        setPassword(data.password)
    }
    useEffect(() => GETConfiguration(), [])
    return (
        <div className="configuration">
            <Sidebar />
            <div className="configuration_content">
                <h1>Configuración de perfil</h1>
                <div className="configuration_content_form">
                    <div className="configuration_content_form_field">
                        <label htmlFor="configuration_content_form_field_name">Nombre</label>
                        <div className="configuration_content_form_input">
                            <input value={name} id="configuration_content_form_field_name" type="text" onChange={e => setName(e.target.value)} />
                            <ion-icon name="close-outline"></ion-icon>
                            <ion-icon name="create-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="configuration_content_form_field">
                        <label htmlFor="configuration_content_form_field_lastname">Apellido</label>
                        <div className="configuration_content_form_input">
                            <input value={lastname} id="configuration_content_form_field_lastname" type="text" onChange={e => setLastname(e.target.value)} />
                            <ion-icon name="close-outline"></ion-icon>
                            <ion-icon name="create-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="configuration_content_form_field">
                        <label htmlFor="configuration_content_form_field_email">Email</label>
                        <div className="configuration_content_form_input">
                            <input value={email} id="configuration_content_form_field_email" type="text" onChange={e => setEmail(e.target.value)} />
                            <ion-icon name="close-outline"></ion-icon>
                            <ion-icon name="create-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="configuration_content_form_field">
                        <label htmlFor="configuration_content_form_field_phone">Teléfono</label>
                        <div className="configuration_content_form_input">
                            <input value={phone} id="configuration_content_form_field_phone" type="text" onChange={e => setPhone(e.target.value)} />
                            <ion-icon name="close-outline"></ion-icon>
                            <ion-icon name="create-outline"></ion-icon>
                        </div>
                    </div>
                    <div className="configuration_content_form_field">
                        <label htmlFor="configuration_content_form_field_password">Contraseña</label>
                        <div className="configuration_content_form_input">
                            <input value={password} id="configuration_content_form_field_password" type="text" onChange={e => setPassword(e.target.value)} />
                            <ion-icon name="close-outline"></ion-icon>
                            <ion-icon name="create-outline"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Configuracion
