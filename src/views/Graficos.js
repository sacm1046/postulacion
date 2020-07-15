import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/appContext'
import Sidebar from '../components/Sidebar'

const Graficos = (props) => {
    const { store } = useContext(Context)
    useEffect(() => {

    }, [])
    return (
        <div className="graphics">
            <Sidebar />
            <div className="graphics_content">
                <h1>Gráficos</h1>
                <div className="graphics_content_charts">
                    {
                        store.graphics.length > 0 &&
                        store.graphics.map(({value}, i)=>(
                            <div key={i} className="graphics_content_bar" style={{height:value*80}}>{value*10} %</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Graficos
