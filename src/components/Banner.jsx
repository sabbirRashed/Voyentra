// import { Button, Separator } from "@heroui/react";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa";
// import { MdOutlineArrowForward } from "react-icons/md";

// const Banner = () => {
//     return (
//         <div className="bg-[url('/assets/Banner.png')] bg-cover bg-center bg-no-repeat min-h-[60vh] md:min-h-[80vh] text-white  flex justify-between flex-col items-center  gap-5 h-150">
//             <div className="p-10 text-center flex flex-col justify-center  items-center gap-4 md:gap-6 flex-1">
//                 <h1 className="text-4xl md:text-5xl xl:text-7xl font-medium font-playFair max-w-150">
//                     Discover Your Next Adventure
//                 </h1>

//                 <p className="text-base md:text-xl text-white/80">
//                     Explore breathtaking destinations and create unforgettable memories
//                     with our curated travel experiences.
//                 </p>

//                 <div className="flex gap-3 md:gap-5 ">
//                     <Link href={'/destinations'}>
//                         <Button className="uppercase tracking-wide md:tracking-widest  bg-cyan-500 px-3 md:px-5 py-4 md:py-6 rounded-none space-x-1 md:space-x-3 text-xs md:text-sm">
//                             <span>Explore Now</span> <MdOutlineArrowForward />
//                         </Button>
//                     </Link>

//                     <Link href={'/destinations'}>
//                         <Button className="uppercase tracking-wide md:tracking-widest px-3
//                      md:px-5 py-4 md:py-6 bg-white/50 rounded-none text-xs md:text-sm">
//                             View Destination
//                         </Button>
//                     </Link>

//                 </div>
//             </div>

//             <div className=" bg-white/30 flex justify-between gap-4 md:gap-5 w-full items-center">
//                 <div className="px-3 py-2">
//                     <h3 className="text-sm font-medium tracking-wider">Location</h3>
//                     <p className="text-xs">Address, City or Zip</p>
//                 </div>

//                 <Separator variant="tertiary" orientation="vertical" />

//                 <div>
//                     <h3 className="text-sm font-medium tracking-wider">Date/Duration</h3>
//                     <p className="text-xs">Anytime/3 Days</p>
//                 </div>

//                 <Separator variant="tertiary" orientation="vertical" />

//                 <div>
//                     <h3 className="text-sm font-medium tracking-wider">Budget</h3>
//                     <p className="text-xs">$0-$3000</p>
//                 </div>

//                 <Separator variant="tertiary" orientation="vertical" />

//                 <div>
//                     <h3 className="text-sm font-medium tracking-wider">People</h3>
//                     <p className="text-xs">5-10</p>
//                 </div>



//                 <div className="bg-cyan-500 h-full px-4 md:px-10 flex justify-center items-center cursor-pointer tracking-wider">
//                     <h3>Search</h3>
//                 </div>
//             </div>
//         </div>


//     );
// };

// export default Banner;


'use client'
import Link from "next/link";
import { MdOutlineArrowForward, MdOutlineAttachMoney } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuCalendarDays, LuUsers } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "@heroui/react";

const Hero = () => {
    return (
        <div className="relative bg-[url('/assets/Banner.png')] bg-cover bg-center bg-no-repeat min-h-[70vh] md:min-h-[85vh] text-white flex flex-col items-center overflow-visible">

            {/* Gradient overlay for better text contrast + depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/60" />

            {/* Main content */}
            <div className="relative z-10 flex flex-col items-center justify-center flex-1 text-center gap-4 md:gap-6 px-6 pt-16 md:pt-10">

                <span className="uppercase text-[10px] md:text-xs tracking-[0.3em] text-cyan-400 font-semibold border border-cyan-400/40 rounded-full px-4 py-1.5 backdrop-blur-sm bg-white/5">
                    ✈ Plan Your Journey
                </span>

                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-7xl font-medium font-playFair max-w-[90%] md:max-w-150 leading-tight">
                    Discover Your Next{" "}
                    <span className="italic text-cyan-400">Adventure</span>
                </h1>

                <p className="text-sm sm:text-base md:text-xl text-white/80 max-w-[85%] md:max-w-2xl">
                    Explore breathtaking destinations and create unforgettable memories
                    with our curated travel experiences.
                </p>

                <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-2">
                    <Link href={'/destinations'}>
                        <Button className="group uppercase tracking-wide md:tracking-widest bg-cyan-500 hover:bg-cyan-400 transition-colors px-4 md:px-6 py-4 md:py-6 rounded-none space-x-1 md:space-x-3 text-xs md:text-sm">
                            <span>Explore Now</span>
                            <MdOutlineArrowForward className="transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>

                    <Link href={'/destinations'}>
                        <Button
                            variant="outline"
                            className="uppercase tracking-wide md:tracking-widest px-4 md:px-6 py-4 md:py-6 bg-white/10 border-white/40 hover:bg-white/20 text-white rounded-none text-xs md:text-sm backdrop-blur-sm">
                            View Destination
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Floating glassmorphism search bar */}
            <div className="relative z-10 w-[92%] md:w-[88%] max-w-5xl -mb-14 md:-mb-10">
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/40 rounded-2xl md:rounded-none overflow-hidden">
                    <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-white/15 md:divide-y-0">

                        <div className="flex items-center gap-3 px-4 md:px-5 py-4 md:py-5 md:border-r border-white/15">
                            <HiOutlineLocationMarker className="text-cyan-400 text-xl shrink-0" />
                            <div className="text-left overflow-hidden">
                                <h3 className="text-xs md:text-sm font-medium tracking-wider truncate">Location</h3>
                                <p className="text-[11px] md:text-xs text-white/60 truncate">Address, City or Zip</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-4 md:px-5 py-4 md:py-5 md:border-r border-white/15 md:border-l-0 border-l border-white/15">
                            <LuCalendarDays className="text-cyan-400 text-xl shrink-0" />
                            <div className="text-left overflow-hidden">
                                <h3 className="text-xs md:text-sm font-medium tracking-wider truncate">Date/Duration</h3>
                                <p className="text-[11px] md:text-xs text-white/60 truncate">Anytime · 3 Days</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-4 md:px-5 py-4 md:py-5 md:border-r border-white/15">
                            <MdOutlineAttachMoney className="text-cyan-400 text-xl shrink-0" />
                            <div className="text-left overflow-hidden">
                                <h3 className="text-xs md:text-sm font-medium tracking-wider truncate">Budget</h3>
                                <p className="text-[11px] md:text-xs text-white/60 truncate">$0 - $3000</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 px-4 md:px-5 py-4 md:py-5 border-l md:border-l-0 border-white/15">
                            <LuUsers className="text-cyan-400 text-xl shrink-0" />
                            <div className="text-left overflow-hidden">
                                <h3 className="text-xs md:text-sm font-medium tracking-wider truncate">People</h3>
                                <p className="text-[11px] md:text-xs text-white/60 truncate">5 - 10</p>
                            </div>
                        </div>
                    </div>

                    <button className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition-colors py-4 tracking-widest uppercase text-xs md:text-sm font-medium cursor-pointer">
                        <IoSearchOutline className="text-base" />
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero