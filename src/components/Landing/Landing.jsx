
const Landing = () => {
    return (
        <div className="w-full h-screen bg-blue-200 bg-landing bg-center bg-cover grid place-items-center">
            <div className="text-center flex flex-col place-items-center gap-8">
                <h1 className="text-4xl sm:text-5xl uppercase font-bold">light of gospel<br />ministries ke.</h1>
                <p className="w-full sm:w-1/2 px-8 sm:px-0">Our Mission is to Cleansing People's hearts from sin and fills the individual with a love for God. Join us each sunday for prayers at our church.</p>
                <a href="#about" className="uppercase bg-black text-white py-1 sm:py-2 px-11 sm:px-16 w-max rounded">Know more about us</a>
            </div>
        </div>
    )
};

export default Landing;
