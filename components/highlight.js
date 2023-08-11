import Gallery from "./gallery";
import arrow from '../public/up-arrow.png'
import Image from "next/image";
import formatDate from "../utils/format_date";
import Link from 'next/link';

const Highlight = ({articles, section}) => {

    if(!articles){
        return(
            <div>'Error occured'</div>
        )
    }

    const gridArticles= articles.slice(0,4);
    const mainArticle= articles.slice(4,5);

    return(
    <>
        <div>
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
                {gridArticles.map((el, index)=>(
                    <Gallery
                    imgUrl={el.urlToImage}
                    title={el.title}
                    description={el.description} 
                    author={el.author} 
                    date={el.publishedAt}
                    url={el.url}
                />
                ))}
            </div>

        <Link href={`${mainArticle[0]?.url}`} className="text-gray-900">
            <div className="relative border mb-12 z-1 w-full h-80 overflow-hidden rounded-2xl">
                <Image
                className="w-full h-full absolute top-0 object-cover"
                alt='img'
                width='400'
                height='300'
                src={mainArticle[0].urlToImage}
                />
                <div className="absolute h-full w-full top-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 p-8">
                    <div className=" pt-4 font-bold text-md font-sans text-white">{mainArticle[0]?.title}</div>
                    <div className="text-gray-200 text-sm">{mainArticle[0]?.description}</div>
                    <div className="flex text-sm pt-2 justify-start text-gray-200">
                        <div className=" bg-gray-900 py-1 px-2 rounded-2xl flex justify-start">
                        <div>{mainArticle[0]?.author}</div>
                        <div className="px-1"> | </div>
                        <div>{formatDate(mainArticle[0]?.publishedAt)}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        </Link>
        </div>
    </>
    )
}

export default Highlight;