
import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import { getFeaturedDestination } from "@/lib/data";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";

export default async function Home() {
  const featuredData = await getFeaturedDestination();

  return (
    <div>
      <Banner></Banner>

      {/* featured section */}
      <div className=" w-11/12 max-w-360 mx-auto py-20 md:py-30">
        <div className='flex justify-between items-center gap-4'>

          {/* content */}
          <div>
            <h2 className='text-2xl md:text-4xl font-medium font-playFair'>Featured Destinations</h2>
            <p className='text-sm md:text-base text-[#6C696D] mt-2'>Handpicked travel experiences for the adventure seekers</p>
          </div>
          <div>
            <Link href={'/destinations'}>
              <Button variant='outline' className={'hidden md:flex rounded-none border-cyan-500 text-cyan-500'}>ALL DESTINATIONS <MdOutlineArrowForward /></Button>
            </Link>
            <Link href={'/destinations'}>
              <Button variant='outline' size='sm' className={'md:hidden rounded-none text-xs border-cyan-500 text-cyan-500'}>ALL DESTINATIONS <MdOutlineArrowForward /></Button>
            </Link>
          </div>

        </div>

        {/* featured card */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-10 ">
          {
            featuredData.map(data => <Featured key={data._id} destination={data}></Featured>)
          }
        </div>
      </div>
    </div>
  );
}
