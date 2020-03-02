import React, {useContext, useEffect} from "react";
import {Alert, ListGroup, Spinner} from "react-bootstrap";
import { useSelector } from "react-redux";
import { get, map } from "lodash";
import { todoFetchAction } from "../actions/todos";
import Context from "../context";

export default function TodoPage() {
  const {dispatch} = useContext(Context)
  const loading = useSelector(state => get(state, "todos.loading", false));
  const data = useSelector(state => get(state, "todos.data", []));
  const error = useSelector(state => get(state, "todos.error", null));

  useEffect(() => {
    dispatch(todoFetchAction());
  }, [dispatch]);

  return (
    <ListGroup>
      {error ? <Alert variant="danger">{error.toString()}</Alert> : null}
      {loading ? (
        <Spinner animation="border" />
      ) : (
        map(data, (item, i) => (
          <ListGroup.Item key={i} variant={item.completed ? "success" : "danger"}>
            #{i}: {item.title}
          </ListGroup.Item>
        ))
      )}
    </ListGroup>
  );
}