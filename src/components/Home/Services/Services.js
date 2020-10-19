import React, { useEffect, useState } from 'react';
import ServicesCard from '../ServicesCard/ServicesCard';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services)

    useEffect(()=>{
        fetch('https://enigmatic-springs-04841.herokuapp.com/getServices', {
            method: 'GET',
            headers: {'content-type': 'application/json'}
        })
        .then(res => res.json())
        .then(data=> {
            setServices(data);
        })  
    }, [])
    return (
        <section className="services container-fluid mt-5 mb-5 p-5 ">
        <div className="container">

            <h3 style={{fontSize: "2.2rem"}} className="text-center font-weight-bold" > Provide awesome <p className="text-green font-weight-bold d-inline"> services </p> </h3>
            <div className="row row-cols-1  mt-5 pt-5">
                {
                    services.map(service => <ServicesCard key={service._id} service={service} />)
                }
                
            </div>
        </div>
        
    </section>
    );
};

export default Services;