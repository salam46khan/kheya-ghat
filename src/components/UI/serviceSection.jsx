'use client'
import { FaIoxhost, FaScaleBalanced } from "react-icons/fa6";
import { MdManageHistory, MdMiscellaneousServices } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { RiAppStoreLine } from "react-icons/ri";
const ServiceSec = () => {
    return (
        <div className="py-12 px-3">
            <div className="container mx-auto">
                <div className="w-full max-w-lg mx-auto text-center">
                    <p className="text-5xl font-bold text-lime-300 pb-3">Our service</p>
                    <p>
                        We are committed to providing reliable and efficient server options to support your river crossing platform.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-5 mt-7">
                    <div className="bg-white/20 rounded-md p-4 w-full max-w-sm shadow-md shadow-lime-200/70">
                        <MdMiscellaneousServices className="text-5xl"/>
                        <p className="font-bold text-xl py-3 text-lime-300">Dedicated Servers</p>
                        <p>For organizations requiring maximum control and performance, our dedicated server options provide dedicated resources for your river crossing platform</p>
                    </div>
                    <div className="bg-white/20 rounded-md p-4 w-full max-w-sm shadow-md shadow-lime-200/70">
                        <MdManageHistory className="text-5xl"/>
                        <p className="font-bold text-xl py-3 text-lime-300">Managed Hosting</p>
                        <p>Let our team of experts handle the technical aspects of server management with our managed hosting services. </p>
                    </div>
                    <div className="bg-white/20 rounded-md p-4 w-full max-w-sm shadow-md shadow-lime-200/70">
                        <FaIoxhost className="text-5xl"/>
                        <p className="font-bold text-xl py-3 text-lime-300">Cloud Hosting</p>
                        <p>Our cloud hosting solutions offer the flexibility and scalability you need to handle fluctuations in demand and traffic. With automatic scaling and high availability</p>
                    </div>
                    <div className="bg-white/20 rounded-md p-4 w-full max-w-sm shadow-md shadow-lime-200/70">
                        <AiOutlineSolution className="text-5xl"/>
                        <p className="font-bold text-xl py-3 text-lime-300">Hybrid Solutions</p>
                        <p>Tailor your server environment to your specific requirements with our hybrid hosting solutions. Whether you need a combination of cloud or a custom configuration</p>
                    </div>
                    <div className="bg-white/20 rounded-md p-4 w-full max-w-sm shadow-md shadow-lime-200/70">
                        <RiAppStoreLine className="text-5xl"/>
                        <p className="font-bold text-xl py-3 text-lime-300">Reliability</p>
                        <p>With our server options, you can confidently scale your river crossing platform to accommodate growth and deliver a seamless experience to users.</p>
                    </div>
                    <div className="bg-white/20 rounded-md p-4 w-full max-w-sm shadow-md shadow-lime-200/70">
                        <FaScaleBalanced className="text-5xl"/>
                        <p className="font-bold text-xl py-3 text-lime-300">Scalability</p>
                        <p>Choose KheyaGhat for dependable server options that power your river crossing platform. With our scalable infrastructure, expert support</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServiceSec;