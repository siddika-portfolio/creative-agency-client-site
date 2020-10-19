import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ServiceTable = ({ singleOrder }) => {
    const [status, setStatus] = useState(singleOrder.status);
   console.log(status)
    const onChangeStatusHandler = (e) => {
        setStatus(e.target.value);
        fetch('https://enigmatic-springs-04841.herokuapp.com/update-status', {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                status: e.target.value,
                id: singleOrder._id
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    
    return (
        <tbody >
            <tr>
                <th scope="row"> {singleOrder.name} </th>
                <th > {singleOrder.email} </th>
                <th> {singleOrder.selectedServiceName} </th>
                <th style={{ fontSize: ".8rem" }}> {singleOrder.description.substring(0,60)} </th>

                {status === "pending" && <Form.Control as="select" className={`text-${status}`} custom onChange={onChangeStatusHandler}>
                    <option style={{ color: '#FF4545' }} > Pending </option>
                    <option style={{ color: '#009444' }} > Done </option>
                    <option style={{ color: '#FFBD3E' }} > Ongoing </option>
                </Form.Control>}

                {status === "done" && <Form.Control as="select" className={`text-${status}`} custom onChange={onChangeStatusHandler}>
                    <option style={{ color: '#009444' }} > Done </option>
                    <option style={{ color: '#FF4545' }} > Pending </option>
                    <option style={{ color: '#FFBD3E' }} > Ongoing </option>
                </Form.Control>}

                {status === "ongoing" && <Form.Control as="select" className={`text-${status}`} custom onChange={onChangeStatusHandler}>
                    <option style={{ color: '#FFBD3E' }} > Ongoing </option>
                    <option style={{ color: '#009444' }} > Done </option>
                    <option style={{ color: '#FF4545' }} > Pending </option>
                </Form.Control>}

            </tr>
        </tbody>
    );
};

export default ServiceTable;