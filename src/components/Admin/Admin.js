import React, { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import './Admin.css';
import ServiceTable from './ServiceTable/ServiceTable';




const Admin = () => {

    const [allOrderList, setAllOrderList] = useState([]);
    

    useEffect(() => {
        fetch('http://localhost:5000/all-order-list')
            .then(res => res.json())
            .then(data => {
                setAllOrderList(data)
            })
    }, [])
    return (
        <div className="container-fluid">
            <div className="row pt-3">
                <div className="col-md-3">
                    <Sidebar />
                </div>

                <div className=" col-sm-12 col-md-12 col-lg-9">
                    <div className="header-option ml-5">
                        <h4 className=" text-brand ">  Service list </h4>
                    </div>

                    <div className="rightOption ">
                        <div className="service-list bg-white pt-5 pl-4 pr-4 m-4 " >
                            <table className="table table-borderLess ">
                                <thead>

                                    <tr >
                                        <td scope="col">Name/Company</td>
                                        <td scope="col">Email ID</td>
                                        <td scope="col">Service</td>
                                        <td scope="col"> Project Details </td>
                                        <td scope="col">Status</td>
                                    </tr>
                                </thead>

                                {
                                    allOrderList.map(singleOrder =>
                                        <ServiceTable key={singleOrder._id} singleOrder={singleOrder} />
                                    )
                                }
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Admin;