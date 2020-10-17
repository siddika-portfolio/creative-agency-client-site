import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import cart from '../../../images/icons/cart.png';
import serviceListIcon from '../../../images/icons/serviceList.png';
import review from '../../../images/icons/message-square.png';



const OrderSideBar = () => {
    return (
        <section className="sidebar">
        <NavLink  to="/" className="logo " > <img src={logo} alt="" /> </NavLink>

        <div className="sidebar-option" >
            <NavLink to="order"  activeClassName="active" className="sidebar-link"> <h6> <img src={cart}alt=""/>  Order </h6> </NavLink>
            <NavLink to="OrderList"  activeClassName="active" className="sidebar-link"> <h6> <img src={serviceListIcon} alt=""/>  Service list </h6> </NavLink>
            <NavLink to="review" activeClassName="active" className="sidebar-link"> <h6> <img src={review} alt=""/> Review </h6> </NavLink>
        </div>
    </section>
    );
};

export default OrderSideBar;