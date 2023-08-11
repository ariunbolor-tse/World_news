import React, { useState } from 'react';
import arrow from '../public/trace.svg'
import Image from 'next/image';
import defaultImg from '../public/default-image.jpg'
import formatDate from '../utils/format_date';
import Link from 'next/link';

export default function Banner({articles}){
    if(!articles){
        return(
            <div>Error occured</div>
        )
    }

    const [expandedIndex, setExpandedIndex] = useState(null)
    const [articleNum, setArticleNum] = useState(0)

    const handlePrevArticle = () => {
        setArticleNum(prevArticleNum =>
            prevArticleNum ===0 ? articles.length-1 : prevArticleNum-1
        );
    }

    const handleNextArticle = () => {
        setArticleNum(prevArticleNum =>
            prevArticleNum === articles.length-1 ? 0 : prevArticleNum + 1
        );
    }

    

    return(
    <>
        <div className="pt-8">
            <div>
              <div className="relative mb-8 flex items-center gap-8 h-72 w-full">
                <div className='flex absolute top-8 right-2 gap-2'>
                    <div>
                        <Image
                            className='rotate-180'
                            src={arrow}
                            width= '20'
                            height='20'
                            alt='img'
                            onClick={handlePrevArticle}
                        />
                    </div>
                    <div>
                    <Image
                            alt='img'
                            src={arrow}
                            width= '20'
                            height='20'
                            onClick={handleNextArticle}
                        />
                    </div>
                </div>
                
                <div className="w-1/2 z-0 object-center h-5/6 overflow-hidden rounded-2xl">
                        {articles[articleNum]?.urlToImage ? 
                        <Link href={`${articles[articleNum]?.url}`} className='text-gray-900'>
                        <Image 
                        alt='img'
                        className=" object-cover h-full w-full"
                        src={articles[articleNum]?.urlToImage}
                        height='300'
                        width= '600'
                        /> 
                        </Link>: <Image
                        alt='img'
                        className="object-cover h-full w-full"
                        src={defaultImg}
                        height='300'
                        width= '600'
                        />
                        }
                </div>
                <div className='w-1/2 overflow-hidden h-5/6 flex items-center'>
                    <div className='py-4'>
                        <p className='pb-4'>{articles[articleNum]?.author}</p>
                        <Link href={`${articles[articleNum]?.url}`} className='text-gray-900'>
                            <div className="font-bold font-sans text-2xl line-clamp-2">
                                {articles[articleNum]?.title}
                            </div>
                        </Link>
                        <div className='flex relative text-gray-500'>
                            <p className={`${
                            expandedIndex === articleNum ? 'block' : 'line-clamp-3'
                            }`}>{articles[articleNum]?.description}</p>
                            {articles[articleNum]?.description.length>150 && (
                            <button
                                className='text-sm underline absolute bottom-0 right-0'
                                onClick={()=>{
                                    expandedIndex === articleNum
                                    ? setExpandedIndex(null)
                                    : setExpandedIndex(index)
                                }}
                            >
                                {expandedIndex === articleNum ? 'less' : 'more'}
                            </button>
                        )}
                        </div>
                        <div className='pt-4 text-gray-500'>
                            {formatDate(articles[articleNum]?.publishedAt)}
                        </div>
                    </div>
                </div>

              </div>
            </div>
        </div>
    </>
    )
}