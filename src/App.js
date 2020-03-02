import React from "react";
import {Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import TodoPage from "./pages/Todo";
import Template from "./components/Template";
import PrivateRoute from "./components/PrivateRoute";
import {useDispatch, useSelector} from "react-redux";
import {get} from "lodash";
import Info from "./containers/Info";
import Albums from "./pages/Albums";
import  Modal from './components/ModalInfo'
import { Col } from "react-bootstrap";
import Context from './context'

function App() {
    const isLogin = useSelector(state => get(state, "auth.isAuthenticated", false));
    const dispatch = useDispatch();
    return (
        <Context.Provider value={{dispatch, isLogin}}>
        <Template>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={({location}) =>
                        isLogin ? (
                            <Redirect
                                to={{
                                    pathname: "/todo",
                                    state: {from: location}
                                }}
                            />
                        ) : (
                            <Col><HomePage/></Col>
                        )
                    }
                />
                <Route path="/login"
                       render={() =>
                           isLogin ? (
                               <Redirect
                                   to='/todo'
                               />
                           ) : (
                               <Col><LoginPage/></Col>
                           )
                       }/>
                 <PrivateRoute path="/albums">
                     <Col><Albums/></Col>
                     <Modal/>
                 </PrivateRoute>
                <PrivateRoute path="/todo">
                    <Col md={4}><Info dispatch={dispatch}/></Col>
                    <Col md={8}><TodoPage/></Col>
                </PrivateRoute>
            </Switch>
        </Template>
        </Context.Provider>
    );
}

export default App;