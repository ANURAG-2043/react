const Hero = () => {
 return (
    <main className="hero">
        <div className="hero-container">
            <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
            </p>
            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">Category</button>
            </div>

            <div className="shopping">
                <p>Also Availabe On</p>
            </div>
            <div className="brand-logo">
                <img src="/images/amazon.png" alt="amazon logo"/>
                <img src="/images/flipkart.png" alt="flipkart logo"/>
            </div>
        </div>
        </div>
        <div className="hero-img">
            <img src="/images/shoe_image.png" alt="hero_img"/>
        </div>
    </main>
 )
};

export default Hero;