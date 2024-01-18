
import pastor from "../../assets/pastor.jpg";
import { FaPhoneSquare, FaWhatsappSquare, FaFacebookSquare } from "react-icons/fa";
import { MdLocationPin, MdEmail } from "react-icons/md";

const Contacts = () => {
    return (
        <div className="w-full h-auto py-8 px-2 phone:px-8 sm:px-14 md:px-20" id="contacts">
            <div className="w-full h-full grid lg:grid-cols-2">
                <div className="w-full">
                    <h3 className="uppercase">Pastor</h3>
                    <p className="">The best sermon of our pastor</p>
                    <div className="h-64 w-full overflow-hidden grid sm:grid-cols-2">
                        <div className="overflow-hidden p-4 hidden sm:block">
                            <img src={pastor} className="w-full h-full object-cover rounded-xl" />
                        </div>
                        <div className="py-4 w-full bg-pastor bg-cover bg-center bg-blend-darken bg-clear sm:bg-none sm:bg-transparent text-white sm:text-black px-4 sm:px-0">
                            <h2 className="font-bold text-2xl">
                                No body is perfect, Anything is possible
                            </h2>
                            <p className="">
                                the messsage here
                            </p>
                            <p className="italic">
                                <span className="font-bold">Baraka Mwanza,</span> Pastor
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-60 sm:h-72 md:h-auto mt-3">
                    <h3 className="uppercase">Contact us</h3>
                    <p className="">For any inquary reach us through the following</p>
                    <div className="w-full md:px-8">
                        <div className="w-full py-4 grid grid-cols-2 gap-1 sm:gap-2">
                            <a href="#" className="shadow shadow-black rounded h-9 sm:h-12 flex place-items-center">
                                <FaPhoneSquare className="w-8 sm:w-12 h-full" />
                                <p className="px-1 sm:px-4">+254 12345678</p>
                            </a>
                            <a href="#" className="shadow shadow-black rounded h-9 sm:h-12 flex place-items-center">
                                <FaWhatsappSquare className="w-8 sm:w-12 h-full" />
                                <p className="px-1 sm:px-4">+254 12345678</p>
                            </a>
                            <a href="#" className="shadow shadow-black rounded h-9 sm:h-12 flex place-items-center">
                                <FaFacebookSquare className="w-8 sm:w-12 h-full" />
                                <p className="px-1 sm:px-4">fb account name</p>
                            </a>
                            <a href="#" className="shadow shadow-black rounded h-9 sm:h-12 flex place-items-center">
                                <MdEmail className="w-8 sm:w-12 h-full" />
                                <p className="px-1 sm:px-4">log@gmail.com</p>
                            </a>
                        </div>
                        <p>Or visit us</p>
                        <a href="#" className="shadow shadow-black rounded h-8 sm:h-12 flex place-items-center">
                            <MdLocationPin className="w-8 sm:w-12 h-full" />
                            <p className="px-1 sm:px-4">link physical location of church</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Contacts;
