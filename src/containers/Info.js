import React, {useEffect, useContext} from "react";
import {Card, Spinner} from "react-bootstrap";
import {useSelector} from "react-redux";
import {get} from "lodash";
import {authLoginAction, authLoginOutAction} from "../actions/auth";
import Context  from "../context";

export default function Info(props) {
    const {dispatch} = useContext(Context)
    const loading = useSelector(state => get(state, "auth.loading", false));
    const data = useSelector(state => get(state, "auth.data", {}));
    const handleExit = (e) => {
        e.preventDefault()
        dispatch(authLoginOutAction());
    };

    useEffect(() => {
        if(localStorage.getItem('isLogin') !== null) {
            dispatch(authLoginAction());
        }
    }, [dispatch]);

    return (
        <Card>
            {loading ? (
                <Spinner animation="border"/>
            ) : (
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        {data.email}
                    </Card.Subtitle>
                    <ul>
                        <li>Phone: {data.phone}</li>
                        <li>Website: {data.website}</li>
                        <li>City: {get(data, "address.city")}</li>
                        <li>Company: {get(data, "company.name")}</li>
                    </ul>
                    <Card.Link onClick={handleExit} href="#">Exit</Card.Link>
                </Card.Body>
            )}
        </Card>
    );
}