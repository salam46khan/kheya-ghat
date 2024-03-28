'use client';
import logo from '@/assets/KheyaGhat.png'
import Image from 'next/image';
import Link from 'next/link';
import { FaBarsStaggered } from 'react-icons/fa6';
const Navbar = () => {
    const navlinks = <>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'about'}>About</Link></li>
    </>
    return (
        <div className="shadow-md shadow-[#fff2] bg-[#fff] fixed top-0 w-full z-50">
            <div className="navbar " id='navbar'>
                <div className="navbar-start">
                    <div className="dropdown nav-links">
                        <div tabIndex={0} role="button" className=" lg:hidden border mr-5 border-black">
                            <FaBarsStaggered className='h-8 w-8 p-2 bg-blue-900'/>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link href={'/'}>
                        <Image alt='logo' height={100} width={300} className='h-10 w-auto' src={logo} />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex nav-links">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-2">
                    <Link className='hidden md:block' href={'signup'}>
                        <button className='py-2 px-8 bg-blue-900 text-white hover:text-lime-300 hover:bg-blue-950 duration-300'>Registation</button>
                    </Link>
                    <Link href={'login'}>
                        <button className='py-2 px-8 bg-blue-900 text-white hover:text-lime-300 hover:bg-blue-950 duration-300'>Login</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Navbar;