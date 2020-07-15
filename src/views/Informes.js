import React, { useContext } from 'react'
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'

const Informes = () => {
    const { store } = useContext(Context)
    return (
        <div className="reports">
            <Sidebar />
            <div className="reports_content">
                <h1>Informes</h1>
                <div className="reports_content_cards">
                    {
                        store.reports.length > 0 &&
                        store.reports.map(({ id, file, name }) => (
                            <div className="reports_content_card" key={id}>
                                <a href={file}><ion-icon name="cloud-download-outline"></ion-icon></a>
                                <h6><strong>Archivo</strong> {name}</h6>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Informes
