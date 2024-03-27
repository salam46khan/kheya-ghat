'use client';

import Link from "next/link";

const HomeBanner = () => {
    return (
        <div className="home-banner p-3">
            <div className="container mx-auto flex justify-center items-center h-full">
                <div className="w-full max-w-md text-center space-y-2">
                    <h1>Welcome to</h1>
                    <h1 className=""><span className="text-5xl thin-text text-lime-300">Kheya</span><span className="font-extrabold text-5xl text-white">Ghat</span></h1>
                    <p>
                        Thank you for choosing KheyaGhat. Let&apos;s set sail together and create unforgettable memories on the water.
                    </p>
                    <div className="w-full max-w-xs mx-auto flex justify-around pt-5">
                        <Link className="py-2 px-8 border hover:bg-lime-300 hover:text-blue-900 duration-300" href={'/'}>All Boats</Link>
                        <Link className="py-2 px-8 bg-lime-300 hover:bg-inherit border duration-300 hover:text-white text-blue-900" href={'about'}>Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;