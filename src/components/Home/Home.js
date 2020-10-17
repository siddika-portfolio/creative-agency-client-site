import React from 'react';
import FeedBack from './FeedBack/FeedBack';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import ImageColumn from './ImageColumn/ImageColumn';
import Services from './Services/Services';
import Slider from './Slider/Slider';

const Home = () => {
    return (
        <div>
            <div>
                <Header/>
                <ImageColumn/>
                <Services></Services>
                <Slider></Slider>
                <FeedBack></FeedBack>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;