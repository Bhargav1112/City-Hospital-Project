import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
} from "reactstrap";

function ListApointment(props) {
  const [data, setData] = useState([]);
  const history = useHistory();

  const getData = () => {
    const localData = JSON.parse(localStorage.getItem("apt"));
    if (!localData) return;
    setData(localData);
  };

  useEffect(() => {
    getData();
  }, []);

  const deleteHandler = (id) => {
    const localData = JSON.parse(localStorage.getItem("apt"));
    const remainingData = localData.filter((apt) => apt.id !== id);
    localStorage.setItem("apt", JSON.stringify(remainingData));
    setData(remainingData);
  };

  const editHandler = (id) => {
    history.push("/apointment/book", { id });
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">All Apointments</h1>
      {data.map((d) => {
        return (
          <Card key={d.id}>
            <CardBody>
              <CardTitle tag="h5">{d.name}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {d.email}
              </CardSubtitle>
              <CardText>{d.date}</CardText>
              <CardText>Mob. : {d.phone}</CardText>
              <CardText>Dept. : {d.select}</CardText>
              <CardText>Message : {d.message}</CardText>
              <Button onClick={editHandler.bind(null, d.id)} className="me-3">
                Edit
              </Button>
              <Button onClick={deleteHandler.bind(null, d.id)}>Delete</Button>
            </CardBody>
          </Card>
        );
      })}
    </div>
  );
}

export default ListApointment;
