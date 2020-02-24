import React, { useEffect } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { get, map } from "lodash";
import { todoFetchAction } from "../actions/todos";

export default function TodoPage() {
  const dispatch = useDispatch();
  const loading = useSelector(state => get(state, "todos.loading", false));
  const data = useSelector(state => get(state, "todos.data", []));

  useEffect(() => {
    dispatch(todoFetchAction());
  }, [dispatch]);
  return (
    <ListGroup>
      {loading ? (
        <Spinner animation="border" />
      ) : (
        map(data, (item, i) => (
          <ListGroup.Item variant={item.completed ? "success" : "danger"}>
            #{i}: {item.title}
          </ListGroup.Item>
        ))
      )}
    </ListGroup>
  );
}
