import React, { useState, useEffect } from "react";
import { Form, Button, Badge, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { authLoginAction } from "../actions/auth";
import { get } from "lodash";

export default function HomePage() {
  const dispatch = useDispatch();
  const loading = useSelector(state => get(state, "auth.loading", false));
  const error = useSelector(state => get(state, "auth.error", null));
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (localStorage.login) {
      dispatch(authLoginAction(localStorage.login));
    }
  });

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handleLogin = e => {
    e.preventDefault();
    dispatch(authLoginAction(email));
  };
  return (
    <Form onSubmit={handleLogin}>
      {error ? <Alert variant="danger">{error}</Alert> : null}
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="Enter email"
        />
        <Form.Text className="text-muted">
          Examples:
          <Badge>Sincere@april.biz</Badge>
          <Badge>Shanna@melissa.tv</Badge>
          <Badge>Nathan@yesenia.net</Badge>
        </Form.Text>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={loading}>
        Login
      </Button>
    </Form>
  );
}
