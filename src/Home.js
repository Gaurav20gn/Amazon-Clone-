import React from 'react'
import "./Home.css";
import Product from './Product';


function Home() {
    return (
        
        
        <div className="home">
           <img
           className="home_image"
           src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Bollywood/1500x600_Hero-Tall_np_bolly._CB405289994_.jpg"
           alt=""/>
           

        {/* product id title price rating image*/ }
            <div className="home__row">
                
                <Product
                    id="12345"
                    title="Apple AirPods Pro"
                    price={21349.00}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71zny7BTRlL._AC_UL270_SR270,270_.jpg"
                />
                <Product
                    id="123435"
                    title="Vivo V17 (Midnight Ocean, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers"
                    price={20900.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/41apNNfINPL.__AC_SY200_.jpg"/>

                
            </div>


            <div className="home__row">
                
                <Product
                    id="54345"
                    title="New Apple MacBook Pro (13-inch, 16GB RAM, 512GB SSD )"

                    price={199900.00}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/71HCR-N2O2L._AC_UL270_SR270,270_.jpg"

                    />
                <Product
                    id="87678"
                    title="Philips Amaze HL7576/00 600-Watt Juicer Mixer Grinder with 3 Jars)"
                    price={3600}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/41LFpftiuKL.__AC_SY200_.jpg"
                />
                <Product
                    id="0987667"
                    title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
                    price={7499.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/7128HRanJgL._AC_UY218_.jpg"
                />
            </div>
            <div className="home__row">
            <   Product
                    id="12345457434"
                    title="Samsung Galaxy Watch (Bluetooth, 42 mm) - Black"
                    price={15498.00}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/61ErvNimpvL._AC_UY218_.jpg"
                />

            </div>
        </div>
    )
}

export default Home
