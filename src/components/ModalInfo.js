import React, {useContext} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './ModalInfo.css'
import {useSelector} from "react-redux";
import {get, map} from "lodash";
import {closeModal} from "../actions/modal";
import {Spinner, Col, Row, Container, Alert} from "react-bootstrap";
import Image from 'react-bootstrap/Image'
import Context from "../context";

export default function ModalInfo() {
    const {dispatch} = useContext(Context)
    const show = useSelector(state => get(state, "modal.show", false));
    const loading = useSelector(state => get(state, "photos.loading", false));
    const data = useSelector(state => get(state, "photos.data", []));
    const error = useSelector(state => get(state, "photos.error", null));
    const handleCloseModal = () => {
        dispatch(closeModal())
    }
    return (
        <React.Fragment>
            {
                show && <div className="modal-wrapper">
                    <Modal.Dialog size="lg"
                                  aria-labelledby="contained-modal-title-vcenter"
                                  centered>
                        <Modal.Header>
                            <Modal.Title>Images</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Container>
                                <Row className="show-grid">

                                    {error ? <Alert variant="danger">{error.toString()}</Alert> : null}
                                    {loading ? (
                                        <Spinner animation="border"/>
                                    ) : (
                                        map(data, (item) => (
                                            <Col className="img-item" key={item.id} md={4}>
                                                <Image src={item.url} fluid/>
                                            </Col>
                                        ))
                                    )}
                                </Row>
                            </Container>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleCloseModal} variant="secondary">Close</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            }
        </React.Fragment>
    );
}