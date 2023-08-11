import GallerySkeleton from "./gallery_skeleton";
import Link from "next/link";
import arrow from '../../public/up-arrow.png';
import Image from "next/image";


const HighlightSkeleton = ({section}) => {
    return(
        <div className="animate-pulse">
            <div className="flex justify-between pb-8">
                <h1 className="font-bold text-2xl ">{section}</h1>
                <Link href={`${section}`}>
                <div className="flex items-center">
                    <div className="text-sm font-bold text-black">Read All</div>
                    <div className="h-4 w-8">
                    <Image 
                        className='rotate-90 object-contain h-full w-full' 
                        src={arrow} 
                        alt='--->' 
                        height='20'
                        width='30'/>
                    </div>
                </div>
                </Link>
            </div>
            <div className="grid grid-cols-4 gap-4 pb-8">
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                    <GallerySkeleton/>
                
            </div>
            <div className="relative mb-12 w-full h-80 rounded-2xl bg-gray-200"
            >
                <div className="absolute bottom-0 w-1/2 p-8">
                    <div className=" bg-gray-300 rounded-2xl w-full pt-4 h-8"></div>
                    <div className="w-1/2 bg-gray-300 h-4 rounded-2xl mt-2"></div>
                    <div className="w-1/4 bg-gray-300 h-4 rounded-2xl mt-2"></div>
                    <div className="w-2/3 bg-gray-300 h-4 rounded-2xl mt-2 "></div>
                </div>
                
            </div>
            
        </div>
    )
}

export default HighlightSkeleton;