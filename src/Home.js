import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://m.media-amazon.com/images/I/81EaJeUwBhL._SX3000_.jpg" alt="amazon-promo" srcset="" />

                <div className="home_row">
                    <Product id="1" title="The Lean Startup"
                        price={29.99}
                        image="https://theinnovationandstrategyblog.com/wp-content/uploads/2020/07/the-lean-startup-eric-ries.jpg"
                        rating={4} />
                    <Product id="6" title="Kenwood Stand Mixer"
                        price={299.99}
                        image="https://m.media-amazon.com/images/I/51ae8jtSakL._SL1200_.jpg"
                        rating={5} />


                </div>
                <div className="home_row">
                    <Product id="5" title="FitBit Activity Tracker "
                        price={159.99}
                        image="https://5.imimg.com/data5/MI/IO/MY-23810885/fitbit-charge-2-wireless-activity-tracker-and-wristband-500x500.jpg"
                        rating={2} />
                    <Product id="3" title=" Amazon Echo 3rd Gen"
                        price={59.99}
                        image="https://www.reliancedigital.in/medias/Amazon-B07P9B3W1G-Computer-Speakers-491600506-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxODgzNHxpbWFnZS9qcGVnfGltYWdlcy9oYzMvaDgxLzkyMTY2NjQxNzQ2MjIuanBnfDQxNjE4MmM1ZDBjY2E5N2JhODk5MzAzNDE1MTQxY2E1NDU1ODUxOWQxNGQxNjAyN2NmYmZiZmEwYTMwNDAxM2M"
                        rating={5} />
                    <Product id="4"
                        title="iPad Pro 2021 M1 Chip"
                        price={999.99}
                        image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000"
                        rating={4} />
                </div>
                <div className="home_row">
                    <Product id="2" title="Samsung 48.8' Odyssey G9 32:9 240 Hz Curved HDR NVIDIA G-SYNC VA Gaming Monitor"
                        price={2999.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
                        rating={3} />
                </div>

            </div>
        </div>
    );
}

export default Home;
