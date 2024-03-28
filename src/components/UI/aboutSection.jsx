import Link from "next/link";
import AboutImg from '@/assets/aboutImage.png'
import Image from "next/image";

const AboutSec = () => {
    return (
        <div className="px-3 pt-5 pb-12">
            
            <div className="container mx-auto flex flex-col items-center md:flex-row gap-6">
                <div className="w-full md:w-1/2">
                    <p className="text-2xl font-semibold text-lime-300">About us</p>
                    <hr className="w-[200px] border-lime-400" />
                    <h3 className="text-4xl font-bold text-white w-full max-w-lg py-5">
                        We understand the importance of keeping track of your boat&apos;s serial
                    </h3>
                    <p>
                        your premier destination for efficient and reliable boat serial management solutions. Whether you&apos;re a seasoned sailor or a first-time boat owner, we&apos;re here to streamline the process of managing and tracking your vessel&apos;s serial information with ease.
                    </p>
                    <div className="mt-3">
                        <Link href={'about'}>
                            <button className="border py-2 px-8 bg-lime-300 hover:bg-inherit hover:text-white text-blue-900 duration-300">See More</button>
                        </Link>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <Image className="w-full" alt="about img" src={AboutImg} height={200} width={300} />
                </div>
            </div>
        </div>
    );
};

export default AboutSec;