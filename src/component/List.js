import React from 'react';
import { CardGroup, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

function List(props) {
    return (
        <CardGroup className='my-5'>
            {props.data.map(med => {
                return (
                    <Card key={med.id}>
                        <CardBody>
                            <CardTitle tag="h5">
                                {med.name}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                ${med.price}
                            </CardSubtitle>
                            <CardText>
                                {med.expiry}
                            </CardText>
                            <Button onClick={() => props.onButton(med.id)}>
                                Button
                            </Button>
                        </CardBody>
                    </Card>
                )
            })}

        </CardGroup>
    );
}

export default List;