import { Button, Separator } from "@heroui/react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";

const Banner = () => {
    return (
        <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[80vh] text-white  flex justify-between flex-col items-center  gap-5 h-150">
            <div className="p-10 text-center flex flex-col justify-center  items-center gap-4 md:gap-6 flex-1">
                <h1 className="text-4xl md:text-5xl xl:text-7xl font-medium font-playFair max-w-150">
                    Discover Your Next Adventure
                </h1>

                <p className="text-base md:text-xl text-white/80">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex gap-3 md:gap-5 ">
                    <Link href={'/destinations'}>
                        <Button className="uppercase tracking-wide md:tracking-widest  bg-cyan-500 px-3 md:px-5 py-4 md:py-6 rounded-none space-x-1 md:space-x-3 text-xs md:text-sm">
                            <span>Explore Now</span> <MdOutlineArrowForward />
                        </Button>
                    </Link>

                    <Link href={'/destinations'}>
                        <Button className="uppercase tracking-wide md:tracking-widest px-3
                     md:px-5 py-4 md:py-6 bg-white/50 rounded-none text-xs md:text-sm">
                            View Destination
                        </Button>
                    </Link>

                </div>
            </div>

            <div className=" bg-white/30 flex justify-between gap-4 md:gap-5 w-full items-center">
                <div className="px-3 py-2">
                    <h3 className="text-sm font-medium tracking-wider">Location</h3>
                    <p className="text-xs">Address, City or Zip</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm font-medium tracking-wider">Date/Duration</h3>
                    <p className="text-xs">Anytime/3 Days</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm font-medium tracking-wider">Budget</h3>
                    <p className="text-xs">$0-$3000</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm font-medium tracking-wider">People</h3>
                    <p className="text-xs">5-10</p>
                </div>



                <div className="bg-cyan-500 h-full px-4 md:px-10 flex justify-center items-center cursor-pointer tracking-wider">
                    <h3>Search</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;