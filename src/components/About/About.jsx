
import church from "../../assets/church.jpeg";
import pic2 from "../../assets/v4.jpg";

const About = () => {
    return (
        <div className="w-full h-auto py-16 px-2 phone:px-8 sm:px-14 md:px-20" id="about">
            <div className="w-full h-auto grid md:grid-cols-2">
                <div>
                    <h3 className="uppercase my-2">about us</h3>
                    <h1 className="capitalize text-3xl my-2">We are taking small steps to make earth better planet</h1>
                    <p className="">"a quote here..Bamburi Haller Park, located south of the Cement plant along Mombasa/Malindi highway is a product of the Bamburi Cement company’s effort, since 1971, to convert barren landscape of disused limestone quarries into vibrant and diverse ecosystem of forest, grasslands and ponds.The park was the first recipient of the UNEP Global 500 Roll of Honour award for its unique, ecologically sound and successful rehabilitation undertaken"</p>
                    <p className="font-bold italic">Barack Obama</p>
                </div>
                <div className="w-full h-72 sm:h-80 rounded-lg overflow-hidden my-6 md:my-0">
                    <img src={church} className="w-full h-full object-cover cursor-pointer" alt="church" />
                </div>
            </div>
            <div className="w-full h-auto my-4 grid place-items-center">
                <div className="w-full md:w-3/4 h-72 grid sm:grid-cols-2">
                    <div className="overflow-hidden hidden sm:block">
                        <img src={pic2} className="w-full h-full object-cover cursor-pointer" alt="church" />
                    </div>
                    <div className="flex justify-center flex-col w-full h-full px-2 bg-about bg-blend-darken bg-clear sm:bg-none sm:bg-transparent bg-center bg-cover text-white sm:text-black">
                        <h1 className="text-xl phone:text-2xl font-bold">We are a church that believes in God. Everyone is welcomed</h1>
                        <p>a small paragraph about the church...</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;
