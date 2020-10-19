import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';
import OrderSidebar from '../OrderSideBar/OrderSideBar';
import OrderListCard from './OrderListCard/OrderListCard';

const OrderList = () => {
    const [loggedInUser] = useContext(UserContext);
    const [orderList, setOrderList] = useState([]);
    console.log(orderList)

    useEffect(() => {
        fetch('http://localhost:5000/getUserOrder', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => {
                setOrderList(data);
            })
    }, [loggedInUser.email]);

    return (
        <div className="container-fluid">
            <div className="row pt-3">
                <div className="col-md-3">
                    <OrderSidebar />
                </div>

                <div className="col-md-9">
                    <div className="header-option ml-5">
                        <h2 className=" text-brand ">  Order list </h2>
                        <h5 className="text-brand"> {loggedInUser.name} </h5>
                        <div className="d-flex align-items-center mt-3 ml-auto">
                           
                        </div>
                    </div>

                    <div className="rightOption mt-5">
                        <div className="row mx-4">
                            {
                                orderList.map(item => <OrderListCard key={item._id} orderListItem={item} />)
                            }
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default OrderList;