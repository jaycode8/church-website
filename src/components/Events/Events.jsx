
import church from "../../assets/church.jpeg";

const Events = () => {

    const data = [1, 2, 3, 4];

    return (
        <div className="w-full h-auto py-16 px-2 phone:px-8 sm:px-14 md:px-20" id="events">
            <div className="w-full grid place-items-center">
                <h3 className="uppercase">events</h3>
                <h1 className="uppercase text-2xl">upcoming events</h1>
                <div className="w-full my-2 grid phone:grid-cols-2 lg:grid-cols-4 gap-4">
                    {
                        data.map((dt, index) => (
                            <div className="w-full h-80 shadow-normal grid grid-rows-2 rounded-lg overflow-hidden cursor-pointer">
                                <div className="w-full h-full overflow-hidden">
                                    <img src={church} alt="church" className="w-full h-full object-cover" />
                                </div>
                                <div className="flex justify-center flex-col w-full h-full px-2">
                                    <small>St Mary's High</small>
                                    <h1 className="text-xl phone:text-2xl font-bold">Youth camp</h1>
                                    <p>We have a youth camp at st.Mary's High starting at 7th April.</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Events;
