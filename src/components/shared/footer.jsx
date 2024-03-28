import Image from "next/image";
import logo from '@/assets/onlylogo.png';
import { FaClock, FaFacebookF, FaInstagram, FaLocationDot, FaPhone, FaYoutube } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="py-10 px-3">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-5 md:gap-20">
                    <div className="w-full md:w-1/2 md:p-4">
                        <div className="flex items-center">
                            <Image className="h-16 mb-4 w-auto" src={logo} height={100} width={200} alt="logo" />
                            <p><span className="text-5xl font-bold text-white">Kheya</span> <span className="text-5xl font-thin text-lime-300">Ghat</span></p>
                        </div>
                        <p className=" p-2 border-[#777]">
                            Whether you&apos;re a boat owner looking for efficient serial management solutions or an adventurer seeking thrilling boat trips. We&apos;ve got you covered. <br /> Our user-friendly platform offers a comprehensive range of features, from hassle-free serial registration and tracking to personalized trip planning and booking.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2 p-4 flex flex-col md:flex-row gap-2">
                        <div className="space-y-4 w-full md:w-2/3">
                            <div className="flex gap-4 items-center">
                                <FaLocationDot className="text-3xl" />
                                <p className="text-xl">762R+3M9 Sundarban, Nildumur, <br /> <span className="font-bold text-xl">Satkhira</span></p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaClock className="text-3xl" />
                                <p className="text-xl">Open - Close : <span className="font-bold text-xl">8 AM - 12 AM</span></p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <FaPhone className="text-3xl" />
                                <p className="text-xl">Phone : <span className="font-bold text-xl">+8801575-235909</span></p>
                            </div>
                            <div className="flex gap-4 items-center">
                                <MdEmail className="text-3xl" />
                                <p className="text-xl">Email : <span className="font-bold text-xl">kheyaghat@gmail.com</span></p>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 text-center">
                            <p className="text-white text-3xl font-bold">Follow Us</p>
                            <hr />
                            <div className="flex gap-2 mt-4 justify-center">
                                <Link className="text-black" href={'/'}>
                                    <FaFacebookF className="h-10 w-10 p-2  bg-blue-600 rounded-full " />
                                </Link>
                                <Link className="text-black" href={'/'}>
                                    <FaInstagram className="h-10 w-10 p-2 bg-pink-500 rounded-full " />
                                </Link>
                                <Link className="text-black" href={'/'}>
                                    <FaYoutube className="h-10 w-10 p-2  bg-red-500 rounded-full " />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;