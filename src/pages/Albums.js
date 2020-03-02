import React, {useContext, useEffect} from "react";
import {Alert, ListGroup, Spinner} from "react-bootstrap";
import {albumsFetchAction, filterAlbumsAction} from "../actions/albums";
import {useSelector} from "react-redux";
import {get, map} from "lodash";
import {openModal} from '../actions/modal'
import {fetchPhotosAction} from '../actions/photos'

import './albums.css'
import Context from "../context";

export default function Albums() {
    const {dispatch} = useContext(Context)
    const loading = useSelector(state => get(state, "albums.loading", false));
    const data = useSelector(state => get(state, "albums.data", []));
    const error = useSelector(state => get(state, "albums.error", null));
    const handleOpenModal = (id) => {
        dispatch(openModal())
        dispatch(fetchPhotosAction(id))
    }
    const handleInput = (e) => {
        dispatch(filterAlbumsAction(e))
    }

    useEffect(() => {
        dispatch(albumsFetchAction());
    }, [dispatch]);

    return (
        <ListGroup>
            {error ? <Alert variant="danger">{error.toString()}</Alert> : null}
            <h3>Albums</h3>
            <input placeholder=" search..." onChange={handleInput} type="search"/>
                {loading ? (
                    <Spinner animation="border"/>
                ) : (
                   data.length !== 0  ? map(data, (item, i) => (
                        <ListGroup.Item key={i} variant={item.completed ? "success" : "danger"}>
                            {i + 1}: <span onClick={() => {
                            handleOpenModal(item.id)
                        }}>{item.title}</span>
                        </ListGroup.Item>
                    )) : <div>not found</div>
                )}
            </ListGroup>
    );
}