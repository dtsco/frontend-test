import React from "react";
import { Card, Spinner } from "react-bootstrap";
import { useSelector } from "react-redux";
import { get } from "lodash";

export default function Info() {
  const loading = useSelector(state => get(state, "auth.loading", false));
  const data = useSelector(state => get(state, "auth.data", {}));

  return (
    <Card>
      {loading ? (
        <Spinner animation="border" />
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
          <Card.Link href="#">Exit</Card.Link>
        </Card.Body>
      )}
    </Card>
  );
}
