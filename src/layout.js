import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './views/Home'
import Calendario from './views/Calendario'
import Graficos from './views/Graficos'
import Informes from './views/Informes'
import Usuarios from './views/Usuarios'
import Buscar from './views/Buscar'
import Mensajes from './views/Mensajes'
import Configuracion from './views/Configuracion'
import NotFound from './views/Notfound'
import injectContext from './store/appContext'

const Layout = () => {
    return (
        <BrowserRouter >
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/calendario" component={Calendario} />
                <Route exact path="/graficos" component={Graficos} />
                <Route exact path="/informes" component={Informes} />
                <Route exact path="/usuario" component={Usuarios} />
                <Route exact path="/buscar" component={Buscar} />
                <Route exact path="/mensajes/:id?" component={Mensajes} />
                <Route exact path="/configuracion" component={Configuracion} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter >
    )
}
export default injectContext(Layout);