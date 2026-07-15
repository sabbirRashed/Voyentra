import { Button, Separator } from "@heroui/react";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowForward } from "react-icons/md";

const Banner = () => {
    return (
        <div className="bg-[url('/assets/banner.png')] bg-cover bg-center bg-no-repeat min-h-[80vh] text-white  flex justify-between flex-col items-center  gap-5 h-150">
            <div className="p-10 text-center flex flex-col justify-center  items-center gap-3.5 flex-1">
                <h1 className="text-7xl max-w-150">
                    Discover Your Next Adventure
                </h1>

                <p className="text-2xl ">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex gap-5">
                    <Button className="uppercase tracking-widest bg-cyan-500 px-5 py-6 rounded-none space-x-3">
                        <span>Explore Now</span> <MdOutlineArrowForward />
                    </Button>

                    <Button className="uppercase tracking-widest px-5 py-6 bg-white/50 rounded-none">
                        View Destination
                    </Button>
                    
                </div>
            </div>

            <div className=" bg-white/30 flex justify-between gap-5 w-full items-center">
                <div className="px-3">
                    <h3 className="text-sm">Location</h3>
                    <p className="text-xs">Address, City or Zip</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm">Date/Duration</h3>
                    <p className="text-xs">Anytime/3 Days</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm">Budget</h3>
                    <p className="text-xs">$0-$3000</p>
                </div>

                <Separator variant="tertiary" orientation="vertical" />

                <div>
                    <h3 className="text-sm">People</h3>
                    <p className="text-xs">5-10</p>
                </div>



                <div className="bg-cyan-500 py-2 px-4">
                    <h3>Search</h3>
                </div>
            </div>
        </div>
    );
};

export default Banner;