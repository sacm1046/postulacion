import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    return (
        <>
            <div className="side_bar_fake"></div>
            <div className="side_bar">
                <div className="side_bar_icons">
                    <Link to="/"><ion-icon name="fitness-outline"></ion-icon></Link>
                    <Link to="/calendario"><ion-icon name="calendar-outline"></ion-icon></Link>
                    <ion-icon name="apps-outline"></ion-icon>
                    <Link to="/usuario"><ion-icon name="person-outline"></ion-icon></Link>
                    <Link to="/informes"><ion-icon name="document-text-outline"></ion-icon></Link>
                    <Link to="/graficos"><ion-icon name="bar-chart-outline"></ion-icon></Link>
                    <ion-icon name="exit-outline"></ion-icon>
                </div>
            </div>
        </>
    )
}

export default Sidebar
