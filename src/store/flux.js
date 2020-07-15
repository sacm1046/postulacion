const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            //variables de notificaciones
            notificaciones: [],
            //variables de hoteles
            hotels: [],
            currentHotel: {},
            //variables de users
            users: [],
            //variables de mensajes
            messages: [],
            currentMessage: {},
            //variables de calendario
            calendars: [],
            //variables de gráficos
            graphics: [],
             //variables de informes
            reports: [],
             //variables de configuración
            configurations: {},
            //variables generales
            error: "",
            success: "",
            isAuthenticated: false
        },
        actions: {
            goRoute: (history, route, parameter) => {
                history.push(route)
                getActions().GETMessages(parameter)
            },
            GETGraphics: async () => {
                const res = await fetch(`https://run.mocky.io/v3/bfa9b540-d748-4a6e-99b2-47cc15958e97`)
                const data = await res.json()
                setStore({ graphics: data })

            }, 
            GETConfiguration: async () => {
                const res = await fetch(`https://run.mocky.io/v3/0805c339-cb45-410e-b8b0-4d38b7de5088`)
                const data = await res.json()
                setStore({ configurations: data })
            },
            GETReports: async () => {
                const res = await fetch(`https://run.mocky.io/v3/36971c42-6596-4d46-8162-eacc44fb4cd6`)
                const data = await res.json()
                setStore({ reports: data })
            },
            GETNotifications: async () => {
                const res = await fetch(`https://run.mocky.io/v3/a8a22800-d6b4-4889-ba73-e560cfefea1c`)
                const data = await res.json()
                setStore({ notificaciones: data })
            },
            GETCalendars: async () => {
                const res = await fetch(`https://run.mocky.io/v3/c868e902-f84d-4025-bc72-f5653d258581`)
                const data = await res.json()
                setStore({ calendars: data })
            },
            GETHotels: async () => {
                const res = await fetch(`https://run.mocky.io/v3/6d14aaef-c6b5-46da-baa1-96353a99088d`)
                const data = await res.json()
                setStore({ hotels: data })
            },
            GETCurrentHotel: (hotel) => {
                setStore({ currentHotel: hotel })
            },
            GETUsers: async () => {
                const res = await fetch(`https://run.mocky.io/v3/6a0a202a-f923-44bb-9ec4-733795e951a2`)
                const data = await res.json()
                setStore({ users: data })
            },
            GETMessages: async (message_id) => {
                const res = await fetch(`https://run.mocky.io/v3/2bc10f6a-7e1e-4a6a-8ee3-690ff85bfe6c`)
                const data = await res.json()
                console.log(data)
                if (message_id !== undefined) {
                    const message = data.filter(item => item.id === parseInt(message_id))
                    if (message.length > 0) {
                        setStore({
                            currentMessage: message[0],
                            message: []
                        })
                    } else {
                        setStore({
                            currentMessage: {
                                date: "",
                                content: "Mensaje sin Registro",
                                cliente: ""
                            },
                            message: []
                        })
                    }
                } else {
                    setStore({
                        messages: data,
                        currentMessage: {}
                    })
                }
            }
        }
    }
}
export default getState;