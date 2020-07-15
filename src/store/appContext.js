import React, { Component } from 'react'
import getState from './flux'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

firebase.initializeApp({
    apiKey: "",
    authDomain: ""
})

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
    class StoreWrapper extends Component {
        constructor(props) {
            super(props);
            //this will be passed as the contenxt value
            this.state = getState({
                getStore: () => this.state.store,
                getActions: () => this.state.actions,
                setStore: updatedStore =>
                    this.setState({
                        store: Object.assign(this.state.store, updatedStore)
                    })
            });
        }

        state = { isSignedIn: false }
        uiConfig = {
            signInFlow: "popup",
            signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID
            ],
            callbacks: {
                signInSuccess: () => false
            }
        }

        componentDidMount() {
            /**
             * EDIT THIS!
             * This function is the equivalent to "window.onLoad", it only run once on the entire application lifetime
             * you should do your ajax requests or fetch api requests here
             **/
            firebase.auth().onAuthStateChanged(user => {
                this.setState({ isSignedIn: !!user })
                console.log("user", user)
            })

            this.state.actions.GETNotifications()
            this.state.actions.GETHotels()
            this.state.actions.GETUsers()
            this.state.actions.GETCalendars()
            this.state.actions.GETGraphics()
            this.state.actions.GETReports()
        }
        render() {
            // the initial value for the context its not null anymore, but the current state of this component,
            // the context will have a getStore and setStore functions available then, because they were declared
            // on the state of this component
            return (
                <>
                    {
                        this.state.isSignedIn ?
                            (
                                <Context.Provider value={this.state}>
                                    <PassedComponent {...this.props} />
                                </Context.Provider>
                            )
                            :
                            (
                                <>
                                <h3 style={{textAlign: "center", marginTop:"50px"}}>Ingreso</h3>
                                <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}
                                />
                                </>
                            )
                    }
                </>

            )
        }
    }
    return StoreWrapper;
}
export default injectContext;


