import Image from "next/image"
import defaultImg from '../public/default-image.jpg'
import formatDate from "../utils/format_date"
import Link from "next/link"

const Gallery = ({imgUrl, title, description, author, date, url}) =>{
 
    return(
    <>
    <Link href={`${url}`} className="text-gray-900">
        <div>
            <div className="w-full h-36 overflow-hidden rounded-xl ">
                {imgUrl ? <Image
                alt='img'
                className='object-cover w-full h-full'
                src={imgUrl}
                width= '300'
                height='200'
                /> : <Image
                alt='img'
                className='object-cover w-full h-full'
                src={defaultImg}
                width= '300'
                height='200'/>}
                
            </div>
            <div className=" pt-4 line-clamp-3 font-bold text-sm font-sans">{title}</div>
            <div className="text-gray-500 line-clamp-3 text-sm">{description}</div>
            <div className="flex text-sm pt-2 justify-start text-gray-500">
                <div>{author}</div>
                <div className="px-1"> | </div>
                <div>{formatDate(date)}</div>
            </div>
        </div>
    </Link>
    </>
    )
}

export default Gallery